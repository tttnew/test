import React, { Component } from "react";
import { deleteTransactionRequest } from "../actions/transaction";
import { connect } from "react-redux";
import PageList from "../components/PageList";

class PageListAsync extends Component {
  render() {
    return <PageList {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    banks: state.banks,
    transactions: state.transactions
  };
};

const mapDispatchToState = dispatch => {
  return {
    handlerDelete: id => {
      dispatch(deleteTransactionRequest(id)).catch(() => {
        alert("Ошибка");
      });
    }
  };
};

PageListAsync = connect(mapStateToProps, mapDispatchToState)(PageListAsync);

export default PageListAsync;
