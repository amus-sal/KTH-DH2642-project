import { createRoot } from "react-dom/client";
import { ReactRoot } from "./ReactRoot.jsx";
import AuthModel from './models/authModel.js';
import { configure } from "mobx";

configure({ enforceActions: "never" }); 

const reactiveModel = AuthModel; 

createRoot(document.getElementById('root')).render(<ReactRoot model={reactiveModel} />);
