import { createRoot } from "react-dom/client";
import { ReactRoot } from "./ReactRoot.jsx";
import authModel from './models/authModel.js';
import ChatModel from './models/chatModel.js';
import { configure, reaction } from "mobx";
import {connectToFirebase} from "./models/firebaseModel.js";

configure({ enforceActions: "never" }); 
const chatModel = new ChatModel();

const models = { authModel, chatModel };

createRoot(document.getElementById('root')).render(<ReactRoot models={models} />);

connectToFirebase(chatModel, reaction)