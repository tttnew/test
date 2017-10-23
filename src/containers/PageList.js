import React, { Component } from "react";
import {
  deleteTransactionRequest,
  fetchTransactions
} from "../actions/transaction";
import { fetchBanks } from "../actions/bank";
import { connect } from "react-redux";
import PrivatePagesLayout from "./PrivatePagesLayout";

class PageList extends Component {
  componentDidMount() {
    let { fetchBanks, fetchTransactions, banks, transactions } = this.props;
    if (!banks) {
      fetchBanks();
    }
    if (!transactions) {
      fetchTransactions();
    }
  }

  render() {
    let {
      banksByHash,
      banks,
      transactions,
      isFetchingBanks,
      handlerDelete
    } = this.props;

    return (
      <PrivatePagesLayout>
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
            {transactions &&
              transactions.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.amount}</td>
                    <td>
                      {isFetchingBanks
                        ? "...LOADING"
                        : banksByHash[item.bankId]
                          ? banksByHash[item.bankId].title
                          : "error"}
                    </td>
                    <td>
                      <span
                        className="cursorPointer"
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
      </PrivatePagesLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetchingBanks: state.bank.isFetching,
    isFetchingTransactions: state.transaction.isFetching,
    banks: state.bank.byId,
    banksByHash: state.bank.byHash,
    transactions: state.transaction.data
  };
};

const mapDispatchToState = dispatch => {
  return {
    handlerDelete: id => {
      dispatch(deleteTransactionRequest(id)).catch(error => {
        alert("Ошибка");
      });
    },
    fetchBanks: () => {
      dispatch(fetchBanks()).catch(error => {
        alert("Ошибка");
      });
    },
    fetchTransactions: () => {
      dispatch(fetchTransactions()).catch(() => {
        alert("Ошибка");
      });
    }
  };
};

PageList = connect(mapStateToProps, mapDispatchToState)(PageList);

export default PageList;
