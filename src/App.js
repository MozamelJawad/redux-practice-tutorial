import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, getCartItems } from "./features/card/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const {cartItems, isLoading} = useSelector((store) => store.cart);
  const {isOpen} = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems("hello"))
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading ...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen &&  <Modal /> }
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default App;
