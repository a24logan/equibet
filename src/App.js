import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route path="" index element={<Home></Home>}></Route>
        <Route path="shop" index element={<div>Shop Page</div>}></Route>
        <Route path="sign-in" index element={<SignIn></SignIn>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
