import { addTransactionsRequest } from "../actions/transaction";
import { connect } from "react-redux";
import PageAdd from "../components/PageAdd";

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    banks: state.banks,
    transactions: state.transactions
  };
};

const mapDispatchToState = dispatch => {
  return {
    handleSubmit: transaction => {
      dispatch(addTransactionsRequest(transaction)).catch(() => {
        alert("Ошибка");
      });
    }
  };
};

let PageAddAsync = connect(mapStateToProps, mapDispatchToState)(PageAdd);

export default PageAddAsync;
