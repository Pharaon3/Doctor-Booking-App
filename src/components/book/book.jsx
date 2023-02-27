import React, { useState, useEffect } from "react";
import JsonData from "../../data/data.json";
import { Hero } from "./hero";
import { Element } from "./element";
import { useDispatch } from "react-redux";
import { setCurrentBlogData } from "../../features/currentData/currentData";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { firestore } from "../../firebase_setup/firebase";
import BookData from "./date.json";


export const Book = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData.Book);
  }, []);

  // const [bookData, setLandingBookData] = useState({});
  const [bookData, setbookData] = useState([]);

  useEffect(() => {
    setbookData(BookData);
  }, []);

  const fetchPost = async () => {
    await getDocs(collection(firestore, "book_data")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setbookData(newData);
    });
  };

  useEffect(() => {
    // fetchPost();
  }, []);

  return (
    <div>
      <Hero data={landingPageData.Hero} />
      <div className="divide-line"/>
      <Element data={bookData} />
    </div>
  );
};
