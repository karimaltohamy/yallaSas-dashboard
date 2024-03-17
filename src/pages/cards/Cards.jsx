import React, { useEffect, useState } from "react";
import HeadTable from "../../components/headTable/HeadTable";
import MainTable from "../../components/mainTable/MainTable";
import { columnsCards } from "../../utils/columnsTables";
import { Link } from "react-router-dom";
import { t } from "i18next";
import apiAxios from "../../utils/apiAxios";
import { encryptedData } from "../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import Swal from "sweetalert2";
import SelectItem from "../../components/popup/selectItem/SelectItem";
import Popup from "../../components/popup/Popup";
import InputItem from "../../components/popup/inputItem/InputItem";
import { saveAs } from "file-saver";
import axios from "axios";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [managers, setManagers] = useState([]);
  const [rangeFrom, setRangeFrom] = useState([]);
  const [rangeTo, setRangeTo] = useState([]);

  // open popups
  const [openChangeCard, setOpenChangeCard] = useState(false);
  const [openChangeCardRange, setOpenChangeCardRange] = useState(false);

  // inputs data of popups
  const [managerChangeCard, setManagerChangeCard] = useState("");
  const [managerChangeCardRange, setManagerChangeCardRange] = useState("");
  const [countChangeCardRange, setCountChangeCardRange] = useState("");

  const getManagers = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/manager", {
        payload: encryptedData({
          page: 1,
          count: 10,
          sortBy: "username",
          direction: "asc",
          search,
          columns: [
            "username",
            "firstname",
            "lastname",
            "balance",
            "loan_balance",
            "name",
            "username",
            "users_count",
          ],
        }),
      });
      setManagers(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getRangeInfo = async () => {
    try {
      const {
        data: { data },
      } = await apiAxios.get(`api/series/rangeInfo/${selectedRowData[0]}`);
      setRangeFrom(data.range_start);
      setRangeTo(data.range_end);
    } catch (error) {
      console.log(error);
    }
  };

  const getCards = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/series", {
        payload: encryptedData({
          page: 1,
          count: 10,
          sortBy: "series_date",
          direction: "desc",
          search,
          columns: [
            "series",
            "type",
            "value",
            "qty",
            "used",
            "username",
            "name",
            "expiration",
          ],
        }),
      });
      setCards(data.data);
      setLastePage(data.last_page);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleDownloadCSV = async () => {
    setLoading(true);
    try {
      const response = await apiAxios.get(
        `api/series/prepareDownload/${selectedRowData[0]}`,
        { responseType: "blob" }
      );

      // Extracting filename from Content-Disposition header
      const contentDisposition = response.headers["content-disposition"];
      const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const matches = filenameRegex.exec(contentDisposition);
      const filename = matches && matches[1] ? matches[1] : "download.csv"; // default filename

      // Create a URL object from the blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename); // Set the filename for download
      document.body.appendChild(link);

      // Trigger the click event to initiate download
      link.click();

      // Clean up
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get(`api/cardDesign`);
      toast.success("Success Operation");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSuspend = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get(
        `api/series/suspend/${selectedRowData[0]}`
      );
      toast.success("Success Operation");
      getCards();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRelease = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get(
        `api/series/release/${selectedRowData[0]}`
      );
      toast.success("Success Operation");
      getCards();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeCards = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post("api/series/changeOwner", {
        payload: encryptedData({
          series: selectedRowData[0],
          owner: managerChangeCard,
        }),
      });
      toast.success("Successfull Operation");
      setOpenChangeCard(false);
      setManagerChangeCard("");
      getCards();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeCardsRange = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiAxios.post("api/series/changeOwnerCount", {
        payload: encryptedData({
          selected_owner: managerChangeCardRange,
          from_id: rangeFrom,
          to_id: rangeTo,
          series: selectedRowData[0],
          count: countChangeCardRange,
        }),
      });
      toast.success("Successfull Operation");
      setOpenChangeCardRange(false);
      setManagerChangeCardRange("");
      setCountChangeCardRange("");
      getCards();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCard = (e) => {
    Swal.fire({
      title: "Delete Card?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          if (selectedRowData.length > 1) {
            await apiAxios.post(`api/series/bulkDelete`, {
              payload: encryptedData(selectedRowData),
            });
          } else {
            await apiAxios.delete(`api/series/delete/${selectedRowData[0]}`);
          }
          toast.success("Successful operation");
          getCards();
          setLoading(false);
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
    getManagers();
  }, []);

  useEffect(() => {
    selectedRowData[0] && getRangeInfo();
  }, [selectedRowData]);

  useEffect(() => {
    getCards();
  }, [search, perPage, currentPage]);

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("Cards systems")}
          title={t("List of Cards Systems")}
          iconHead={<i className="fa-regular fa-credit-card"></i>}
          setSearch={setSearch}
        >
          <div className="content">
            <Link to={"/cards/add/1"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>{t("Generate")}</span>
            </Link>
            <Link to={"/cards/verify"} className="item">
              <i className="fa-solid fa-magnifying-glass"></i>
              <span>{t("Verify")}</span>
            </Link>
            <Link to={"/cards/jobs-queue"} className="item">
              <i className="fa-solid fa-tower-observation"></i>
              <span>{t("Jobs Queue")}</span>
            </Link>
            <div className="item">
              <i className="fa-solid fa-list-ul"></i>
              <span>{t("List")}</span>
            </div>
            <div
              className="item"
              onClick={selectedRowData[0] && handleDownloadCSV}
            >
              <i className="fa-solid fa-download"></i>
              <span>{t("Download (CSV)")}</span>
            </div>
            <div
              className="item"
              onClick={selectedRowData[0] && handleDownloadPDF}
            >
              <i className="fa-solid fa-download"></i>
              <span>{t("Download (PDF)")}</span>
            </div>
            <div className="item" onClick={selectedRowData[0] && handleSuspend}>
              <i className="fa-solid fa-pause"></i>
              <span>{t("Suspend")}</span>
            </div>
            <div className="item" onClick={selectedRowData[0] && handleRelease}>
              <i className="fa-solid fa-play"></i>
              <span>{t("Release")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && setOpenChangeCard(true)}
            >
              <i className="fa-solid fa-user"></i>
              <span>{t("Change Owner")}</span>
            </div>
            <div
              className="item"
              onClick={() => selectedRowData[0] && setOpenChangeCardRange(true)}
            >
              <i className="fa-solid fa-user"></i>
              <span>{t("Change Owner (Range)")}</span>
            </div>
            <div className="item">
              <i className="fa-regular fa-address-card"></i>
              <span>{t("Card Designer")}</span>
            </div>
            <div
              className="item"
              onClick={selectedRowData[0] && handleDeleteCard}
            >
              <i className="fa-solid fa-trash"></i>
              <span>{t("Delete")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable
          rows={cards}
          columns={columnsCards}
          setSelectedRowData={setSelectedRowData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          setPerPage={setPerPage}
          lastPage={lastPage}
          rowId={"series"}
          uniqueIdentifier={"cards"}
        />
        {loading && <Loader />}
      </div>
      {/* popup Change cards */}
      <Popup
        title={t("Change Cards Owner")}
        openPopup={openChangeCard}
        setOpenPopup={setOpenChangeCard}
        onSubmit={handleChangeCards}
      >
        <SelectItem
          label={t("global_manager")}
          type={"text"}
          value={managerChangeCard}
          onChange={setManagerChangeCard}
          options={
            managers &&
            managers.map((item, i) => ({ name: item.username, value: item.id }))
          }
        />
      </Popup>
      {/* popup Change cards (Range) */}
      <Popup
        title={t("Change Cards Owner (Range)")}
        openPopup={openChangeCardRange}
        setOpenPopup={setOpenChangeCardRange}
        onSubmit={handleChangeCardsRange}
      >
        <SelectItem
          label={t("global_manager")}
          value={managerChangeCardRange}
          onChange={setManagerChangeCardRange}
          options={
            managers &&
            managers.map((item, i) => ({ name: item.username, value: item.id }))
          }
        />
        <InputItem
          label={t("Count")}
          type={"text"}
          value={countChangeCardRange}
          onChange={setCountChangeCardRange}
          placeholder={"Count (max: 2)"}
        />
      </Popup>
    </div>
  );
};

export default Cards;
