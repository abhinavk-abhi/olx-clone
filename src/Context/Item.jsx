import { collection, getDocs } from "firebase/firestore";
import {  createContext, useContext, useEffect, useState } from "react";
import { fireStore } from "../config/firebase.config";

const Context = createContext(null)

export const ItemsContext = ()=> useContext(Context)

export const ItemsContextProvider = ({children}) =>{
    const [items,setItems] = useState(null)

    useEffect(()=>{
        const fetchItemsFromFireStore = async ()=>{
            try {
                const productCollection = collection(fireStore,'Products')
                const productSnapshot = await getDocs(productCollection)
                const productsList = productSnapshot.docs.map(doc=>({
                    id:doc.id,
                    ...doc.data()
                }))
                setItems(productsList)
            } catch (error) {
                console.log(error)
            }
        }

        fetchItemsFromFireStore()

    },[])


    return (
        <>
        
        <Context.Provider value={{items,setItems}}>
            {children}
        </Context.Provider>

        </>
    )

}