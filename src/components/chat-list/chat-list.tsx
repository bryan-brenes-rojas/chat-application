import { FaBell, FaPlus, FaSearch } from "react-icons/fa";
import Header from "../base/header/header";
import IconButton from "../base/icon-button/icon-button";
import classes from "./chat-list.module.scss";

export default function ChatList() {
  return (
    <div className={classes.container}>
      <Header
        title="Michelle Laurence"
        subTitle="Good Morning"
        avatarSrc="https://picsum.photos/100"
        online={true}
      >
        <IconButton>
          <FaPlus />
        </IconButton>
        <IconButton alert={true}>
          <FaBell />
        </IconButton>
        <IconButton>
          <FaSearch />
        </IconButton>
      </Header>
    </div>
  );
}
