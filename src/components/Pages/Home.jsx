import React, {  useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Login from '../Modal/Login'
import Sell from '../Modal/Sell'
import Card from '../Card/Card'
import { ItemsContext } from '../../Context/Item'
import { fetchFromFireStore } from '../../config/firebase.config'

const Home = () => {

  const [openModal,setModal] = useState(false)
  const [openModalSell,setModalSell] = useState(false)
 
  const toggleModal = ()=>{ setModal(!openModal)}
  const toggleModalSell = () => { setModalSell(!openModalSell)}

  const itemsContext = ItemsContext()

useEffect(() => {
  const getItems = async () => {
    try {
      const datas = await fetchFromFireStore()
      itemsContext.setItems(datas)
    } catch (error) {
      console.error("Failed to fetch items:", error)
    }
  }

  if (itemsContext) {
    getItems()
  }
}, [])
  

  
useEffect(()=>{
  console.log('Updated Items :', itemsContext.items)
},[itemsContext.items])


  return (
    <div>
        <Navbar toggleModal={toggleModal} toggleModalSell={toggleModalSell}/>
        <Login toggleModal={toggleModal} status = {openModal} />
        <Sell setItems={(itemsContext).setItems} toggleModalSell={toggleModalSell} status={openModalSell} />
        <Card items={(itemsContext).items || []} />
    </div>
  )
}

export default Home