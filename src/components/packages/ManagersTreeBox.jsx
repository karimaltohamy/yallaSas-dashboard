import React from "react";
import "./managersTreeBox.scss";
import { t } from "i18next";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import styled from "@emotion/styled";

const ManagersTreeBox = ({ managers, getManager }) => {
  function buildTree(data) {
    const buildNode = (parentId) => {
      const children = data
        .filter((item) => item.parent_id === parentId)
        .map((item) => ({ ...item, children: buildNode(item.id) }));
      return children.length > 0 ? children : null;
    };

    const roots = data.filter((item) => item.parent === null);
    return roots.map((root) => ({ ...root, children: buildNode(root.id) }));
  }

  const treeData = managers && buildTree(managers);

  return (
    <div className="managers_tree_box">
      <div className="head">
        <i className="fa-solid fa-cubes"></i>
        <h4>{t("Managers Tree")}</h4>
      </div>
      <div className="content_box">
        <div className="search_input">
          <input type="text" placeholder={t("search managers...")} />
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="result">
          <TreeView
            aria-label="customized"
            defaultCollapseIcon={<i class="fa-solid fa-chevron-down"></i>}
            defaultExpandIcon={<i class="fa-solid fa-chevron-right"></i>}
            sx={{
              height: 240,
              flexGrow: 1,
              maxWidth: 400,
              overflowY: "auto",
            }}
          >
            {treeData &&
              treeData.map((root, i) => {
                return (
                  <TreeItem
                    nodeId={root.id}
                    label={root.username}
                    onClick={() => getManager(root.id)}
                    key={i}
                  >
                    {root.children &&
                      root.children.map((item, index) => (
                        <TreeItem
                          nodeId={item.id}
                          label={item.username}
                          key={index}
                          onClick={() => getManager(item.id)}
                        />
                      ))}
                  </TreeItem>
                );
              })}
          </TreeView>
        </div>
      </div>
    </div>
  );
};

export default ManagersTreeBox;
