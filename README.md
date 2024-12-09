# Getting Started with Create React App
Bubo is a web-based application designed to help users manage documents, communicate effectively, and track history within a streamlined interface. The platform allows users to create accounts, log in, and seamlessly navigate through key features such as uploading and organizing documents, integrating with OpenAI-based chatbot and saving the chat history, and viewing their activity history. Built using React, MobX, and React Router, the application emphasizes clean state management and a user-friendly experience.

## Structure
src/
|-- Models/       
|-- views/             
|   |--Tabs 
|      |-- ChatTab 
|   |-- LoginView.js
|   |-- HomeView.js
|   |-- SignupView.js
|-- presenters/        
|   |-- ChatPresenter.js
|   |-- LoginPresenter.js
|   |-- SignupPresenter.js
|-- services/          
|   |-- firebase.js     # Firebase configuration
|   |-- authService.js  # Auth functions
|   |-- chatService.js  # Question handling logic
|-- App.js
|-- index.js


## What We Have Done
Implemented a signup and login system using Firebase Authentication.
Created a MobX-based model for state management, ensuring reactive data flow throughout the app.
Developed a structured interface with a home page comprising four tabs:
Account Info: Displays user details.
Chat: Chatbot interface powered by OpenAI, integrated to answer queries.
Integrated OpenAI API for chat functionality.

## What We Still Plan to Do
History: Displays the most recent verified answers and their related questions.
Saved chat history and verified answers in Firebase for easy retrieval.
Support document upload functions.

## prepare .env
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_OPENAI_API_KEY=your-openai-api-key

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
