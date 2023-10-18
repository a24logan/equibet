import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route path="" index element={<Home></Home>}></Route>
        <Route path="shop" index element={<div>Shop Page</div>}></Route>
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
