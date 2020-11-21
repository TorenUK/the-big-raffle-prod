import React, { useEffect, useState } from "react";

// components
import "./Checkout.css";
import Banner from "./Banner";
import Footer from "./Footer";
import Subtotal from "./Subtotal";
import CartItem from "./CartItem";

// other
import axios from "./axios";
import { useHistory } from "react-router-dom";
import gsap from "gsap";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// redux
import { useSelector, useDispatch } from "react-redux";
import { selectCart, emptyCart } from "../features/cart/cartSlice";
import { selectUser } from "../features/user/userSlice";
import { selectOrder, newOrder } from "../features/order/orderSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);
  const order = useSelector(selectOrder);

  const [name, setName] = useState("");
  const [line1, setLine1] = useState("");
  const [postcode, setPostcode] = useState("");

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const getCartTotal = (cart) => {
    let total = 0;
    cart.map((item) => {
      total += item.price;
    });

    return total;
  };

  useEffect(() => {
    gsap.fromTo(
      "#stripe",
      {
        opacity: 0,
        y: 300,
      },
      { opacity: 1, y: 0, duration: 0.5, ease: "ease-in-out" }
    );
  }, []);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post("/create-payment-intent", {
        total: getCartTotal(cart) * 100,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret().catch((err) => console.log(err));
  }, [cart]);

  const cardStyle = {
    style: {
      base: {
        color: "#000",
        fontFamily: "poppins, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "18px",
        "::placeholder": {
          color: "#fff",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
    hidePostalCode: true,
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: user,
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);

      axios
        .post("/order/create", {
          email: user,
          name: name,
          address: {
            line1: line1,
            postcode: postcode,
          },
          items: cart,
        })
        .then((response) => {
          dispatch(newOrder(response.data));
        })
        .then(() => {
          dispatch(emptyCart());
        })
        .catch((err) => console.log(err));
    }
  };

  if (order) {
    history.push("/order");
  } else {
  }

  return (
    <div className="checkout">
      <Banner />
      <div className="checkout__header">
        <h1>checkout</h1>
      </div>
      <div className="checkout__container">
        {cart?.map((item) => (
          <CartItem
            name={item.name}
            image={item.image}
            price={item.price}
            id={item.id}
            removeBtn={false}
          />
        ))}
      </div>
      <div id="stripe" className="checkout__stripe">
        <div className="checkout__subtotal">
          <Subtotal showButton={false} />
        </div>
        <form id="payment-form" onSubmit={handleSubmit}>
          <input
            required
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="full name"
          />
          <input
            required
            name="line1"
            type="text"
            onChange={(e) => setLine1(e.target.value)}
            placeholder="address line 1"
          />
          <input
            required
            name="postcode"
            type="text"
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="postcode"
          />
          <div className="checkout__element">
            <CardElement
              id="card-element"
              options={cardStyle}
              onChange={handleChange}
            />
          </div>

          <button disabled={processing || disabled || succeeded}>
            <span>{processing ? <p>processing</p> : "pay now"}</span>
          </button>
          {error && <div>{error}</div>}
          {/* Show a success message upon completion */}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
