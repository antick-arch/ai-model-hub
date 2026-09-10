import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Model from './components/Models/Model'
import NavBar from './components/Navbar/Navbar'

const dataFetch = async()=>{
  const res = await fetch('/models.json');
  return res.json();
}
const getModels = dataFetch()

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Suspense>
      <Model getModels={getModels}></Model>
    </Suspense>
    <Footer></Footer>
    </>
  )
}

export default App
