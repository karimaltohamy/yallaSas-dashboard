import React, { useState } from "react";
import MainSection from "../../../components/mainSection/MainSection";
import "./widgetFactory.scss";

const WidgetFactory = () => {
  const [openOptions, setOpenOptions] = useState(false);
  return (
    <div className="widget_factory_section">
      <div className="line flex gap-10">
        <div className="w-full md:w-[50%]">
          <MainSection
            title={"Widget Factory"}
            icon={<i className="fa-solid fa-puzzle-piece"></i>}
          >
            <form action="" className="selected_widget" id="select-dashboard">
              <select name="" id="" onChange={() => setOpenOptions(true)}>
                <option value="">select</option>
                <option value="">Managers</option>
                <option value="">Online Users</option>
                <option value="">Active Users</option>
                <option value="">Expired Users</option>
                <option value="">Users Expire In 3 Days</option>
                <option value="">Balance</option>
                <option value="">System Version</option>
                <option value="">System Uptime</option>
                <option value="">System Memory</option>
                <option value="">System Disk</option>
              </select>

              <div className="utils_form">
                <button className="btn_utils btn_add">
                  <i className="fa-solid fa-plus"></i>
                </button>
                <button className="btn_utils btn_save">
                  <i className="fa-solid fa-floppy-disk"></i>
                </button>
                <button className="btn_utils btn_remove">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </form>
            {openOptions && (
              <form action="" className="form_options active">
                <div className="input_item">
                  <label htmlFor="">
                    Title
                    <div className="star">*</div>
                  </label>
                  <input type="text" />
                </div>
                <div className="input_item">
                  <label htmlFor=""> Description </label>
                  <input type="text" />
                </div>
                <div className="input_item">
                  <label htmlFor="">
                    Type
                    <div className="star">*</div>
                  </label>
                  <select name="" id="">
                    <option value="">Type 1</option>
                  </select>
                </div>
                <div className="input_item">
                  <label htmlFor="">
                    Color
                    <div className="star">*</div>
                  </label>
                  <select name="" id="">
                    <option value="">white</option>
                    <option value="">blue1</option>
                    <option value="">blue2</option>
                    <option value="">green</option>
                    <option value="">red</option>
                    <option value="">yellow</option>
                    <option value="">octonary</option>
                    <option value="">quaternary</option>
                    <option value="">denary</option>
                  </select>
                </div>
                <div className="input_item">
                  <label htmlFor="">
                    Width
                    <div className="star">*</div>
                  </label>
                  <select name="" id="">
                    <option value="">1 column</option>
                    <option value="">2 column</option>
                    <option value="">3 column</option>
                    <option value="">4 column</option>
                    <option value="">5 column</option>
                  </select>
                </div>
                <div className="input_item">
                  <label htmlFor="">
                    Icon
                    <div className="star">*</div>
                  </label>
                  <select name="" id="">
                    <option value="">select icon</option>
                    <option value="fa fa-accessible-icon">
                      accessible-icon
                    </option>
                    <option value="fa fa-accusoft">accusoft</option>
                  </select>
                </div>
                <div className="input_item">
                  <label htmlFor=""> Data Source </label>
                  <select name="" id="">
                    <option value="">Internal</option>
                    <option value="">External</option>
                  </select>
                </div>
                <div className="input_item">
                  <label htmlFor="">Internal Data Source</label>
                  <select name="" id="">
                    <option value="">wd_users_count</option>
                    <option value="">wd_users_active_count</option>
                  </select>
                </div>
                <div className="input_item">
                  <label htmlFor="">
                    Refresh Interval (sec)
                    <div className="star">*</div>
                  </label>
                  <input type="number" />
                </div>

                <button className="btn_save">Save</button>
              </form>
            )}
          </MainSection>
        </div>
        <div className="w-full md:w-[50%]">
          <MainSection
            title={"preview"}
            icon={<i className="fa-regular fa-eye"></i>}
          >
            {openOptions && (
              <div className="container_box active">
                <div className="box">
                  <div className="head_box">
                    <div className="icon">
                      <i className="fa-regular fa-keyboard"></i>
                    </div>
                    <h4 className="title">المتصلين</h4>
                    <p className="desc">المشتركين المتصلين حاليا</p>
                  </div>
                  <div className="number">0</div>
                </div>
              </div>
            )}
          </MainSection>
        </div>
      </div>
    </div>
  );
};

export default WidgetFactory;
