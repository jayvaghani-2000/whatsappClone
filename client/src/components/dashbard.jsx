import React from "react";
import Sidebar from "./sidebar";
import OpenConversation from "./openConversation";
import { useConversations } from "../contexts/conversationsProvider";

const Dashbard = ({ id }) => {
  const { selectedConversation } = useConversations();
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
};

export default Dashbard;
