import "./App.css";
import navData from "../data.json";
import Navigation from "./components/Navigation";

function App() {
  console.log("navData", navData);

  return (
    <div className="nav-component">
      <h1>Navigation Component</h1>
      <Navigation navData={navData} />
    </div>
  );
}

export default App;
