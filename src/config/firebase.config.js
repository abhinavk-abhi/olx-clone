import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import {getStorage} from 'firebase/storage';
import {collection, getDocs, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfOqMywN6vyBjiYNKTpVpytHjSdrBTOqw",
  authDomain: "olx-clone-f39ab.firebaseapp.com",
  projectId: "olx-clone-f39ab",
  storageBucket: "olx-clone-f39ab.firebasestorage.app",
  messagingSenderId: "343551104454",
  appId: "1:343551104454:web:3c9abbfaff0c4737c50ec7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const storage = getStorage()
const fireStore = getFirestore()


const fetchFromFireStore = async () =>{
    try {
        const productsCollection = collection(fireStore,'Products')
        const productSnapshot = await getDocs(productsCollection)
        const productList = productSnapshot.docs.map(doc => ({
            id : doc.id,
            ...doc.data()
        }))
        console.log("Fetched data")
        return productList;
    } catch (error) {
        console.log('Error fetching products from firestore :' , error)
        return []
    }
}

export {
    auth,
    provider,
    storage,
    fireStore,
    fetchFromFireStore
}