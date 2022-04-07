import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Swap from './Swap';
import Pool from './Pool';
import styles from "./App.module.css";
import { loadAccount, loadWeb3 } from '../store/interactions';
import { connect } from "react-redux";

const App = (props) => {
  const [mounted, setMounted] = useState(false);

  const loadBlockchainData = async (dispatch) => {
    const web3 = loadWeb3(dispatch);
    await web3.eth.net.getNetworkType();
    const account = await loadAccount(web3, dispatch);
    const networkId = await web3.eth.net.getId();
    // const everpay = await loadEverpay(web3, networkId, dispatch);
    // const tether = await loadTether(web3, networkId, dispatch);
    // if (!everpay && !tether) {
      // window.alert(
        // "Token smart contract not detcted on the current network. Please select another network with Metamask"
      // );
    // } else {
      // await loadAllData(everpay, dispatch);
      // await subscribeToEvents(everpay, dispatch);
      // await showBalances(dispatch, account, tether, everpay);
    // }
  };

  if (!mounted) {
    loadBlockchainData(props.dispatch);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.bodyBackground}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Swap />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/pool" element={<Pool />} />
      </Routes>
      <div className=""></div>
    </BrowserRouter>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
