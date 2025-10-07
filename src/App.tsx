import { Navbar } from './ui/navbar';
import { Routes, Route } from "react-router";
import { FormRegist } from "./ui/regist";
import { HomePage } from './ui/home';
import { LoginForm } from './ui/login';
import { DetailPROduk } from './ui/detail-produk';
import { Basket } from './ui/basket';
import { ProfilPage } from './ui/profile';


function App() {
  
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailproduk/:id" element={<DetailPROduk />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/login/regist" element={<FormRegist />} />
          <Route path="/keranjang" element={<Basket />} />
          <Route path="/profile" element={<ProfilPage />}/>
        </Routes>
    </>
  )
}

export default App
