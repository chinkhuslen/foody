import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

import { storage } from "./firebase";
import {
  getDownloadURL,
  ref as sRef,
  uploadBytes,
} from "firebase/storage";

export const addFoodDataToFire = async (data, img) => {
  try {
    const url = await uploadImageToFirebase(img,data.name);
    console.log(url);
    const docRef = await addDoc(collection(db, "meals"), {
      ...data,
      image:url
    });
    console.log("doc id: " + docRef.id);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const getFoodData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "meals"));
    const foodData = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      foodData.push(doc.data());
    });
    return foodData;
  } catch (error) {
    console.log(error);
  }
};

export const uploadImageToFirebase = async (file, foodName) => {
  const storageRef = sRef(storage, `foods/${foodName}`);
  let imageUrl;
  await uploadBytes(storageRef, file).then(async (snapshot) => {
    await getDownloadURL(snapshot.ref).then(async (url) => {
      console.log(url)
      imageUrl = url;
    });
  });
  return imageUrl;
};
