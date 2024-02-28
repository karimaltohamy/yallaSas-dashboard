import React, { useEffect, useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsReportDaraExportJobs } from "../../../utils/columnsTables";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";
import { toast } from "react-toastify";

const ReportDataExportJobs = () => {
  const [reportsExportJobs, setReportsExportJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

  const getReportsExportJobs = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/dataExportJob", {
        payload: encryptedData({
          page: currentPage,
          count: perPage,
          sortBy: "id",
          direction: "desc",
          search,
          columns: [
            "created_at",
            "filename",
            "username",
            "module",
            "status",
            "completed_at",
            "file_size",
          ],
        }),
      });
      setReportsExportJobs(data.data);
      setLastePage(data.last_page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadJobs = async () => {
    const exportJob = reportsExportJobs.find(
      (item) => item.id == selectedRowData[0]
    );
    setLoading(true);
    try {
      const { data } = await apiAxios.get(
        `api/storage/tmp/${exportJob.filename}`
      );
      toast.success("Successfull Operation");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportsExportJobs();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("menu_reports_export")}
          title={t("menu_reports_export")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
          setSearch={setSearch}
        >
          <div
            className="item"
            onClick={() => selectedRowData[0] && handleDownloadJobs()}
          >
            <i class="fa-solid fa-download"></i>
            <span>{t("global_download")}</span>
          </div>
        </HeadTable>
        <MainTable
          rows={reportsExportJobs}
          columns={columnsReportDaraExportJobs}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
        />
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default ReportDataExportJobs;
