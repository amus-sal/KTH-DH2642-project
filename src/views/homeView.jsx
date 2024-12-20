import { useNavigate } from "react-router-dom";

const HomeView = ({ activeTab, setActiveTab, accountInfo, documents, chat, history, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();  
    navigate("/login");  
  };



  return (
    <div className="home-container">
      {/* Header with Logo and Logout Button */}
      <header className="home-header">
        <div className="logo-container">
          <h1>Bubo</h1>
          <img src="https://via.placeholder.com/30" alt="Owl Logo" className="logo" />
        </div>
        {/* Logout button */}
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      {/* Navigation Tabs */}
      <nav className="tabs-navigation">
        <button
          className={`tab-button ${activeTab === "account" ? "active" : ""}`}
          onClick={() => setActiveTab("account")}
        >
          Account Info
        </button>
        {/* <button
          className={`tab-button ${activeTab === "documents" ? "active" : ""}`}
          onClick={() => setActiveTab("documents")}
        >
          Documents
        </button> */}
        <button
          className={`tab-button ${activeTab === "chat" ? "active" : ""}`}
          onClick={() => setActiveTab("chat")}
        >
          Chat
        </button>
        <button
          className={`tab-button ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          History
        </button>
      </nav>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "account" && (
          <div className="account-info">
            <h3>Account Info</h3>
            <p><strong>Email:</strong> {accountInfo.email}</p>
            <p><strong>Name:</strong> {accountInfo.name}</p>
          </div>
        )}
        {activeTab === "documents" && documents}
        {activeTab === "chat" && chat}
        {activeTab === "history" && history}
      </div>
    </div>
  );
};

export default HomeView;
