import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentBlogData } from "../../features/currentData/currentData";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { firestore } from "../../firebase_setup/firebase";

export const Blog = (props) => {
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState([]);
  const fetchPost = async () => {
    await getDocs(collection(firestore, "blog_data")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBlogData(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div id="blog" style={{ marginTop: 200 }}>
      <div className="container">
        <div className="row">
          <MDBRow>
            {blogData
              ? blogData.map(function (item, i) {
                  return (
                    <MDBCol
                      md="6"
                      key={"learn-blog-" + i}
                      className={i % 2 ? "margin-down" : ""}
                    >
                      <div className="blogRoundDiv">
                        <img
                          src={item.image}
                          className="blog-image"
                          alt={"learn blog image" + i}
                        />
                        <div className="blog-contentDiv">
                          <h3 className="blogDate">{item.date}</h3>
                          <h3>{item.title}</h3>
                          <p>{item.content}</p>
                          <Link
                            to="/blog"
                            onClick={() => {
                              dispatch(
                                setCurrentBlogData({
                                  date: item.date,
                                  image: item.image,
                                  title: item.title,
                                  content: item.content,
                                })
                              );
                            }}
                          >
                            <p className="link">Read more</p>
                          </Link>
                        </div>
                      </div>
                    </MDBCol>
                  );
                })
              : "Loading"}
          </MDBRow>
        </div>
      </div>
      <div style={{ marginBottom: 200 }} />
    </div>
  );
};
