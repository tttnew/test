import { loginUser } from "../actions/auth";
import { connect } from "react-redux";
import PageAuth from "../components/PageAuth";

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching
  };
};

const mapDispatchToState = dispatch => {
  return {
    handleSubmit: credentials => {
      dispatch(loginUser(credentials)).catch(() => {
        alert("Ошибка");
      });
    }
  };
};

let PageAuthAsync = connect(mapStateToProps, mapDispatchToState)(PageAuth);

export default PageAuthAsync;
