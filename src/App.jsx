import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Ecomerce from "./Layout/Ecomerce"
import Header from "./Layout/Header"
import Sidebar from "./Layout/Sidebar"
import Switcher from "./Layout/Switcher"
import Analysis from "./Layout/Analysis";
import EcommerceAddProduct from "./Layout/EcommerceAddProduct";

function App() {
  return (
    <>
      <Header/>
      <Sidebar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Analysis/>}/>
          <Route path="/Ecomerce" element={<Ecomerce/>}/>
          <Route path="/EcommerceAddProduct" element={<EcommerceAddProduct/>}/>
        </Routes>
      </BrowserRouter>
      <Switcher/>
    </>
  )
}

export default App
