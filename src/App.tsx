import './App.css';
import { Navbar } from './ui/navbar';
import { Routes, Route } from "react-router";
import { FormRegist } from "./ui/regist";
import { HomePage } from './ui/home';
import { LoginForm } from './ui/login';
import { DetailPROduk } from './ui/detail-produk';


function App() {
  

  return (
    <>
    <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailproduk/:category/:id" element={<DetailPROduk />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/login/regist" element={<FormRegist />} />
        </Routes>
      </div>
    </>
  )
}

export default App
