import React, { useMemo, useState } from "react";
import "./mainTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const MainTable = ({
  columns,
  rows,
  setSelectedRowData,
  setPerPage,
  perPage,
  currentPage,
  setCurrentPage,
  lastPage,
  rowId,
  showToolbar = true,
}) => {
  const [siblingCount, setSiblingCount] = useState(0);
  const totalPages = Array.from({ length: lastPage }, (_, i) => i + 1).splice(
    siblingCount,
    5
  );

  // handle select row
  const handleRowSelectionModelChange = (newRowSelectionModel) => {
    setSelectedRowData(newRowSelectionModel);
  };
  return (
    <div className="container_table">
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) =>
          typeof rowId == "object" ? row[rowId].id : rowId ? row[rowId] : row.id
        }
        checkboxSelection={true}
        onRowSelectionModelChange={handleRowSelectionModelChange}
        noRowsOverlay={<div>No rows found!</div>}
        loading={false}
        components={showToolbar ? { Toolbar: GridToolbar } : {}}
      />
      <div className="pagination">
        <div className="page_count_component">
          <div
            className={`page_item ${perPage == 5 && "active"}`}
            onClick={() => setPerPage(5)}
          >
            5
          </div>
          <div
            className={`page_item ${perPage == 10 && "active"}`}
            onClick={() => setPerPage(10)}
          >
            10
          </div>
          <div
            className={`page_item ${perPage == 50 && "active"}`}
            onClick={() => setPerPage(50)}
          >
            50
          </div>
          <div
            className={`page_item ${perPage == 100 && "active"}`}
            onClick={() => setPerPage(100)}
          >
            100
          </div>
          <div
            className={`page_item ${perPage == 500 && "active"}`}
            onClick={() => setPerPage(500)}
          >
            500
          </div>
        </div>
        <div className="per_page_component">
          <div
            className="page_item"
            onClick={() =>
              setSiblingCount(siblingCount - 5 <= 0 && siblingCount - 5)
            }
          >
            <i class="fa-solid fa-angles-left"></i>
          </div>
          <div
            className="page_item"
            onClick={() =>
              setCurrentPage(currentPage - 1 >= 1 && currentPage - 1)
            }
          >
            <i class="fa-solid fa-angle-left"></i>
          </div>
          {totalPages &&
            totalPages.map((item, i) => {
              return (
                <div
                  className={`page_item ${currentPage == item && "active"}`}
                  onClick={() => setCurrentPage(item)}
                >
                  {item}
                </div>
              );
            })}
          <div
            className="page_item"
            onClick={() =>
              setCurrentPage(currentPage + 1 <= lastPage && currentPage + 1)
            }
          >
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <div
            className="page_item"
            onClick={() =>
              setSiblingCount(siblingCount + 5 < lastPage && siblingCount + 5)
            }
          >
            <i class="fa-solid fa-angles-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTable;
