import {
  TRANSACTIONS,
  BANKS_IDS,
  BANKS_HASH,
  TOKEN
} from "../constants/storageConstants";

export default {
  bank: {
    byHash: JSON.parse(localStorage.getItem(BANKS_HASH)) || null,
    byId: JSON.parse(localStorage.getItem(BANKS_IDS)) || null,
    isFetching: false
  },
  transaction: {
    data: JSON.parse(localStorage.getItem(TRANSACTIONS)) || null,
    isFetching: false
  },
  auth: {
    isLogin: !!sessionStorage.getItem(TOKEN) || false,
    isFetching: false
  }
};
