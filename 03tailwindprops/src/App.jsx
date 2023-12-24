import Logo from "./assets/logo.png";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black p-4 rounded-md mb-4">
        Tailwind
      </h1>

      <Card productName="Ai En." btnText="Free" price="29"/> //use props
      <Card productName="noya" btnText="Buy now" price="72"/>
      <Card /> // no use props
      
    </>
  );
}

export default App;
