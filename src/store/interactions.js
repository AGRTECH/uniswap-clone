import Web3 from "web3";
import {
  web3Loaded,
  web3AccountLoaded,
  swapLoaded,
  swapCreated
} from "./actions";
import Swap from "../abis/Swap.json";

export const loadWeb3 = (dispatch) => {
  const web3 = new Web3(window.ethereum);
  dispatch(web3Loaded(web3));
  return web3;
};

export const loadAccount = async (web3, dispatch) => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  dispatch(web3AccountLoaded(account));
  return account;
};

export const loadSwap = async (web3, networkId, dispatch) => {
  try {
    const swap = new web3.eth.Contract(
      Swap.abi,
      Swap.networks[networkId].address
    );
    dispatch(swapLoaded(swap));
    return swap;
  } catch (error) {
    console.log(
      "Contract not deployed to the current network, Please select another network with Metamask"
    );
    return null;
  }
};

export const swapFunc = (
  dispatch,
  swap,
  account,
  amount,
  receiver,
  feeAmount, 
  bank
) => {
    swap.methods
      .swap(
        amount,
        receiver,
        feeAmount,
        bank
      )
      .send({ from: account })
      .on("transactionHash", (hash) => {
        dispatch(swapCreated());
      })
      .on("error", (error) => {
        console.error(error);
        window.alert(`There was an error!`);
      });
};