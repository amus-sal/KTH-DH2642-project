
# Getting Started with Bubo

Bubo is a web-based application designed to help users manage documents, communicate effectively, and track history within a streamlined interface. The platform allows users to create accounts, log in, and seamlessly navigate through key features such as uploading and organizing documents, integrating with an OpenAI-based chatbot, saving chat history, and viewing their activity. Built using React, MobX, and React Router, the application emphasizes clean state management and a user-friendly experience.

---

## Project Structure

```
src/
|-- models/               # MobX models to manage application state
|   |-- authModel.js      # Handles user authentication state
|   |-- chatModel.js      # Manages chat history and OpenAI interactions
|-- views/                # UI components for individual features
|   |-- Tabs/             # Reusable tab components
|       |-- ChatTab.js    # Displays the chat interface
|       |-- DocumentsTab.js # Handles document uploads
|       |-- AccountInfoTab.js # Shows user account information
|       |-- HistoryTab.js # Displays verified chat history
|   |-- LoginView.js      # Login screen UI
|   |-- SignupView.js     # Signup screen UI
|   |-- HomeView.js       # Main home UI with tab-based navigation
|-- presenters/           # Connect views to model logic
|   |-- ChatPresenter.js  # Handles logic for chat functionality
|   |-- LoginPresenter.js # Manages login interactions
|   |-- SignupPresenter.js # Manages signup interactions
|   |-- HomePresenter.js  # Manages tabs and navigation for the home page
|-- services/             # Backend integrations and helper functions
|   |-- firebase.js       # Firebase configuration and setup
|   |-- authService.js    # Authentication-related logic
|   |-- chatService.js    # Interacts with OpenAI API
|-- App.js                # Main application component
|-- index.js              # Entry point for rendering the app
```

---

## What We Have Done

- Implemented a signup and login system using Firebase Authentication.
- Created a MobX-based model for state management, ensuring reactive data flow throughout the app.
- Developed a structured interface with a home page comprising the following tabs:
  - **Account Info**: Displays user details.
  - **Chat**: A chatbot interface powered by OpenAI, integrated to answer queries.
  - **Documents**: Handles document upload and management (planned functionality).
  - **History**: Displays the most recent verified answers and their related questions (planned functionality).
- Integrated OpenAI API for chatbot functionality.


---

## What We Still Plan to Do

- Enable full document upload and management in the **Documents** tab.
- Saved chat history and verified answers in Firebase for easy retrieval.
- Refine and enhance the chat history view under the **History** tab.

---

## Preparing Your Environment

1. Create a `.env` file in the project root with the following variables:
   ```plaintext
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   REACT_APP_OPENAI_API_KEY=your-openai-api-key
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

## Available Scripts

### `npm start`
Runs the app in the development mode. The page will reload when you make changes. You may also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

---

Enjoy exploring **Bubo**, your intelligent organizational assistant! 🚀
