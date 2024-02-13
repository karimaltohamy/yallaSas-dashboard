import React, { useEffect, useState } from "react";
import MainDetails from "../../../components/profileComponents/MainDetails";
import InfoDetails from "../../../components/profileComponents/InfoDetails";
import "../../../sass/generalProfile.scss";
import apiAxios from "../../../utils/apiAxios";
import { useParams } from "react-router-dom";

const GeneralSubscriber = () => {
  const { id } = useParams();
  const [subsciberData, setSubscribers] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiAxios.get(`api/user/overview/${id}`);
        setSubscribers(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="general_information">
      <div className="line">
        <MainDetails subsciberData={subsciberData} />
        <InfoDetails subsciberData={subsciberData} />
      </div>
    </div>
  );
};

export default GeneralSubscriber;
