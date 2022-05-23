import { createContext, useContext, useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore";


const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)


const AppContextProvider = ({children}) => {

  const [products, setProducts] = useState([])

	useEffect(() => {
		const db = getFirestore()
		const itemCollection = collection(db, "ItemCollection")
		getDocs(itemCollection).then(snapshot => {
			setProducts(snapshot.docs.map((doc) => ( { id: doc.id, ...doc.data() } )))
		})
	}, [])
  

  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  )
}
export default AppContextProvider