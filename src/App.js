import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import User from "./Component/User/User";

function App() {
  return (
    <div className="App">
      <h2 className="header-1">Random Users Details</h2>
      <Header></Header>
      <User></User>
    </div>
  );
}

export default App;
