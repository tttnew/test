import { TRANSACTIONS, BANKS, TOKEN } from "../constants/storageConstants";

export default {
  banks: JSON.parse(localStorage.getItem(BANKS)) || [],
  transactions: JSON.parse(localStorage.getItem(TRANSACTIONS)) || [],
  isFetching: false,
  isLogin: !!sessionStorage.getItem(TOKEN) || false
};
