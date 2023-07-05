import { useState } from "react";
import "./App.css";
import Login from "./components/login";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashbard from "./components/dashbard";
import { ContactsProvider } from "./contexts/contactsProvider";
import { ConversationsProvider } from "./contexts/conversationsProvider";

function App() {
  const [id, setId] = useLocalStorage("id", "");

  return id ? (
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashbard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  ) : (
    <Login setId={setId} />
  );
}

export default App;
