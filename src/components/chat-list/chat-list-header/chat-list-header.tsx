import { FaBell, FaPlus, FaSearch } from "react-icons/fa";
import Avatar from "../../base/avatar/avatar";
import IconButton from "../../base/icon-button/icon-button";
import classes from "./chat-list-header.module.scss";

export default function ChatListHeader() {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Avatar src="https://picsum.photos/100" online={true} />
        <div className={classes.headerText}>
          <span className={classes.message}>Good Morning</span>
          <h1 className={classes.userName}>Michelle Laurence</h1>
        </div>
      </div>
      <div className={classes.right}>
        <IconButton>
          <FaPlus />
        </IconButton>
        <IconButton alert={true}>
          <FaBell />
        </IconButton>
        <IconButton>
          <FaSearch />
        </IconButton>
      </div>
    </div>
  );
}
