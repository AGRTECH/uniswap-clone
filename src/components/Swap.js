import React from "react";
import styles from "./App.module.css";
import { Form, Button, Dropdown } from 'react-bootstrap'
import { connect } from "react-redux";
import { swapSelector, swapLoadedSelector, accountSelector, amountSelector } from "../store/selectors";
import { swapFunc } from "../store/interactions";
import { amountChanged } from "../store/actions";

const Swap = (props) => {
  const { dispatch, swap, account, amount } = props
  return (
    <>
    {props.swapLoaded ? 
      <div className={`${styles.homeContainer} ${styles.homeContainerSmaller}`}>
        <div className={`${styles.innerHomeContainer}`}>
        <Form onSubmit={(e) => {
          e.preventDefault()
          swapFunc(
            dispatch,
            swap,
            account,
            amount,
            // receiver,
            // feeAmount, 
            // bank
          )
        }}>
    <Form.Label>Swap</Form.Label>
  <Form.Group className={`mb-3 ${styles.flexFormGroup}`} controlId="formBasicEmail">
    <Form.Control type="email" placeholder="0.0" onChange={(e) => {
      dispatch(amountChanged(parseInt(e.target.value)))
    }} />
    <Dropdown>
      <Dropdown.Toggle variant="success" id='dropdown-button-drop-end' key='end' drop='end'>
        Select a Token
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Token1</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Form.Group>

  <Form.Group className={`mb-3 ${styles.flexFormGroup}`} controlId="formBasicPassword">
    <Form.Control type="password" placeholder="0.0" />
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select a Token
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-3">Token2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Form.Group>
  <Button variant="success" className={styles.swapButton} type="submit">
    Swap
  </Button>
</Form>
        </div>
      </div>
    : <div>contracts not loaded</div>}
    </>
  );
};

function mapStateToProps(state) {
  return {
    swap: swapSelector(state),
    swapLoaded: swapLoadedSelector(state),
    account: accountSelector(state),
    amount: amountSelector(state)
  };
}

export default connect(mapStateToProps)(Swap);