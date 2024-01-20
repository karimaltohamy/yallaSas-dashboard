import React from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsDocuments } from "../../../utils/columnsTables";

const DocumentsSubscriber = () => {
  return (
    <div>
      <MainTable rows={[]} columns={columnsDocuments} />
    </div>
  );
};

export default DocumentsSubscriber;
