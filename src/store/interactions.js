import Web3 from "web3";
import {
  web3Loaded,
  web3AccountLoaded,
  swapLoaded,
  swapCreated,
  masterChefLoaded,
  sushiMakerLoaded
} from "./actions";
import Swap from "../abis/Swap.json";
import MasterChef from '../abis/MasterChef.json'
import SushiMaker from '../abis/SushiMaker.json'

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

export const loadMasterChef = async (web3, networkId, dispatch) => {
  try {
    const masterChef = new web3.eth.Contract(
      MasterChef.abi,
      MasterChef.networks[networkId].address
    );
    dispatch(masterChefLoaded(masterChef));
    return masterChef;
  } catch (error) {
    console.log(
      "Contract not deployed to the current network, Please select another network with Metamask"
    );
    return null;
  }
};

export const loadSushiMaker = async (web3, networkId, dispatch) => {
  try {
    const sushiMaker = new web3.eth.Contract(
      SushiMaker.abi,
      SushiMaker.networks[networkId].address
    );
    dispatch(sushiMakerLoaded(sushiMaker));
    return sushiMaker;
  } catch (error) {
    console.log(
      "Contract not deployed to the current network, Please select another network with Metamask"
    );
    return null;
  }
};

export const convertFunc = (
  dispatch,
  sushimaker,
  account,
  token1,
  token2
) => {
    sushimaker.methods
      .convert(
        token1,
        token2
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

// export const swapFunc = (
//   dispatch,
//   swap,
//   account,
//   amount,
//   receiver,
//   feeAmount, 
//   bank
// ) => {
//     swap.methods
//       .swap(
//         amount,
//         receiver,
//         feeAmount,
//         bank
//       )
//       .send({ from: account })
//       .on("transactionHash", (hash) => {
//         dispatch(swapCreated());
//       })
//       .on("error", (error) => {
//         console.error(error);
//         window.alert(`There was an error!`);
//       });
// };