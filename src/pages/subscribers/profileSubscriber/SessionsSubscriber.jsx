import React from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsSessions } from "../../../utils/columnsTables";

const SessionsSubscriber = () => {
  return (
    <div>
      <MainTable rows={[]} columns={columnsSessions} />
    </div>
  );
};

export default SessionsSubscriber;
