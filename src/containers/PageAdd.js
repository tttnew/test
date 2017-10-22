import React, { Component } from "react";
import { addTransactionsRequest } from "../actions/transaction";
import { connect } from "react-redux";
import { fetchBanks } from "../actions/bank";
import { withRouter } from "react-router";
import PrivatePagesLayout from "./PrivatePagesLayout";

class PageAdd extends Component {
  componentDidMount() {
    let { fetch, banks } = this.props;
    if (banks.length === 0) {
      fetch();
    }
  }

  render() {
    let { banks, banksByHash, handleSubmit, isFetching, history } = this.props;
    return (
      <PrivatePagesLayout>
        <div className="form">
          <form
            onSubmit={e => {
              e.preventDefault();
              let id, amount, bankId;
              try {
                amount = parseInt(e.currentTarget.amount.value, 10);
                bankId = parseInt(
                  this.refs.banklist.options.namedItem(
                    e.currentTarget.bank.value
                  ).dataset.id,
                  10
                );
              } catch (e) {
                alert("Данные не корректны");
                return;
              }
              if (!amount) {
                alert("Сумма транзакции не корректна");
                return;
              }

              handleSubmit({ amount: amount, bankId: bankId, id: id });
              history.push("/");
            }}
          >
            <div>
              <label>Выберите банк</label>
              <input list="banks" name="bank" />
              <datalist id="banks" ref="banklist">
                {banks.map(id => (
                  <option
                    value={banksByHash[id].title}
                    data-id={id}
                    key={id}
                    id={banksByHash[id].title}
                  />
                ))}
              </datalist>
            </div>
            <div>
              <label>Сумма</label>
              <input type="text" name="amount" />
            </div>
            <div>
              <input type="submit" disabled={isFetching} />
            </div>
          </form>
        </div>
      </PrivatePagesLayout>
    );
  }
}

PageAdd = withRouter(PageAdd);

const mapStateToProps = state => {
  return {
    isFetching: state.bank.isFetching,
    banks: state.bank.byId,
    banksByHash: state.bank.byHash
  };
};

const mapDispatchToState = dispatch => {
  return {
    handleSubmit: transaction => {
      dispatch(addTransactionsRequest(transaction)).catch(error => {
        alert("Ошибка");
      });
    },
    fetch: () => {
      dispatch(fetchBanks()).catch(() => {
        alert("Ошибка");
      });
    }
  };
};

PageAdd = connect(mapStateToProps, mapDispatchToState)(PageAdd);

export default PageAdd;
