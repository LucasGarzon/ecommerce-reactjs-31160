import { collection, getDocs, getFirestore } from "firebase/firestore";


const task = new Promise((resp) => {
    const db = getFirestore();

    const itemCollection = collection(db, "ItemCollection");
    getDocs(itemCollection).then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      resp(items);
    });
})

export const getItem = () => {
	return task
}


