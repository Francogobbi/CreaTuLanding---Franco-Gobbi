import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {

    const productsRef = collection(db, "products");

    getDocs(productsRef).then(snapshot => {

      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      if(categoryId){

        setProducts(data.filter(p => p.category === categoryId));

      } else {

        setProducts(data);

      }

    });

  }, [categoryId]);

  return <ItemList products={products} />;

};

export default ItemListContainer;