import React, { useState } from "react";
import "./systemMaintenance.scss";
import { t } from "i18next";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import apiAxios from "../../../utils/apiAxios";
import Loader from "../../../components/loader/Loader";

const SystemMaintenance = () => {
  const [loading, setLoading] = useState(false);

  const handleShutdown = async () => {
    Swal.fire({
      title: "Shutdown ?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.get(`api/system/shutdown`);
          toast.success("Successful operation");
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        } finally {
          setLoading(false);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };
  const handleReboot = async () => {
    Swal.fire({
      title: "Reboot ?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.get(`api/system/reboot`);
          toast.success("Successful operation");
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        } finally {
          setLoading(false);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  const handleLogoutManagers = async () => {
    Swal.fire({
      title: "Force Logout All Managers ?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.get(`api/system/logoutAll`);
          toast.success("Successful operation");
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        } finally {
          setLoading(false);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  const handleForcePasswordChange = async () => {
    Swal.fire({
      title: "Force Password Change On All Managers ?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.get(`api/system/forceChangePassword`);
          toast.success("Successful operation");
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        } finally {
          setLoading(false);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  const handleClearSessionsTable = async () => {
    Swal.fire({
      title: "Clear Current Sessions",
      text: "This will clear current sessions data. Use it only when system becomes very slow or not showing online users",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.get(`api/system/clear_sessions`);
          toast.success("Successful operation");
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        } finally {
          setLoading(false);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };
  const handleCloseOnlineSessions = async () => {
    Swal.fire({
      title: "Close Online Sessions ?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.get(`api/system/close_sessions`);
          toast.success("Successful operation");
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        } finally {
          setLoading(false);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };
  const handleDeleteExpiredUsers = async () => {
    Swal.fire({
      title: "Delete Expired Users ?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.get(`api/system/deleteExpiredUsers`);
          toast.success("Successful operation");
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        } finally {
          setLoading(false);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };
  const handleDeleteExpiredCard = async () => {
    Swal.fire({
      title: "Delete Expired Card Users ?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.get(`api/system/deleteExpiredCardUsers`);
          toast.success("Successful operation");
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        } finally {
          setLoading(false);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };
  const handleClearEmailQueue = async () => {
    Swal.fire({
      title: "Clear Email Queue ?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.get(`api/system/clearEmailQueue`);
          toast.success("Successful operation");
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        } finally {
          setLoading(false);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };
  const handleClearSmsQueue = async () => {
    Swal.fire({
      title: "Clear SMS Queue ?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await apiAxios.get(`api/system/clearSMSQueue`);
          toast.success("Successful operation");
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        } finally {
          setLoading(false);
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("User clicked Cancel");
      }
    });
  };

  return (
    <div className="system_maintenance_section">
      <div className="head text-center pt-5 pb-3">
        <h4 className="font-bold text-[25px]">{t("System Maintenance")}</h4>
      </div>
      <div className="faq">
        <div className="accordion" id="accordionExample">
          <div
            className="accordion-item aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="300"
          >
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                {t("Power Control")}
                <i className="fa-solid fa-power-off"></i>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t("Power off or reboot server")}
                <div className="btns">
                  <button
                    className="btn_system btn_power"
                    onClick={handleShutdown}
                  >
                    Shutdwon
                  </button>
                  <button
                    className="btn_system btn_reboot"
                    onClick={handleReboot}
                  >
                    Reboot
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="accordion-item aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="500"
          >
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                {t("Logout All Managers")}
                <i className="fa-pull-right fa fa-sign-out"></i>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t("Force logout of all logged in managers (including admin).")}
                <div className="btns">
                  <button
                    className="btn_system btn_logout_Managers"
                    onClick={handleLogoutManagers}
                  >
                    {t("Log out Managers")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="accordion-item aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="700"
          >
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                {t("Force Change Passowrd")}
                <i className="fa-pull-right fa fa-key"></i>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t(
                  "Force logout of all logged in managers (including admin) and force them to change password on next login."
                )}
                <div className="btns">
                  <button
                    className="btn_system btn_change_password"
                    onClick={handleForcePasswordChange}
                  >
                    {t("Force Password Change")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="accordion-item aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="900"
          >
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                {t("Import SAS3 Database")}
                <i className="fa-pull-right fa fa-database"></i>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t(
                  "Import SAS3 backup file. This operation will erase your current server database and erases everything."
                )}
                <div className="btns">
                  <a
                    href="database-migration.html"
                    className="btn_system btn_Import"
                  >
                    {t("Import")}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="accordion-item aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="1100"
          >
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                {t("Clear Sessions Table")}
                <i className="fa-pull-right fa fa-empty-set"></i>
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t(
                  "This is useful to do from time to time to reduce your database size or to force removal of stale sessions. This operation is totally safe and will NOT reset traffic counters for users. SAS4 uses different table to keep track of users traffic usage."
                )}
                <div className="btns">
                  <button
                    className="btn_system btn_Clear"
                    onClick={handleClearSessionsTable}
                  >
                    {t("Clear")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item aos-init aos-animate">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                {t("Close Online Sessions")}
                <i className="fa-pull-right fa fa-window-close"></i>
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t(
                  "Force all online sessions to get closed immediately. This won't affect real online users as their sessions will get opened on next interim-update."
                )}
                <div className="btns">
                  <button
                    className="btn_system btn_close_sessions"
                    onClick={handleCloseOnlineSessions}
                  >
                    {t("Close Sessions")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="accordion-item aos-init aos-animate"
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="500"
          >
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                {t("Delete Expired Users")}
                <i className="fa-pull-right fa fa-trash"></i>
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t(
                  "This operation is useful to maintain users count bellow your license limit."
                )}
                <div className="btns">
                  <button
                    className="btn_system btn_delete_users"
                    onClick={handleDeleteExpiredUsers}
                  >
                    {t("Delete")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="accordion-item aos-init aos-animate"
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="700"
          >
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                {t("Delete Expired Card Users")}
                <i className="fa-pull-right fa fa-trash"></i>
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t("This will delete only expired card users.")}
                <div className="btns">
                  <button
                    className="btn_system btn_card_user"
                    onClick={handleDeleteExpiredCard}
                  >
                    {t("Delete")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="accordion-item aos-init aos-animate"
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="900"
          >
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                {t("Clear Email Queue")}
                <i className="fa-pull-right fa fa-envelope-square"></i>
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t(
                  "This will clear any pending emails in the queue, blocking new emails from getting sent."
                )}
                <div className="btns">
                  <button
                    className="btn_system btn_clear_email"
                    onClick={handleClearEmailQueue}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="accordion-item aos-init aos-animate"
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="1100"
          >
            <h2 className="accordion-header" id="headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                {t("Clear SMS Queue")}{" "}
                <i className="fa-pull-right fa fa-envelope"></i>
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {t("Clear all SMS messages waiting in queue.")}
                <div className="btns">
                  <button
                    className="btn_system btn_clear_sms"
                    onClick={handleClearSmsQueue}
                  >
                    {t("Clear")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default SystemMaintenance;
