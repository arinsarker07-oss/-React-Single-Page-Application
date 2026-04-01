
import './App.css'

import Banner from './Banner'
import Footer from './Footer'
import Navbar from './Navbar'
import Start from './Start'
import Price from './Price'
import Transflow from './Transflow'
import UserRating from './UserRating'
import Body from './Body'
import { useState } from 'react'

const AllCard = async () => {
    const res = await fetch("/Product.json")
    return res.json()
}
const GetAllCard = AllCard()


function App() {
    const [ActiveTab, setActiveTab] = useState('product')
    const [Carts,setCarts]= useState([])
  console.log( Carts);
  
    return (
        <>
            <Navbar Carts={Carts} setActiveTab={setActiveTab}></Navbar>
            <Banner></Banner>
            <UserRating></UserRating>
            <Body Carts={Carts} GetAllCard={GetAllCard} setActiveTab={setActiveTab} ActiveTab={ActiveTab}  setCarts={setCarts}></Body>
            <Start></Start>
            <Price></Price>
            <Transflow></Transflow>
            <Footer></Footer>
        </>
    )
}

export default App
