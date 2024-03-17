import React from "react";
import { useSelector } from "react-redux";
import imgAvatar from "../../images/user-1.jpg";
import "./profile.scss";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div className="profile_section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="profile_details">
          <div className="main_information">
            <div className="img">
              <img src={imgAvatar} alt="img-avatar" loading="lazy" />
            </div>
            <div className="text">
              <h4>{`${userInfo.client.firstname} ${userInfo.client.lastname}`}</h4>
            </div>
          </div>
          <div className="personal_information">
            <h3 className="title">Personal Information:</h3>
            <div className="items">
              <div className="item">
                <div className="icon">
                  <i class="fa-regular fa-envelope"></i>
                </div>
                <div className="text">
                  <h5>Email</h5>
                  <p>{userInfo.client.email ? userInfo.client.email : "N/A"}</p>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <i class="fa-solid fa-phone-volume"></i>
                </div>
                <div className="text">
                  <h5>Phone No</h5>
                  <p>{userInfo.client.phone ? userInfo.client.phone : "N/A"}</p>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <i class="fa-solid fa-earth-africa"></i>
                </div>
                <div className="text">
                  <h5>Country</h5>
                  <p>
                    {userInfo.client.country ? userInfo.client.country : "N/A"}
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <i class="fa-regular fa-building"></i>
                </div>
                <div className="text">
                  <h5>City</h5>
                  <p>{userInfo.client.city ? userInfo.client.city : "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="change_password_section">
          <h4 className="title">Change Password: </h4>
          <form action="">
            <div className="input_item">
              <input type="text" placeholder="New Password" />
            </div>
            <div className="input_item">
              <input type="text" placeholder="Confirm Password" />
            </div>
            <div className="text-end">
              <button className="btn_submit">Change Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
