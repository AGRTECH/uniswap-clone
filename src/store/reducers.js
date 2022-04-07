import { combineReducers } from "redux";

function web3(state = {}, action) {
  switch (action.type) {
    case "WEB3_LOADED":
      return { ...state, connection: action.connection };
    case "WEB3_ACCOUNT_LOADED":
      return { ...state, account: action.account, accountLoaded: true };
    case "ACCOUNT_BALANCE_CHANGED":
      return { ...state, accountBalance: action.balance };
    default:
      return state;
  }
}

function swap(state = {}, action) {
  switch (action.type) {
    case "SWAP_LOADED":
      return { ...state, loaded: true, contract: action.contract };
    case "AMOUNT_CHANGED":
      return {...state, amount: action.amount}  
    case "SUSHIMAKER_LOADED":
      return {...state, sushiMakerLoaded: true, sushiMakerContract: action.contract}  
    default:
      return state;
  }
}

function pool(state = {}, action) {
  switch (action.type) {
    case "MASTERCHEF_LOADED":
      return { ...state, loaded: true, contract: action.contract };
    default:
      return state;
  }
}



const rootReducer = combineReducers({
  web3,
  swap,
  pool
});

export default rootReducer;