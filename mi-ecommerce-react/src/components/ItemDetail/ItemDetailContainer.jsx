import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemDetailContainer = () => {

  const { itemId } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    const docRef = doc(db, "products", itemId);

    getDoc(docRef).then(snapshot => {

      setProduct({ id: snapshot.id, ...snapshot.data() });

    });

  }, [itemId]);

  return product && <ItemDetail product={product} />;

};

export default ItemDetailContainer;