import React, { useState } from "react";
import "./mainTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const MainTable = ({ columns, rows, setSelectedRowData }) => {
  const handleRowSelectionModelChange = (newRowSelectionModel) => {
    setSelectedRowData(newRowSelectionModel);
  };
  return (
    <div className="container_table">
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={true}
        onRowSelectionModelChange={handleRowSelectionModelChange}
        noRowsOverlay={<div>No rows found!</div>}
        loading={false}
        components={{
          Toolbar: GridToolbar,
        }}
        pagination={{ defaultPageSize: 25 }}
      />
    </div>
  );
};

export default MainTable;
