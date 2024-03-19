import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Landingpage from './page/Landingpage'
import Home from './page/Home'
import Watchhistory from './page/Watchhistory'
import { Route, Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
    
    <Header/>

    <Routes>
      <Route path='/' element={<Landingpage/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/Watchhistory' element={ <Watchhistory/>} />
    </Routes>   
   
    <Footer/>
    
    
    </>
  )
}

export default App
