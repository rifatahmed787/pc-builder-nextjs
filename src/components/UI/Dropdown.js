import React from "react";
import { Dropdown } from "antd";

const DropdownMenu = ({ categories }) => {
  const items = categories
    ? categories?.map((category) => ({
        key: category._id,
        label: category.name,
      }))
    : [];

  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        arrow
      >
        <p style={{ color: "black" }}>Categories</p>
      </Dropdown>
    </>
  );
};

export default DropdownMenu;
