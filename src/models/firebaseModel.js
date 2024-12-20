import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue, push} from "./teacherFirebase.js";
import {firebaseConfig} from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const rf = ref(db, "model");

//Dummy test
// set(ref(db, PATH+"/test"), "dummy");


function modelToPersistence(question, answer){

    return {
        Question : question,
        Answer : answer
    };
}

function persistenceToModel(data, model) {
    console.log("DATA: ", data);    
    function saveToModelACB(data) {
        model.verifiedMessages.push({"question":data.Question, "answer": data.Answer});
    }
    Object.values(data).map(saveToModelACB);
    return;
}

function saveToFirebase(chatModel) {
    function transformerCB(message) {
        push(rf, modelToPersistence(message.question, message.answer))
        // set(rf, modelToPersistence(message.question, message.answer));
        return (message.question, message.answer);
    }
    set(rf, {"model": []});
    (chatModel.verifiedMessages).map(transformerCB);
    // console.log("Saved message with question: "+ Question +  " Answer: " + Answer + " ID: " + Id );
}

 function readFromFirebase(chatModel) {
    // onValue(rf, (data)=>{
    //     console.log("data.val(): " + data.val());
    //     persistenceToModel(data.val(), chatModel);
        
    // })
    return get(rf).then(function convertACB(data){
        console.log("data.val(): " + data.val());
        return persistenceToModel(data.val(), chatModel);
    })
}

function saveQA(chatModel){
    saveToFirebase(chatModel);
    // chatModel.verificationClicked = false;
    // updateHistoryModel();
}

function connectToFirebase(chatModel,  watchFunction) {
    function checkACB() {
        return [chatModel.verificationClicked]
    }
    function sideEffectACB() { 
        saveQA(chatModel)
        chatModel.verificationClicked = false;
    }
    readFromFirebase(chatModel)
    console.log("Database connected");
    console.log("chatModel verified are: " + chatModel.verifiedMessages);
    watchFunction(checkACB, sideEffectACB)
}

export {connectToFirebase }



// Read data and display them in History View
// When clicking verify call saveToFirebase store the QA  and call a function to update History View
