import { makeObservable, observable, action } from "mobx";
import { signup ,login} from "../services/authService";  

class AuthModel {
  email = "";
  password = "";
  error = "";
  successMessage = "";
  isAuthenticated = false;
  activeTab = "history"; 
  constructor() {
    makeObservable(this, {
      email: observable,
      password: observable,
      error: observable,
      successMessage: observable,
      isAuthenticated: observable,
      activeTab: observable,
      setActiveTab: action,
      setEmail: action,
      setPassword: action,
      handleSignup: action,
      reset: action,
      logout: action,
      addDocument: action,
    });
  }
  logout() {
    this.email = "";
    this.password = "";
    this.error = "";
    this.successMessage = "";
    this.isAuthenticated = false;
    this.documents = [];
    this.history = [];
  }
  reset() {
    this.email = "";
    this.password = "";
    this.error = "";
    this.successMessage = "";
    this.isAuthenticated = false;
  }
  setActiveTab(tabName) {
    this.activeTab = tabName;
  }
  addDocument(doc) {
    this.documents.push(doc);
    this.history.push(`Uploaded document: ${doc.name}`);
  }
  setEmail(email) {
    this.email = email;
  }
  setPassword(password) {
    this.password = password;
  }
  async handleSignup() {
    try {
      this.successMessage = "";
      await signup(this.email, this.password); 
       this.successMessage =  "Signup successful! Redirecting...";
       this.isAuthenticated = true;
      } catch (err) {
      this.error = err.message
      console.error(err.message);
    }
  }
  async handleLogin() {
    try {
      this.successMessage = "";
      await login(this.email, this.password);
      this.successMessage =  "Login successful! Redirecting...";   
      this.isAuthenticated = true;
    } catch (err) {
      this.error = err.message
      console.error(err.message);
    }
  }
}

const authModel = new AuthModel();
export default authModel;
