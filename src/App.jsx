import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


import Cambioclave from "./pages/cambioclave";
export default function App() { 



  return (
    <BrowserRouter>

      <Routes>
      <Route >
      <Route path='/:token' element={<Cambioclave />} />
       

        </Route>
      </Routes>
    </BrowserRouter>
  )
} 