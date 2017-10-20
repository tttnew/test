import {
  TRANSACTIONS,
  BANKS_IDS,
  BANKS_HASH,
  TOKEN
} from "../constants/storageConstants";

export default {
  bank: {
    byHash: JSON.parse(localStorage.getItem(BANKS_HASH)) || {},
    byId: JSON.parse(localStorage.getItem(BANKS_IDS)) || [],
    isFetching: false
  },
  transaction: {
    data: JSON.parse(localStorage.getItem(TRANSACTIONS)) || [],
    isFetching: false
  },
  auth: {
    isLogin: !!sessionStorage.getItem(TOKEN) || false,
    isFetching: false
  }
};
