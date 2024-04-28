/* eslint-disable react/prop-types */
import dayjs from "dayjs";

// Table.js
function Table({ data }) {
  return (
    <div className="no-scrollbar overflow-y-auto h-[25em] md:h-[30em]">
      {/* Render thead outside the loop */}
      <table className="table table-sm md:table-md">
        <thead>
          <tr>
            <th></th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
                <td>{dayjs(item.date).format("D MMM YYYY")}</td>
                <td
                  className={`${
                    item.status == true ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {item.status == true ? "incame" : "expense"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
