import { BrowserRouter, Routes } from "react-router-dom";
import Login from "./feature/login";


function App() {
  return (
    <>
    <Routes>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/signup"  component={Signup}/>
      </Switch>
    <Login/>
    </Routes>
    </>
  );
}

export default App;
