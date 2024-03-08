import React, { useEffect, useState } from "react";
import SectionForm from "../../../components/sectionform/SectionForm";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import SwitchSectionForm from "../../../components/sectionform/SwitchSectionForm";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import { t } from "i18next";
import Loader from "../../../components/loader/Loader";
import Popup from "../../../components/popup/Popup";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";

const BackupSettings = () => {
  const [loading, setLoading] = useState(false);
  const [openInitilizeDisk, setOpenInitilizeDisk] = useState(false);
  const [initilizeDisk, setInitilizeDisk] = useState("");

  const [settings, setSettings] = useState({
    backup_disk_init: null,
    backup_disk: "",
    backup_partition: "",
    backup_daily_enabled: false,
    backup_daily_time: "",
    backup_sessions: false,
    backup_upload_gdrive: false,
    backup_auto_delete: 7,
  });
  const [disks, setDisks] = useState([]);
  const [unusedDisks, setUnusedDisks] = useState([]);
  const [vdbDisks, setVdbDisks] = useState([]);

  const getDisks = async () => {
    try {
      const { data } = await apiAxios.get("api/disks");
      setDisks(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUnusedDisks = async () => {
    try {
      const { data } = await apiAxios.get("api/disks/unused");
      setUnusedDisks(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getVdbDisks = async () => {
    try {
      const { data } = await apiAxios.get("api/partitions/vdb");
      setVdbDisks(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSettings = (e) => {
    setSettings((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const getSettings = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/settings/backup_");
      setSettings((prev) => {
        return {
          ...prev,
          backup_disk_init: data && data.backup_disk_init,
          backup_disk: data && data.backup_disk,
          backup_partition: data && data.backup_partition,
          backup_daily_enabled:
            data && data.backup_daily_enabled == 1 ? true : false,
          backup_daily_time: data && data.backup_daily_time,
          backup_sessions: data && data.backup_sessions == 1 ? true : false,
          backup_upload_gdrive:
            data && data.backup_upload_gdrive == 1 ? true : false,
          backup_auto_delete: data && data.backup_auto_delete,
        };
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInitilizeDisk = async () => {};

  const handleForm = async () => {
    setLoading(true);
    try {
      await apiAxios.post("api/settings", {
        payload: encryptedData({
          backup_disk_init: settings.backup_disk_init,
          backup_disk: settings.backup_disk,
          backup_partition: settings.backup_partition,
          backup_daily_enabled: settings.backup_daily_enabled ? 1 : 0,
          backup_daily_time: settings.backup_daily_time,
          backup_sessions: settings.backup_sessions ? 1 : 0,
          backup_upload_gdrive: settings.backup_upload_gdrive ? 1 : 0,
          backup_auto_delete: settings.backup_auto_delete,
        }),
      });
      toast.success("Successfull Operation");
      getSettings();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSettings();
    getDisks();
    getUnusedDisks();
    getVdbDisks();
  }, []);

  return (
    <div className="m-[10px]">
      <SectionForm title={"Backup Settings"}>
        <button
          className="px-3 py-1 text-[15px] bg-black text-white rounded-md"
          onClick={() => setOpenInitilizeDisk(true)}
        >
          Initilize Disk (Format)
        </button>
        <SelectSectionForm
          label={t("aboard_backup")}
          value={settings.backup_disk}
          onChange={handleChangeSettings}
          id="backup_disk"
          options={
            disks &&
            disks.map((item) => ({ name: item.model, value: item.name }))
          }
        />
        <SelectSectionForm
          label={t("Disk Partition")}
          value={settings.backup_partition}
          onChange={handleChangeSettings}
          id="backup_partition"
          options={
            vdbDisks &&
            vdbDisks.map((item) => ({ name: item.model, value: item.name }))
          }
        />
        <SwitchSectionForm
          label={"Daily Backups"}
          value={settings.backup_daily_enabled}
          onChange={handleChangeSettings}
          id="backup_daily_enabled"
        />
        <InputSectionForm
          label={"Daily Backup Time"}
          type={"time"}
          value={settings.backup_daily_time}
          onChange={handleChangeSettings}
          id="backup_daily_time"
        />
        <SwitchSectionForm
          label={"Include Session Records"}
          value={settings.backup_sessions}
          onChange={handleChangeSettings}
          id="backup_sessions"
        />
        <SwitchSectionForm
          label={"Upload To Google Drive"}
          value={settings.backup_upload_gdrive}
          onChange={handleChangeSettings}
          id="backup_upload_gdrive"
        />
        <SelectSectionForm
          label={t("Auto Delete Old Backups")}
          value={settings.backup_auto_delete}
          onChange={handleChangeSettings}
          id="backup_auto_delete"
          options={[
            { name: "Never", value: "-1" },
            { name: "1 Week", value: "7" },
            { name: "2 Weeks", value: "14" },
            { name: "1 Month", value: "30" },
            { name: "2 Month", value: "60" },
            { name: "3 Month", value: "90" },
            { name: "4 Month", value: "120" },
            { name: "5 Month", value: "150" },
          ]}
        />
      </SectionForm>
      <div className="btns_add">
        <button className="btn_add" onClick={handleForm}>
          {t("global_button_submit")}
        </button>
        <button className="btn_close">{t("global_button_cancel")}</button>
      </div>
      {loading && <Loader />}

      {/* popup InitilizeDisk */}
      <Popup
        title={t("Initialize Disk")}
        openPopup={openInitilizeDisk}
        setOpenPopup={setOpenInitilizeDisk}
        onSubmit={handleInitilizeDisk}
      >
        <SelectSectionForm
          label={t("Select Disk")}
          value={initilizeDisk}
          onChange={setInitilizeDisk}
          options={[
            { name: "None", value: "0" },
            { name: "TLS", value: "1" },
            { name: "SSL", value: "2" },
          ]}
        />
      </Popup>
    </div>
  );
};

export default BackupSettings;
