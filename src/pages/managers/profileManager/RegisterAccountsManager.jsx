import React from "react";
import MainTable from "../../../components/mainTable/MainTable";
import { columnsRegisterAccountsManagers } from "../../../utils/columnsTables";
import { mockDataRegisterAccountsManagers } from "../../../utils/mockData";

const RegisterAccountsManager = () => {
  return (
    <div>
      <MainTable
        rows={mockDataRegisterAccountsManagers}
        columns={columnsRegisterAccountsManagers}
      />
    </div>
  );
};

export default RegisterAccountsManager;
