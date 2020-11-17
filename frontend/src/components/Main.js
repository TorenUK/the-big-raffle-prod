import React, { useState, useEffect } from "react";

// components
import "./Main.css";
import Banner from "./Banner";
import Footer from "./Footer";
import Item from "./Item";

//other
import axios from "./axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

// redux
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

const Main = () => {
  const [items, setItems] = useState([]);
  const user = useSelector(selectUser);
  const history = useHistory();

  // toast
  const notify = (name) => toast.dark(`1 ${name} ticket added to cart`);

  useEffect(() => {
    // get items
    const fetchData = async () => {
      const response = await axios.get("/items");

      setItems(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <Banner />
      <div className="main__items">
        {items.map((item) => (
          <>
            <Item
              name={item.name}
              image={item.image}
              price={item.price}
              stock={item.stock}
              notify={notify}
            />
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
            />
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
