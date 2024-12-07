
import { observer } from "mobx-react-lite";  
import ChatTab from "../views/tabs/ChatView";

const ChatPresenter = observer(({ model }) => {
    // functions


    return (
        <div className="chat-presenter">
            {/* Render the ChatTab and pass the necessary model to it */}
            <ChatTab model={model} />
        </div>
    );
});

export default ChatPresenter;