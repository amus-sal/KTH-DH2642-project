import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue} from "./teacherFirebase.js";
import {firebaseConfig} from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const questionRef = ref(db, "Question");
const answerRef = ref(db, "Answer");
// const PATH ="dinnerModel58";

//Dummy test
// set(ref(db, PATH+"/test"), "dummy");


// function modelToPersistence(model){
//     function transformerCB(dish) {
//         return dish.id;
//     }
//     const dishIds = (model.dishes).map(transformerCB)
//     dishIds.sort((a, b) => a - b);
//     return {
//         numberOfGuests : model.numberOfGuests,
//         currentDishId : model.currentDishId,
//         dishes : dishIds
//     };
// }

// function persistenceToModel(data, model) {
//     console.log("DATA: ", )
//     function saveToModelACB(dishes) {
//         model.dishes = dishes;
//     }
//     model.setCurrentDishId(data?.currentDishId || null);
//     model.setNumberOfGuests(data?.numberOfGuests || 2);
//     return getMenuDetails(data?.dishes || []).then(saveToModelACB);
// }

// function saveToFirebase(model) {
//     if (model.ready) {
//         set(rf, modelToPersistence(model));
//     }
// }

 function readFromFirebase() {
    onValue(questionRef, (data)=>{
        console.log("data.val(): " + data.val());
        // persistenceToModel(data.val(), model);
        
    })
    return get(answerRef).then(function convertACB(data){
        console.log("data.val(): " + data.val());
        return ;
        // return persistenceToModel(data.val(), model);
    })
}

function connectToFirebase(model, watchFunction) {
    function checkACB() {
        return [model.verificationClicked]
    }
    function sideEffectACB() { 
        // saveToFirebase(model)
    }
    readFromFirebase()
    console.log("Database connected");
    watchFunction(checkACB, sideEffectACB)
}

export {connectToFirebase }


