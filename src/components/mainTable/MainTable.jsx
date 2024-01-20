import React from "react";
import "./mainTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const MainTable = ({ columns, rows }) => {
  return (
    <div className="container_table">
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={true}
        noRowsOverlay={<div>No rows found!</div>}
        loading={false}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
};

export default MainTable;
