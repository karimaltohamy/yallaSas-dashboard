import React, { useEffect, useState } from "react";
import MainDetails from "../../../components/profileComponents/MainDetails";
import InfoDetails from "../../../components/profileComponents/InfoDetails";
import "../../../sass/generalProfile.scss";
import apiAxios from "../../../utils/apiAxios";
import { useParams } from "react-router-dom";
import Loader from "../../../components/loader/Loader";

const GeneralSubscriber = () => {
  const { id } = useParams();
  const [subsciberData, setSubscribers] = useState({});
  const [loading, setLoading] = useState({});

  const getSubscriber = async () => {
    setLoading(true);
    try {
      const { data } = await apiAxios.get(`api/user/overview/${id}`);
      setSubscribers(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSubscriber();
  }, []);

  return (
    <div className="general_information">
      <div className="line">
        <MainDetails
          subsciberData={subsciberData}
          getSubscriber={getSubscriber}
        />
        <InfoDetails subsciberData={subsciberData} />
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default GeneralSubscriber;
