import React from "react";

const PageList = ({ isFetching, banks, transactions, handlerDelete }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>amount</th>
          <th>bank</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {transactions.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.amount}</td>
              <td>
                {
                  banks.find(el => {
                    if (el.id === item.bankId) {
                      return el;
                    }
                  }).title
                }
              </td>
              <td>
                <span
                  onClick={() => {
                    let r = window.confirm("Удалить запись?");
                    if (r == true) {
                      handlerDelete(item.id);
                    }
                  }}
                >
                  Удалить
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default PageList;
