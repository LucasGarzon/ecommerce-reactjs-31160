import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const { itemId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getItem();
  }, [itemId]);

  const getItem = () => {
    const getItemPromise = new Promise((res, rej) => {
      const db = getFirestore();

      const itemCollection = collection(db, "ItemCollection");
      getDocs(itemCollection).then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({ ...doc.data() }));
        res(items);
      });
    });

    getItemPromise.then((data) => {
      setProduct(data.find((d) => d.id == itemId));
    });
  };

  return (
    <>
      <ItemDetail item={product} key={product.id}/>
    </>
  );
}
export default ItemDetailContainer;
