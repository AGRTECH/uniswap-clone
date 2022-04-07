import { get } from "lodash";
import { createSelector } from "reselect";

const account = (state) => get(state, "web3.account");
export const accountSelector = createSelector(account, (a) => a);

const accountLoaded = (state) => get(state, "web3.accountLoaded", false);
export const accountLoadedSelector = createSelector(accountLoaded, (a) => a);

const web3 = (state) => get(state, "web3.connection");
export const web3Selector = createSelector(web3, (w) => w);

const swapLoaded = (state) => get(state, "swap.loaded", false);
export const swapLoadedSelector = createSelector(swapLoaded, (tl) => tl);

const swap = (state) => get(state, "swap.contract");
export const swapSelector = createSelector(swap, (t) => t);

const amount = (state) => get(state, "swap.amount");
export const amountSelector = createSelector(amount, (t) => t);