import Logo from "./assets/logo.png";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black p-4 rounded-md mb-4">
        Tailwind
      </h1>

      <Card userName="Ai En." btnText="Click me" /> //use props
      <Card userName="noya" btnText="visit now" />
      <Card /> // no use props
      
    </>
  );
}

export default App;
