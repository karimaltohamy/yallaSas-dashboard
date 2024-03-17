import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsBackupIndex } from "../../../utils/columnsTables";
import { Link } from "react-router-dom";
import { t } from "i18next";
import { encryptedData } from "../../../utils/utilsFunctions";
import apiAxios from "../../../utils/apiAxios";
import { toast } from "react-toastify";
import { saveAs } from "file-saver";
import Swal from "sweetalert2";
import "./backupIndex.scss";

const BackupIndex = () => {
  const [backups, setBackups] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [openPopupProgress, setOpenPopupProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileUpload, setFileUpload] = useState("");

  const getBackups = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/backup", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "file_time",
          direction: "asc",
          search,
          columns: ["filename", "file_time", "size", "version"],
        }),
      });
      setBackups(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBackup = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get("api/backup/create");
      toast.success("Successfully ");
      getBackups();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadBackup = async () => {
    const exportBackups = backups.find(
      (item) => item.id === selectedRowData[0]
    );
    setLoading(true);
    try {
      const {
        data: { data },
      } = await apiAxios.get(
        `api/backup/prepareDownload/${selectedRowData[0]}`,
        { responseType: "blob" }
      );
      const blob = new Blob([data]);
      saveAs(blob, exportBackups.filename);
      toast.success("Successfully Download");
      getBackups();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlProgress = async () => {
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/restore/status");
      setProgress(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/backup/upload", {
        payload: encryptedData(),
      });
      toast.success("Successfull Upload");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const handleRestoreBackup = async () => {
    Swal.fire({
      title: "Database Restore?",
      text: "Restore selected backup file ?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiAxios.get(`api/restore/${selectedRowData[0]}`);
          setLoading(false);
          setOpenPopupProgress(true);
          await handlProgress();
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  const handleDeleteBackups = async (e) => {
    Swal.fire({
      title: "Delete Backups?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiAxios.delete(`api/backup/${selectedRowData[0]}`);
          toast.success("Successful operation");
          setLoading(false);
          getBackups();
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  useEffect(() => {
    getBackups();
  }, [search, perPage, currentPage]);

  useEffect(() => {
    if (openPopupProgress) {
      const interval = setInterval(handlProgress, 3000);
      return () => clearInterval(interval);
    }
  }, [openPopupProgress]);

  useEffect(() => {
    handleUpload();
  }, [fileUpload]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("Backup")}
          title={t("Backup / Restore")}
          iconHead={<i className="ng-tns-c118-32 fa fa-hdd"></i>}
        >
          <div className="content">
            <div className="item" onClick={handleCreateBackup}>
              <i className="fa-solid fa-plus"></i>
              <span>{t("Create Backup")}</span>
            </div>
            <div
              className="item"
              onClick={selectedRowData[0] && handleDownloadBackup}
            >
              <i className="fa-solid fa-download"></i>
              <span>{t("Download")}</span>
            </div>
            <div className="item">
              <i className="fa-solid fa-upload"></i>
              <span>{t("Upload")}</span>
            </div>
            <div
              className="item"
              onClick={selectedRowData[0] && handleRestoreBackup}
            >
              <label htmlFor="fileUpload" className="flex items-center gap-2">
                <i className="fa-solid fa-rotate"></i>
                <span>{t("Restore")}</span>
              </label>
              <input
                type="file"
                className="hidden"
                id="fileUpload"
                onChange={(e) => setFileUpload(e.target.files[0])}
              />
            </div>
            <div
              className="item"
              onClick={selectedRowData[0] && handleDeleteBackups}
            >
              <i className="fa-solid fa-trash"></i>
              <span>{t("Delete")}</span>
            </div>
            <Link to={"/backup-index/settings"} className="item">
              <i className="fa-solid fa-gears"></i>
              <span>{t("Settings")}</span>
            </Link>
          </div>
        </HeadTable>
        <MainTable
          rows={backups}
          columns={columnsBackupIndex}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
          uniqueIdentifier={"backups"}
        />
      </div>
      {openPopupProgress && (
        <div className="popup_progress">
          <div className="progress_content">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow="26"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {progress}%
              </div>
            </div>
            <p className="message">
              Do not close this window or reload the page
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackupIndex;
