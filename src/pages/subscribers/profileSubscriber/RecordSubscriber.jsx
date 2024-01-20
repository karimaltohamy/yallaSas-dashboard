import React from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsRecord } from "../../../utils/columnsTables";

const RecordSubscriber = () => {
  return (
    <div>
      <MainTable rows={[]} columns={columnsRecord} />
    </div>
  );
};

export default RecordSubscriber;
