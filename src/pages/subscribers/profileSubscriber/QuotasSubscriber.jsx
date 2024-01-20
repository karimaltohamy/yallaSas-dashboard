import React from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsOnlineSubscibers } from "../../../utils/columnsTables";

const QuotasSubscriber = () => {
  return (
    <div>
      <MainTable rows={[]} columns={columnsOnlineSubscibers} />
    </div>
  );
};

export default QuotasSubscriber;
