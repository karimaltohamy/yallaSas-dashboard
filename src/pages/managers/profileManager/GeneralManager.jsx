import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiAxios from "../../../utils/apiAxios";
import ManagerMainDetails from "../../../components/profileManagersCompenents/ManagerMainDetails";
import "../../../sass/generalProfile.scss";
import ManagerInfoDetails from "../../../components/profileManagersCompenents/ManagerInfoDetails";

const GeneralManager = () => {
  const { id } = useParams();
  const [manager, setManagers] = useState([]);

  const getManager = async () => {
    try {
      const { data } = await apiAxios.get(`/api/manager/${id}`);
      setManagers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getManager();
  }, []);
  return (
    <div className="general_information">
      <div className="line">
        <ManagerMainDetails manager={manager} getManager={getManager} />
        <ManagerInfoDetails manager={manager} />
      </div>
    </div>
  );
};

export default GeneralManager;
