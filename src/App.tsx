import classes from "./App.module.scss";
import ChatList from "./components/chat-list/chat-list";
import ConversationPanel from "./components/conversation-panel/conversation-panel";

function App() {
  return (
    <div className={classes.container}>
      <ChatList />
      <ConversationPanel />
    </div>
  );
}

export default App;
