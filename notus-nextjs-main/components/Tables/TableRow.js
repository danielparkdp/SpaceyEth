import React from "react";

const TableRow = ({ data }) => {
    return (
        <tr>
            {data.map((item) => {
              console.log(item);
                return <td key={item}>{item}</td>;
            })}
        </tr>
    );
};

export default TableRow;
