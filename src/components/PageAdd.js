import React, { Component } from "react";
import { withRouter } from "react-router";

class PageAdd extends Component {
  render() {
    let { banks, transactions, handleSubmit, isFetching, history } = this.props;
    return (
      <div className="form">
        <form
          onSubmit={e => {
            e.preventDefault();
            let id, amount, bankId;
            try {
              id = transactions[transactions.length - 1].id + 1;
              amount = parseInt(this.inputAmount.value, 10);
              bankId = parseInt(
                banks.find(el => {
                  return el.title === this.bank.value;
                }).id,
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
            <input
              list="banks"
              ref={el => {
                this.bank = el;
              }}
            />
            <datalist id="banks">
              {banks.map(item => <option value={item.title} key={item.id} />)}
            </datalist>
          </div>
          <div>
            <label>Сумма</label>
            <input
              type="text"
              ref={input => {
                this.inputAmount = input;
              }}
            />
          </div>
          <div>
            <input type="submit" disabled={isFetching} />
          </div>
        </form>
      </div>
    );
  }
}

PageAdd = withRouter(PageAdd);

export default PageAdd;
