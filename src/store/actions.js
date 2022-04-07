export function web3Loaded(connection) {
  return {
    type: "WEB3_LOADED",
    connection,
  };
}

export function web3AccountLoaded(account) {
  return {
    type: "WEB3_ACCOUNT_LOADED",
    account,
  };
}

export function swapLoaded(contract) {
  return {
    type: "SWAP_LOADED",
    contract,
  };
}

export function swapCreated() {
  return {
    type: 'SWAP_CREATED'
  }
}

export function amountChanged(amount) {
  return {
    type: "AMOUNT_CHANGED",
    amount,
  };
}