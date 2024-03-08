import React, { useEffect, useState } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./settingsNetwork.scss";
import { t } from "i18next";
import InputSectionForm from "../../../components/sectionform/InputSectionForm";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData } from "../../../utils/utilsFunctions";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";

const SettingsNetwork = () => {
  const [interfaces, setInterfaces] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [settingsNetwork, setSettingsNetwork] = useState({
    hostname: "",
    gateway: "",
    nameservers: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSettingsNetwork((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  // handle add Address
  const addAddress = () => {
    setAddresses((prev) => {
      return [...prev, { interface: "", ip: "", netmask: "", checked: false }];
    });
  };

  // handle change inputs addresses
  const handleInputChangeAddress = (value, index, property) => {
    // Update the specific property of the item
    const updatedItem = {
      ...addresses[index],
      [property]: value,
    };
    const updatedRowsTable = [...addresses];
    updatedRowsTable[index] = updatedItem;

    // Update the state
    setAddresses(updatedRowsTable);
  };

  // handle remove address
  const handleRemoveRowAddress = (index) => {
    setAddresses(addresses.filter((item, i) => i != index));
  };

  // handle add Address
  const addRoute = () => {
    setRoutes((prev) => {
      return [...prev, { dst: "", netmask: "", gateway: "", checked: false }];
    });
  };

  // handle change inputs Route
  const handleInputChangeRoute = (value, index, property) => {
    // Update the specific property of the item
    const updatedItem = {
      ...routes[index],
      [property]: value,
    };
    const updatedRowsTable = [...routes];
    updatedRowsTable[index] = updatedItem;

    // Update the state
    setRoutes(updatedRowsTable);
  };

  // handle remove address
  const handleRemoveRowRoute = (index) => {
    setRoutes(routes.filter((item, i) => i != index));
  };

  const getInterfaces = async () => {
    try {
      const { data } = await apiAxios.get("api/linux/network/interfaces");
      setInterfaces(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getNetworkSettings = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/linux/network");
      setSettingsNetwork((preev) => {
        return {
          hostname: data.hostname,
          gateway: data.gateway,
          nameservers: data.nameservers.join(","),
        };
      });
      setAddresses(data.addresses?.map((item) => ({ ...item, checked: true })));
      setRoutes(data.routes?.map((item) => ({ ...item, checked: true })));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = async () => {
    setLoading(true);
    const nameserversArray = settingsNetwork.nameservers.split(",");
    const updatedRowsTableAddresses = addresses.map((item) => {
      const { checked, ...updatedItem } = item;
      return updatedItem;
    });
    const updatedRowsTableRoute = routes.map((item) => {
      const { checked, ...updatedItem } = item;
      return updatedItem;
    });
    try {
      await apiAxios.post("api/linux/network", {
        payload: encryptedData({
          hostname: settingsNetwork.hostname,
          gateway: settingsNetwork.gateway,
          nameservers: nameserversArray,
          addresses: updatedRowsTableAddresses,
          routes: updatedRowsTableRoute,
        }),
      });
      toast.success("Successfull Operation");
      getNetworkSettings();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInterfaces();
    getNetworkSettings();
  }, []);

  return (
    <div className="m-[10px]">
      <MainSection
        title={t("Network Settings")}
        icon={<i className="fa-solid fa-asterisk"></i>}
      >
        <div className="settings_network_content">
          <div className="global_settings">
            <h4 className="title">{t("Global Settings")}</h4>
            <form action="" className="global_form">
              <InputSectionForm
                label={t("Hostname")}
                value={settingsNetwork.hostname}
                id={"hostname"}
                onChange={handleChange}
              />
              <InputSectionForm
                label={t("Default Gateway")}
                value={settingsNetwork.gateway}
                id={"gateway"}
                onChange={handleChange}
              />
              <InputSectionForm
                label={t("DNS(s)")}
                value={settingsNetwork.nameservers}
                id={"nameservers"}
                onChange={handleChange}
              />
            </form>
          </div>
          <div className="network_interfaces">
            <h4 className="title">{t("Network Interfaces")}</h4>

            <button className="btn_add_col" onClick={addAddress}>
              <i className="fa-solid fa-plus"></i>
              <span>{t("Add Adress")}</span>
            </button>

            <div className="network_table">
              <table>
                <thead>
                  <tr>
                    <th>{t("Interface")}</th>
                    <th>{t("IP")}</th>
                    <th>{t("Netmask")}</th>
                    <th>{t("Action")}</th>
                  </tr>
                </thead>
                <tbody>
                  {addresses &&
                    addresses.map((item, i) => {
                      return (
                        <tr>
                          <td>
                            {!item.checked && (
                              <select
                                name=""
                                id=""
                                onChange={(e) =>
                                  handleInputChangeAddress(
                                    e.target.value,
                                    i,
                                    "interface"
                                  )
                                }
                                value={item.interface}
                              >
                                <option value="">Select Interface</option>
                                {interfaces &&
                                  interfaces.map((item, i) => (
                                    <option value={item.status} key={i}>
                                      {item.name}
                                    </option>
                                  ))}
                              </select>
                            )}
                            {item.checked && <span>{item.interface}</span>}
                          </td>
                          <td>
                            {!item.checked && (
                              <input
                                type="text"
                                placeholder="x.x.x"
                                value={item.ip}
                                onChange={(e) =>
                                  handleInputChangeAddress(
                                    e.target.value,
                                    i,
                                    "ip"
                                  )
                                }
                              />
                            )}
                            {item.checked && <span>{item.ip}</span>}
                          </td>
                          <td>
                            {!item.checked && (
                              <input
                                type="text"
                                placeholder="x.x.x"
                                value={item.netmask}
                                onChange={(e) =>
                                  handleInputChangeAddress(
                                    e.target.value,
                                    i,
                                    "netmask"
                                  )
                                }
                              />
                            )}
                            {item.checked && <span>{item.netmask}</span>}
                          </td>
                          <td>
                            <div className="btns">
                              {!item.checked && (
                                <button
                                  onClick={() =>
                                    handleInputChangeAddress(true, i, "checked")
                                  }
                                >
                                  <i className="fa-solid fa-check"></i>
                                </button>
                              )}
                              <button onClick={() => handleRemoveRowAddress(i)}>
                                <i className="fa-solid fa-xmark"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="static_interfaces">
            <h4 className="title">{t("Static Routes")}</h4>

            <button className="btn_add_col" onClick={addRoute}>
              <i className="fa-solid fa-plus"></i>
              <span>{t("Add Route")}</span>
            </button>

            <div className="network_table">
              <table>
                <thead>
                  <tr>
                    <th>{t("Destination")}</th>
                    <th>{t("Netmask")}</th>
                    <th>{t("Gateway")}</th>
                    <th>{t("Action")}</th>
                  </tr>
                </thead>
                <tbody>
                  {routes &&
                    routes.map((item, i) => {
                      return (
                        <tr>
                          <td>
                            {!item.checked && (
                              <input
                                type="text"
                                placeholder="x.x.x"
                                onChange={(e) =>
                                  handleInputChangeRoute(
                                    e.target.value,
                                    i,
                                    "dst"
                                  )
                                }
                                value={item.dst}
                              />
                            )}
                            {item.checked && <span>{item.dst}</span>}
                          </td>
                          <td>
                            {!item.checked && (
                              <input
                                type="text"
                                placeholder="x.x.x"
                                onChange={(e) =>
                                  handleInputChangeRoute(
                                    e.target.value,
                                    i,
                                    "netmask"
                                  )
                                }
                                value={item.netmask}
                              />
                            )}
                            {item.checked && <span>{item.netmask}</span>}
                          </td>
                          <td>
                            {!item.checked && (
                              <input
                                type="text"
                                placeholder="x.x.x"
                                onChange={(e) =>
                                  handleInputChangeRoute(
                                    e.target.value,
                                    i,
                                    "gateway"
                                  )
                                }
                                value={item.gateway}
                              />
                            )}
                            {item.checked && <span>{item.gateway}</span>}
                          </td>
                          <td>
                            <div className="btns">
                              {!item.checked && (
                                <button
                                  onClick={() =>
                                    handleInputChangeRoute(true, i, "checked")
                                  }
                                >
                                  <i className="fa-solid fa-check"></i>
                                </button>
                              )}
                              <button onClick={() => handleRemoveRowRoute(i)}>
                                <i className="fa-solid fa-xmark"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>

          <button className="btn_saveChanges" onClick={handleSaveSettings}>
            <i className="fa-regular fa-floppy-disk"></i>
            {t("Save")}
          </button>
        </div>
        {loading && <Loader />}
      </MainSection>
    </div>
  );
};

export default SettingsNetwork;
