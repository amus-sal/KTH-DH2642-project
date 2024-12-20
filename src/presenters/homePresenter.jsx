import React from "react";
import HomeView from "../views/homeView";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import ChatTab from "./chatPresenter"; 
import HistoryTab from "./historyPresenter";
const HomePresenter = observer(({ model, chatModel }) => {
    const navigate =  useNavigate()
  const uploadDocument = (file) => {
    if (file) {
      const newDoc = { name: file.name };
      model.addDocument(newDoc); 
    }
  };
  const handleLogout = () => {
    model.logout();  
    navigate("/login");  
  };

  const setActiveTab = (tabName) => {
    if (model.activeTab === "chat" && tabName !== "chat") {
      chatModel.reset();
    }
    model.setActiveTab(tabName); 
  };
  return (
    <HomeView
      accountInfo={{ email: model.email }}
      documents={model.documents}
      history={<HistoryTab chatModel={chatModel}/>}
      chat={<ChatTab chatModel={chatModel} />}
      uploadDocument={uploadDocument}
      activeTab={model.activeTab} 
      setActiveTab={setActiveTab} 
      onLogout={handleLogout}

    />
  );
});

export default HomePresenter;
