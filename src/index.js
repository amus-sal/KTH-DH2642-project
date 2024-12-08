import { createRoot } from "react-dom/client";
import { ReactRoot } from "./ReactRoot.jsx";
import authModel from './models/authModel.js';
import chatModel from './models/chatModel.js';
import { configure } from "mobx";

configure({ enforceActions: "never" }); 

const models = { authModel, chatModel };

createRoot(document.getElementById('root')).render(<ReactRoot models={models} />);
