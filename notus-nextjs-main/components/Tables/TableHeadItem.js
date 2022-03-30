import React from "react";

const TableHeadItem = ({ item }) => {
    return (
        <td title={item} className="px-12 font-bold">
            {item}
        </td>
    );
};

export default TableHeadItem;
