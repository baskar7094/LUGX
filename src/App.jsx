import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";


export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route index element={<Home/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}