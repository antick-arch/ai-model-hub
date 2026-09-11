import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Model from './components/Models/Model'
import NavBar from './components/Navbar/Navbar'
import Cart from './components/Carts/Cart'

const dataFetch = async () => {
  const res = await fetch('/models.json');
  return res.json();
}
const getModels = dataFetch()

function App() {
  const [activeTab, setActiveTab] = useState("Model");
  console.log(activeTab);
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <div className="tabs tabs-box justify-center items-center bg-transparent">
        <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label="Model" defaultChecked onClick={() => setActiveTab("Model")} />
        <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label="Cart" onClick={() => setActiveTab("Cart")} />
      </div>
      {activeTab === "Model" && <Suspense>
        <Model getModels={getModels}></Model>
      </Suspense>}
      {activeTab === "Cart" && <Cart></Cart>}
      <Footer></Footer>
    </>
  )
}

export default App
