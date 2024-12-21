
# Getting Started with Bubo

Bubo is a web-based application designed to help users create  collective knowledge while using a chat to ask questions. The platform allows users to create accounts, log in, use a chat assistant to retrieve knowledge and verify the answer if they think that the answer is correct. The verified answer is then depicted at the history tab which is the same for all users. The app is built using React, MobX, and React Router, the application emphasizes clean state management and a user-friendly experience.

---

## Project Structure

```

src/
.
├── App.css                 # Global styles specific to the App component
├── App.test.js             # Unit tests for the App component
├── ReactRoot.jsx           # Root component that initializes the React application
├── index.css               # Global CSS styles for the entire application
├── index.js                # Main entry point for rendering the app into the DOM
├── logo.svg                # Placeholder or logo image used in the application
├── models/                 # State management models for application logic
│   ├── authModel.js        # Manages user authentication state
│   ├── chatModel.js        # Manages chat interactions and data
│   ├── firebaseConfig.js   # Firebase configuration settings
│   ├── firebaseModel.js    # Model for managing Firebase data operations
│   └── teacherFirebase.js  # Firebase database  related file
├── presenters/             # Handles application logic and connects views to models
│   ├── chatPresenter.jsx   # Logic for managing chat interactions
│   ├── historyPresenter.jsx # Handles history-related functionality
│   ├── homePresenter.jsx   # Manages logic for the home view
│   ├── loginPresenter.jsx  # Manages login interactions
│   └── signupPresenter.jsx # Manages signup-related interactions
├── reportWebVitals.js      # Tracks and logs application performance metrics
├── services/               # Backend services and utility functions
│   ├── authService.js      # Handles authentication logic
│   ├── chatService.js      # Handles interactions with chat APIs
│   └── firebase.js         # Firebase initialization and helper methods
├── setupTests.js           # Test setup and environment configuration
├── styles.css              # General styles shared across the application
└── views/                  # UI components and screens for the app
    ├── homeView.jsx        # UI for the home screen
    ├── loginView.jsx       # UI for the login screen
    ├── signupView.jsx      # UI for the signup screen
    └── tabs/               # Tab-based UI components for navigation
        ├── AccountInfoView.jsx # Displays user account information
        ├── ChatView.jsx        # Shows the chat interface
        └── HistoryView.jsx     # Displays chat verified QA
```

---

## What We Have Done

- Implemented a signup and login system using Firebase Authentication.
- Created a MobX-based model for state management, ensuring reactive data flow throughout the app.
- Developed a structured interface with a home page comprising the following tabs:
  - **Account Info**: Displays user details.
  - **Chat**: A chatbot interface powered by OpenAI, integrated to answer queries.
  - **History**: Displays the most recent verified answers and their related questions (planned functionality).
- Integrated OpenAI API for chatbot functionality.
- Used a lean react package to create the Chat called @chatscope/chat-ui-kit-react
- Created the functionality of verifying a response and storing the answer marked as verified along with the question it refered too
- Created the history tab where all verified questions and answers are shown to all the users

---

## Preparing Your Environment

1. Create a `.env` file in the project root with the following variables:
   ```plaintext
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   VITE_OPENAI_API_KEY=your-openai-api-key
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
