import React, { useState } from "react";
import HeadTable from "../../../components/headTable/HeadTable";
import { columnsSettingsAcl } from "../../../utils/columnsTables";
import MainTable from "../../../components/mainTable/MainTable";
import Popup from "../../../components/popup/Popup";
import InputItem from "../../../components/popup/inputItem/InputItem";
import "./settingsAcl.scss";
import { t } from "i18next";

const SettingsAcl = () => {
  // opens and setOpnes popups
  const [openAddGroup, setOpenAddGroup] = useState(false);

  // inputs data of popups
  const [groupName, setGroupName] = useState("");

  const handleAddGroup = (e) => {
    e.preventDefault();
    console.log({});
  };

  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path={t("settings / acl")}
          title={t("Security Groups")}
          iconHead={<i className="fa-solid fa-people-group"></i>}
        >
          <div className="content">
            <div className="item" onClick={() => setOpenAddGroup(true)}>
              <i className="fa-solid fa-plus"></i>
              <span>{t("Add")}</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={[]} columns={columnsSettingsAcl} />
      </div>
      <div className="boxs_trees">
        <div className="row line">
          <div className="col-12 col-md-5">
            <div className="box_tree">
              <div className="head">
                <i className="fa-solid fa-user"></i>
                <h4>{t("Given Permissions")}</h4>
              </div>
              <div className="box_content"></div>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div className="btns">
              <button className="btn_exchange">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="btn_exchange">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="box_tree">
              <div className="head">
                <i className="fa-solid fa-desktop"></i>
                <h4>{t("Available Permissions")}</h4>
              </div>
              <div className="box_content"></div>
            </div>
          </div>
        </div>
      </div>
      {/* popup */}
      <Popup
        title={t("Group Name")}
        openPopup={openAddGroup}
        setOpenPopup={setOpenAddGroup}
        onSubmit={handleAddGroup}
      >
        <InputItem
          label={t("Group Name")}
          type={"text"}
          value={groupName}
          onChange={setGroupName}
          placeholder={""}
        />
      </Popup>
    </div>
  );
};

export default SettingsAcl;
