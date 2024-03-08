import { t } from "i18next";
import React from "react";
import "./infoDetails.scss";
import apiAxios from "../../utils/apiAxios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { encryptedData } from "../../utils/utilsFunctions";

const InfoDetails = ({ subsciberData }) => {
  const handleAddonSubscription = async (addon_id, user_id) => {
    Swal.fire({
      title: "Cancel Addon Subscription ?",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apiAxios.post(`api/user/cancelAddon`, {
            payload: encryptedData({ addon_id, user_id }),
          });
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

  return (
    <div className="information">
      <div className="info_details">
        <div className="row">
          <div className="col-12">
            <div className="item">
              <h6>{t("user_form_label_username")}</h6>
              <span>{subsciberData.username && subsciberData.username}</span>
            </div>
            <div className="item">
              <h6>{t("user_form_label_password")}</h6>
              <span>{subsciberData.password && subsciberData.password}</span>
            </div>
            <div className="item">
              <h6>{t("users_table_balance")}</h6>
              <span>{subsciberData.balance && subsciberData.balance}</span>
            </div>
            <div className="item">
              <h6>{t("users_table_parent")}</h6>
              <span>
                {subsciberData.parent_username && subsciberData.parent_username}
              </span>
            </div>
            <div className="item">
              <h6>{t("users_table_profile")}</h6>
              <span>
                {subsciberData.profile_name && subsciberData.profile_name}
              </span>
            </div>
            <div className="item">
              <h6>{t("global_expiration")}</h6>
              <span>
                {subsciberData.expiration && subsciberData.expiration}
              </span>
            </div>
            <div className="item">
              <h6>{t("user_overview_debt_days")}</h6>
              <span>0</span>
            </div>
            <div className="item">
              <h6>{t("global_status")}</h6>
              <span>{subsciberData.status ? "active" : "Inactive"} </span>
            </div>
            <div className="item">
              <h6>{t("user_overview_last_login")}</h6>
              <span>
                {subsciberData.last_online ? subsciberData.last_online : ""}
              </span>
            </div>
            <div className="item">
              <h6>{t("user_overview_remaining_download")}</h6>
              <span>
                {subsciberData.remaining_rx ? subsciberData.remaining_rx : ""}
              </span>
            </div>
            <div className="item">
              <h6>{t("user_overview_remaining_upload")}</h6>
              <span>
                {subsciberData.remaining_tx ? subsciberData.remaining_tx : ""}
              </span>
            </div>
            <div className="item">
              <h6>{t("user_overview_remaining_traffic")}</h6>
              <span>
                {subsciberData.remaining_rxtx
                  ? subsciberData.remaining_rxtx
                  : ""}
              </span>
            </div>
            <div className="item">
              <h6>{t("user_overview_remaining_uptime")}</h6>
              <span>
                {subsciberData.remaining_uptime
                  ? subsciberData.remaining_uptime
                  : "0"}
              </span>
            </div>
            <div className="item">
              <h6>{t("user_overview_purchases")}</h6>
              <span>0 </span>
            </div>
            <div className="item">
              <h6>{t("user_overview_created_on")}</h6>
              <span>
                {subsciberData.created_at && subsciberData.created_at}{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      {subsciberData?.addons?.length > 0 && (
        <div className="addons_section">
          <div className="head">
            <h4>{t("user_overview_active_addons")}</h4>
          </div>
          <div className="content">
            <table>
              <thead>
                <tr>
                  <th>Addon</th>
                  <th>Expiration</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {subsciberData.addons &&
                  subsciberData.addons.map((item, i) => {
                    return (
                      <tr>
                        <td>{item.addon_details.name}</td>
                        <td>{item.expiration}</td>
                        <td>
                          <button
                            className="py-1 px-2 bg-black text-white rounded"
                            onClick={() =>
                              handleAddonSubscription(item.id, item.user_id)
                            }
                          >
                            <i class="fa-solid fa-ban"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoDetails;
