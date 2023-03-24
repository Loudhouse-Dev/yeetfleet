import { getFirestore, setDoc } from 'firebase/firestore';
import app from '../lib/firebase.config';

const Firestore = {
  wrtieDoc: (...args) => {
    return new Promise((resolve) => {
      const randomIdx = Math.floor(Math.random() * 100000000);
      try {
        const productRef = doc(db, 'products', `${randomIdx}`);
        setDoc(productRef, {
          key: '',
        });
      } catch (err) {}
    });
  },
};

export default Firestore;
