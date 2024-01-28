import React from "react";
import HeadTable from "../../components/headTable/HeadTable";
import { Link } from "react-router-dom";
import MainTable from "../../components/mainTable/MainTable";
import { columnsIpPools } from "../../utils/columnsTables";

const IpPools = () => {
  return (
    <div className="main_content_tables">
      <div className="conetnt_table">
        <HeadTable
          path="IP Pools"
          title="IP Pools"
          iconHead={<i class="ng-tns-c118-58 fa-cabinet-filing fal"></i>}
        >
          <div className="content">
            <Link to={"/add-ip-pools"} className="item">
              <i className="fa-solid fa-plus"></i>
              <span>New</span>
            </Link>
            <div className="item">
              <i className="fa-solid fa-trash"></i>
              <span>Delete</span>
            </div>
          </div>
        </HeadTable>
        <MainTable rows={[]} columns={columnsIpPools} />
      </div>
    </div>
  );
};

export default IpPools;
