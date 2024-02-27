import React, { useEffect, useState } from "react";
import "./IssuingInvoiceForm.scss";
import { t } from "i18next";
import MainSection from "../../components/mainSection/MainSection";
import apiAxios from "../../utils/apiAxios";
import { encryptedData, generateUUID } from "../../utils/utilsFunctions";
import InputSectionForm from "../../components/sectionform/InputSectionForm";
import { toast } from "react-toastify";

const IssuingInvoiceForm = () => {
  const [search, setSearch] = useState("");
  const [allProfiles, setAllProfiles] = useState([]);
  const [profile, setProfile] = useState("");
  const [profilePrice, setProfilePrice] = useState("");
  const [services, setServices] = useState([]);
  const [rowsTable, setRowsTable] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formInvoice, setFormInvoice] = useState({
    comment: "",
    due_date: "",
    discount: "",
    total: 0,
    client_id: "",
    items: [],
  });

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    try {
      const { data } = await apiAxios.post("api/index/user", {
        payload: encryptedData({ search: e.target.value }),
      });
      setAllProfiles(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeFormIvoice = (e) => {
    setFormInvoice((prev) => {
      return {
        ...prev,
        [e.target.id]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };

  const handleInputChange = (value, index, property) => {
    let updatedTotal = total;

    // Update the specific property of the item
    const updatedItem = {
      ...rowsTable[index],
      [property]: value,
    };
    const updatedRowsTable = [...rowsTable];
    updatedRowsTable[index] = updatedItem;

    // Recalculate the total if the property is "checked"
    if (property === "checked") {
      updatedTotal = updatedRowsTable.reduce(
        (acc, cur) => acc + (cur.checked ? cur.total : 0),
        0
      );
    }

    // Recalculate the total for the specific item if needed (e.g., quantity changed)
    if (property === "qty") {
      updatedItem.total =
        updatedRowsTable[index].typeItem == "select"
          ? profilePrice * value
          : updatedRowsTable[index].unit_price * value;
      updatedTotal = updatedRowsTable.reduce((acc, cur) => acc + cur.total, 0);
    }

    // Update the state
    setRowsTable(updatedRowsTable);
    setTotal(updatedTotal);
  };

  const handleRemoveRow = (index) => {
    setRowsTable(rowsTable.filter((item, i) => i != index));
  };

  const handleAddRow = (type) => {
    setRowsTable((prev) => {
      return [
        ...prev,
        {
          profile_id: "",
          name: "",
          qty: 1,
          unit_price: 0,
          total: "",
          id: generateUUID(),
          typeItem: type,
          checked: false,
        },
      ];
    });
  };

  // get profile price
  const handleGetProfilePrice = async () => {
    try {
      const { data } = await apiAxios.get(
        `api/profile/price/user/${profile.profile_id}`
      );
      setProfilePrice(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // gt all profiles
  const handleGetServices = async () => {
    try {
      const { data } = await apiAxios.get(`api/list/profile/0`);
      setServices(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const updatedRowsTable = rowsTable.map((item) => {
      const { typeItem, checked, ...updatedItem } = item;
      return updatedItem;
    });
    try {
      const { data } = await apiAxios.post(`api/user/invoice`, {
        payload: encryptedData({
          items: updatedRowsTable,
          due_date: formInvoice.due_date,
          client_id: profile.id,
          discount: formInvoice.discount,
          total: formInvoice.total,
          comment: formInvoice.comment,
        }),
      });
      toast.success("Successfull Operation");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetServices();
    profile && handleGetProfilePrice();
  }, [profile]);

  return (
    <MainSection
      title={"User Invoice Form"}
      icon={<i class="fa-solid fa-file-invoice-dollar"></i>}
    >
      <div className="issuing_invoice">
        {!profile && (
          <div className="search_client">
            <input
              type="text"
              placeholder="search client"
              onChange={(e) => handleSearch(e)}
            />
            {allProfiles.length > 0 && (
              <div className="result">
                {allProfiles.map((item, i) => (
                  <div className="item" onClick={() => setProfile(item)}>
                    {item.username}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {profile && (
          <div className="issuing_invoice_content">
            <div className="items">
              <div className="item">
                <h4>Organization</h4>
                <span>Sender</span>
              </div>
              <div className="item">
                <h4></h4>
                <span>Administrator Snono</span>
              </div>
              <div className="item">
                <h4>Client</h4>
                <span>Recipient</span>
              </div>
              <div className="item">
                <h4></h4>
                <span>Miller Pascal.</span>
              </div>
            </div>
            <div className="add_service">
              <div className="btns">
                <button
                  className="btn_add"
                  onClick={() => handleAddRow("input")}
                >
                  {t("Add Custom Item")}
                  <i class="fa-solid fa-plus"></i>
                </button>
                <button
                  className="btn_add"
                  onClick={() => handleAddRow("select")}
                >
                  {t("Add Service")}
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Unit Price ($) </th>
                    <th>Total ($) </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {rowsTable &&
                    rowsTable.map((item, i) => {
                      if (item.typeItem == "select") {
                        return (
                          <tr>
                            <td>
                              {!item.checked && (
                                <select
                                  name="profile_id"
                                  onChange={(e) =>
                                    handleInputChange(e.target.value, i, "name")
                                  }
                                >
                                  <option>Select Profile</option>
                                  {services &&
                                    services.map((item, i) => (
                                      <option value={item.name}>
                                        {item.name}
                                      </option>
                                    ))}
                                </select>
                              )}
                              {item.checked && <span>{item.name}</span>}
                            </td>
                            <td>
                              {!item.checked && (
                                <input
                                  type="number"
                                  value={item.qty}
                                  onChange={(e) =>
                                    handleInputChange(e.target.value, i, "qty")
                                  }
                                />
                              )}
                              {item.checked && <span>{item.qty}</span>}
                            </td>
                            <td>${profilePrice}.00</td>
                            <td>${profilePrice * item.qty}.00</td>
                            <td>
                              <div className="actions">
                                {!item.checked && (
                                  <button
                                    className="btn_check"
                                    onClick={() =>
                                      handleInputChange(true, i, "checked")
                                    }
                                  >
                                    <i class="fa-solid fa-check"></i>
                                  </button>
                                )}

                                <button
                                  className="btn_trash"
                                  onClick={() => handleRemoveRow(i)}
                                >
                                  <i class="fa-solid fa-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      } else if (item.typeItem == "input") {
                        return (
                          <tr>
                            <td>
                              {!item.checked && (
                                <input
                                  type="text"
                                  placeholder="Item name"
                                  onChange={(e) =>
                                    handleInputChange(e.target.value, i, "name")
                                  }
                                />
                              )}
                              {item.checked && <span>{item.name}</span>}
                            </td>
                            <td>
                              {!item.checked && (
                                <input
                                  type="number"
                                  value={item.qty}
                                  onChange={(e) => {
                                    handleInputChange(e.target.value, i, "qty");
                                  }}
                                />
                              )}
                              {item.checked && <span>{item.qty}</span>}
                            </td>
                            <td>
                              {!item.checked && (
                                <input
                                  type="number"
                                  value={item.unit_price}
                                  onChange={(e) =>
                                    handleInputChange(
                                      e.target.value,
                                      i,
                                      "unit_price"
                                    )
                                  }
                                />
                              )}
                              {item.checked && (
                                <span>${item.unit_price}.00</span>
                              )}
                            </td>
                            <td>${item.unit_price * item.qty}.00</td>
                            <td>
                              <div className="actions">
                                {!item.checked && (
                                  <button
                                    className="btn_check"
                                    onClick={() =>
                                      handleInputChange(true, i, "checked")
                                    }
                                  >
                                    <i class="fa-solid fa-check"></i>
                                  </button>
                                )}
                                <button
                                  className="btn_trash"
                                  onClick={() => handleRemoveRow(i)}
                                >
                                  <i class="fa-solid fa-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      }
                    })}
                </tbody>
              </table>
            </div>
            <div className="form_invoice">
              <InputSectionForm
                label={"Comment"}
                value={formInvoice.comment}
                type={"text"}
                onChange={handleChangeFormIvoice}
                id={"comment"}
              />
              <InputSectionForm
                label={"Due Date"}
                value={formInvoice.due_date}
                type={"date"}
                onChange={handleChangeFormIvoice}
                id={"due_date"}
              />
              <InputSectionForm
                label={"Discount (%)"}
                value={formInvoice.discount}
                max={100}
                min={1}
                type={"number"}
                onChange={handleChangeFormIvoice}
                id={"discount"}
              />
              <InputSectionForm
                classes={"disabled"}
                label={"Discount Value"}
                value={`$${total * (formInvoice.discount / 100)}`}
                type={"text"}
              />
              <InputSectionForm
                classes={"disabled"}
                label={"Total"}
                value={`$${total}`}
                type={"text"}
              />
            </div>
            <div className="btns_add">
              <button className="btn_add" onClick={handleSubmit}>
                {t("Save")}
              </button>
              <button className="btn_close" onClick={handleSubmit}>
                {t("Save & Print")}
              </button>
            </div>
          </div>
        )}
      </div>
    </MainSection>
  );
};

export default IssuingInvoiceForm;
