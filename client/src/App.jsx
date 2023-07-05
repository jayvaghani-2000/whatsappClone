import { useState } from "react";
import "./App.css";
import Login from "./components/login";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashbard from "./components/dashbard";
import { ContactsProvider } from "./contexts/contactsProvider";
import { ConversationsProvider } from "./contexts/conversationsProvider";
import { SocketProvider } from "./contexts/socketProvider";

function App() {
  const [id, setId] = useLocalStorage("id", "");

  return id ? (
    <ContactsProvider>
      <SocketProvider id={id}>
        <ConversationsProvider id={id}>
          <Dashbard id={id} />
        </ConversationsProvider>
      </SocketProvider>
    </ContactsProvider>
  ) : (
    <Login setId={setId} />
  );
}

export default App;
