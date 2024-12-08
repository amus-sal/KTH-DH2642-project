import React from "react";
import HomeView from "../views/homeView";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import ChatTab from "./chatPresenter"; 

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
    model.setActiveTab(tabName); 
  };
  return (
    <HomeView
      accountInfo={{ email: model.email }}
      documents={model.documents}
      history={model.history}
      chat={<ChatTab chatModel={chatModel} />}
      uploadDocument={uploadDocument}
      activeTab={model.activeTab} 
      setActiveTab={setActiveTab} 
      onLogout={handleLogout}

    />
  );
});

export default HomePresenter;
