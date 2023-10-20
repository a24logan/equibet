import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
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
      </Route>
    </Routes>
  );
};

export default App;
