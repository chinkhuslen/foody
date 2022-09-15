import {db} from './firebase'
import {  collection, addDoc, getDocs } from "firebase/firestore";
import { useMemo } from 'react';

export const addFoodDataToFire = async (data) =>{
    try {
        const docRef = await addDoc(collection(db, 'meals'),{
            ...data
        });
        console.log("doc id: " + docRef.id)
    } catch (error) {
        console.log(error)
    }
}
export const getFoodData = async () =>{
        try {
            const querySnapshot = await getDocs(collection(db,'meals'));
            const foodData = [];
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                foodData.push(doc.data());
              });
            return foodData;
        } catch (error) {
            console.log(error)
        }
  } 