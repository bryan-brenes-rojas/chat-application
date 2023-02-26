import { FaEllipsisV, FaPhone, FaSearch } from "react-icons/fa";
import Header from "../base/header/header";
import IconButton from "../base/icon-button/icon-button";
import classes from "./conversation-panel.module.scss";
import Conversation from "./conversation/conversation";

export default function ConversationPanel() {
  return (
    <div className={classes.container}>
      <Header
        title="Candy Bosly"
        subTitle="Last seen Yesterday 2:30 PM"
        avatarSrc="https://picsum.photos/100"
        swapTitles={true}
      >
        <IconButton>
          <FaSearch />
        </IconButton>
        <IconButton>
          <FaPhone />
        </IconButton>
        <IconButton>
          <FaEllipsisV />
        </IconButton>
      </Header>
      <Conversation />
    </div>
  );
}
