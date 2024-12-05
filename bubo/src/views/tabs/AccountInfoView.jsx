import React from "react";

const AccountInfoView = ({ email, logout }) => {
  return (
    <div className="tab-content">
      <h3>Account Information</h3>
      <p><strong>Email:</strong> {email}</p>
      <button onClick={logout} className="logout-button">Logout</button>
    </div>
  );
};

export default AccountInfoView;
