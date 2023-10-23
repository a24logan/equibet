import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route path="" index element={<Home></Home>}></Route>
        <Route path="shop" index element={<Shop></Shop>}></Route>
        <Route
          path="auth"
          index
          element={<Authentication></Authentication>}
        ></Route>
        <Route path="checkout" index element={<Checkout></Checkout>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
