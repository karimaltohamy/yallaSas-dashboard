import React from "react";
import "./systemMaintenance.scss";

const SystemMaintenance = () => {
  return (
    <div className="system_maintenance_section">
      <div className="head text-center pt-5 pb-3">
        <h4 className="font-bold text-[25px]">System Maintenance</h4>
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
                Power Control
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
                Power off or reboot server
                <div className="btns">
                  <button className="btn_system btn_power">Shutdwon</button>
                  <button className="btn_system btn_reboot">Reboot</button>
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
                Logout All Managers
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
                Force logout of all logged in managers (including admin).
                <div className="btns">
                  <button className="btn_system btn_logout_Managers">
                    Log out Managers
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
                Force Change Passowrd
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
                Force logout of all logged in managers (including admin) and
                force them to change password on next login.
                <div className="btns">
                  <button className="btn_system btn_change_password">
                    Force Password Change
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
                Import SAS3 Database
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
                Import SAS3 backup file. This operation will erase your current
                server database and erases everything.
                <div className="btns">
                  <a
                    href="database-migration.html"
                    className="btn_system btn_Import"
                  >
                    Import
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
                Clear Sessions Table
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
                This is useful to do from time to time to reduce your database
                size or to force removal of stale sessions. This operation is
                totally safe and will NOT reset traffic counters for users. SAS4
                uses different table to keep track of users traffic usage.
                <div className="btns">
                  <button className="btn_system btn_Clear">Clear</button>
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
                Close Online Sessions
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
                Force all online sessions to get closed immediately. This won't
                affect real online users as their sessions will get opened on
                next interim-update.
                <div className="btns">
                  <button className="btn_system btn_close_sessions">
                    Close Sessions
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
                Delete Expired Users
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
                This operation is useful to maintain users count bellow your
                license limit.
                <div className="btns">
                  <button className="btn_system btn_delete_users">
                    Delete
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
                Delete Expired Card Users
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
                This will delete only expired card users.
                <div className="btns">
                  <button className="btn_system btn_card_user">Delete</button>
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
                Clear Email Queue
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
                This will clear any pending emails in the queue, blocking new
                emails from getting sent.
                <div className="btns">
                  <button className="btn_system btn_clear_email">Clear</button>
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
                Clear SMS Queue <i className="fa-pull-right fa fa-envelope"></i>
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Clear all SMS messages waiting in queue.
                <div className="btns">
                  <button className="btn_system btn_clear_sms">Clear</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemMaintenance;
