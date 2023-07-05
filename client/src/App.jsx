import { useState } from "react";
import "./App.css";
import Login from "./components/login";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashbard from "./components/dashbard";

function App() {
  const [id, setId] = useLocalStorage("id", "");

  return id ? <Dashbard id={id} /> : <Login setId={setId} />;
}

export default App;
