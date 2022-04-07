import Navbar from './Navbar';
import Swap from './Swap';
import Pool from './Pool';
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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

export default App;
