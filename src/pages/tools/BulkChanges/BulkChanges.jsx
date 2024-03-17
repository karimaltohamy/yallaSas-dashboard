import React, { useEffect, useState } from "react";
import "./bulkChanges.scss";
import MainSection from "../../../components/mainSection/MainSection";
import { t } from "i18next";
import apiAxios from "../../../utils/apiAxios";
import { encryptedData, generateUUID } from "../../../utils/utilsFunctions";
import Loader from "../../../components/loader/Loader";
import { toast } from "react-toastify";

const BulkChanges = () => {
  const [bulkFilter, setBulkFilter] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [managers, setManagers] = useState([]);
  const [sites, setSites] = useState([]);
  const [groups, setGroups] = useState([]);
  const [key, setKey] = useState("");
  const [operator, setOperator] = useState("");
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [valueApply, setValueApply] = useState("");
  const [loading, setLoading] = useState(false);
  const [recordsMatching, setRecordsMatching] = useState("");

  const addBulkFilterRow = (row) => {
    setBulkFilter((prev) => {
      return [...prev, row];
    });
    setKey("");
    setValue("");
    setOperator("");
  };

  const removeBulkFilter = (index) => {
    setBulkFilter(bulkFilter.filter((item, i) => i != index));
  };

  const getProfiles = async () => {
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/list/profile/0");
      setProfiles(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getManagers = async () => {
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/index/manager");
      setManagers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSites = async () => {
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/site");
      setSites(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGroups = async () => {
    try {
      const {
        data: { data },
      } = await apiAxios.get("api/group");
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.post("api/index/user", {
        payload: encryptedData({
          bulk_filter: bulkFilter,
        }),
      });
      setRecordsMatching(data.total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async () => {
    setLoading(true);
    if (!name.length > 0 && !valueApply.length > 0) {
      return null;
    }
    try {
      await apiAxios.post("api/bulkChanges/users/apply", {
        payload: encryptedData({
          filter: bulkFilter,
          action: { name, option: valueApply },
        }),
      });
      toast.success("Saved Successfull");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfiles();
    getManagers();
    getSites();
    getGroups();
  }, []);

  return (
    <div className="m-[10px]">
      <MainSection
        title={t("Bulk Changes")}
        icon={<i className="fa-solid fa-people-group"></i>}
      >
        <div className="bulk_changes_content">
          {bulkFilter.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Operator</th>
                  <th>Value</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bulkFilter.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.key}</td>
                      <td>{item.operator}</td>
                      <td>{item.value}</td>
                      <td>
                        <button
                          className="bg-black text-white rounded py-1 px-2"
                          onClick={() => removeBulkFilter(i)}
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          <div className="form">
            <div className="input_item">
              <label htmlFor="">{t("Attribute")}</label>
              <select
                name="key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              >
                
                <option value=""> select Attribute </option>
                <option value="username"> Username </option>
                <option value="expiration"> Expiration </option>
                <option value="enabled"> Enabled </option>
                <option value="firstname"> First Name </option>
                <option value="lastname"> Last Name </option>
                <option value="profile_id"> Profile </option>
                <option value="parent_id"> Parent </option>
                <option value="parent_and_subs"> Parent &amp; Subs </option>
                <option value="email"> Email </option>
                <option value="company"> Copmany </option>
                <option value="phone"> Phone </option>
                <option value="city"> City </option>
                <option value="address"> Address </option>
                <option value="contract_id"> Contract Number </option>
                <option value="national_id"> National ID </option>
                <option value="simultaneous_sessions">
                  Simultaneous Sessions
                </option>
                <option value="user_type"> User Type </option>
                <option value="static_ip"> Static IP </option>
                <option value="auto_renew"> Auto Renew </option>
                <option value="site_id"> Site </option>
                <option value="group_id"> Group </option>
                <option value="created_at"> Creation Date </option>
              </select>
            </div>
            <div className="input_item">
              <select
                name=""
                id=""
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
              >
                <option value="">select operator</option>
                <option value="=">=</option>
                <option value="!=">!=</option>
                <option value="<">&gt;</option>
                <option value=">">&lt;</option>
                <option value="like">like</option>
              </select>
            </div>
            <div className="input_item">
              <label htmlFor="">{t("Value")}</label>

              {key == "expiration" ? (
                <input
                  type="date"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              ) : key == "enabled" ? (
                <select
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              ) : key == "profile_id" ? (
                <select
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  {profiles &&
                    profiles.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                </select>
              ) : key == "parent_id" ? (
                <select
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  {managers &&
                    managers.map((item) => (
                      <option value={item.id}>{item.username}</option>
                    ))}
                </select>
              ) : key == "parent_and_subs" ? (
                <select
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  {managers &&
                    managers.map((item) => (
                      <option value={item.id}>{item.username}</option>
                    ))}
                </select>
              ) : key == "auto_renew" ? (
                <select
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              ) : key == "site_id" ? (
                <select
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  {sites &&
                    sites.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                </select>
              ) : key == "group_id" ? (
                <select
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  {groups &&
                    groups.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                </select>
              ) : (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              )}
            </div>
            <div className="btns_actions">
              <button
                className="btn_action"
                onClick={() => {
                  if (
                    key.length > 0 &&
                    operator.length > 0 &&
                    value.length > 0
                  ) {
                    addBulkFilterRow({
                      key,
                      op: operator,
                      value,
                      value_label: null,
                      id: generateUUID(),
                    });
                    handleSearch();
                  }
                }}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
              <button className="btn_action">
                <i className="fa-solid fa-rotate"></i>
              </button>
            </div>
          </div>
          {recordsMatching && bulkFilter.length > 0 && (
            <div
              class="alert bg-light ng-star-inserted !bg-gray-200"
              style={{ marginTop: "15px" }}
            >
              <i class="fa fa-info-circle"></i>&nbsp;&nbsp; Found
              <b>{recordsMatching}</b> records matching your filter
              <button
                class="btn btn-sm btn-secondary fa-pull-right"
                onClick={handleSearch}
              >
                <i class="fa fa-sync"></i>
              </button>
            </div>
          )}
          {recordsMatching && bulkFilter.length > 0 && (
            <div className="form_apply">
              <div className="input_item">
                <select
                  name="action"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                >
                  <option disabled="" value="null">
                    Select Action
                  </option>
                  <option value="set_expiration" class="ng-star-inserted">
                    Set Expiration
                  </option>
                  <option value="set_traffic_balance" class="ng-star-inserted">
                    Set Traffic Balance (MB)
                  </option>
                  <option value="set_profile" class="ng-star-inserted">
                    Set Profile
                  </option>
                  <option value="set_site" class="ng-star-inserted">
                    Set Site
                  </option>
                  <option value="set_city" class="ng-star-inserted">
                    Set City
                  </option>
                  <option value="set_parent" class="ng-star-inserted">
                    Set Parent
                  </option>
                  <option value="set_group" class="ng-star-inserted">
                    Set Group
                  </option>
                  <option value="add_traffic" class="ng-star-inserted">
                    Add Traffic (MB)
                  </option>
                  <option value="add_traffic_dl" class="ng-star-inserted">
                    Add Download Traffic (MB)
                  </option>
                  <option value="add_traffic_ul" class="ng-star-inserted">
                    Add Upload Traffic (MB)
                  </option>
                  <option value="add_days" class="ng-star-inserted">
                    Increase Expiration (Days)
                  </option>
                  <option value="disable" class="ng-star-inserted">
                    Disable
                  </option>
                  <option value="delete" class="ng-star-inserted">
                    Delete
                  </option>
                  <option value="enable" class="ng-star-inserted">
                    Enable
                  </option>
                  <option value="disconnect" class="ng-star-inserted">
                    Disconnect
                  </option>
                  <option value="set_auto_renew" class="ng-star-inserted">
                    Enable Auto-Renew
                  </option>
                  <option
                    value="set_simultaneous_sessions"
                    class="ng-star-inserted"
                  >
                    Set Simultaneous Sessions
                  </option>
                  <option value="unset_auto_renew" class="ng-star-inserted">
                    Disable Auto-Renew
                  </option>
                  <option value="send_sms" class="ng-star-inserted">
                    Send SMS
                  </option>
                  <option value="export" class="ng-star-inserted">
                    Export (Excel)
                  </option>
                </select>
              </div>

              <div className="input_item">
                {name == "set_expiration" ? (
                  <input
                    type="date"
                    value={valueApply}
                    onChange={(e) => setValueApply(e.target.value)}
                  />
                ) : name == "set_profile" ? (
                  <select
                    value={valueApply}
                    onChange={(e) => setValueApply(e.target.value)}
                  >
                    {profiles &&
                      profiles.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                  </select>
                ) : name == "set_site" ? (
                  <select
                    value={valueApply}
                    onChange={(e) => setValueApply(e.target.value)}
                  >
                    {sites &&
                      sites.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                  </select>
                ) : name == "set_parent" ? (
                  <select
                    value={valueApply}
                    onChange={(e) => setValueApply(e.target.value)}
                  >
                    {managers &&
                      managers.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                  </select>
                ) : name == "set_group" ? (
                  <select
                    value={valueApply}
                    onChange={(e) => setValueApply(e.target.value)}
                  >
                    {groups &&
                      groups.map((item) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                  </select>
                ) : name == "send_sms" ? (
                  <input
                    type="text"
                    value={valueApply}
                    onChange={(e) => setValueApply(e.target.value)}
                  />
                ) : (
                  <input
                    type="number"
                    value={valueApply}
                    onChange={(e) => setValueApply(e.target.value)}
                  />
                )}
              </div>
              <button className="btn_apply" onClick={handleApply}>
                Apply
              </button>
            </div>
          )}
        </div>
        {loading && <Loader />}
      </MainSection>
    </div>
  );
};

export default BulkChanges;
