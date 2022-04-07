import React from "react";
import styles from "./App.module.css";
import { Form, Button, Dropdown } from 'react-bootstrap'

const Swap = (props) => {
  return (
    <>
      <div className={`${styles.homeContainer} ${styles.homeContainerSmaller}`}>
        <div className={`${styles.innerHomeContainer}`}>
        <Form>
    <Form.Label>Swap</Form.Label>
  <Form.Group className={`mb-3 ${styles.flexFormGroup}`} controlId="formBasicEmail">
    <Form.Control type="email" placeholder="0.0" />
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
    </>
  );
};

export default Swap;