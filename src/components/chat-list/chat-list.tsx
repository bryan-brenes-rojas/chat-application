import { FaBell, FaPlus, FaSearch } from "react-icons/fa";
import Header from "../base/header/header";
import IconButton from "../base/icon-button/icon-button";
import ChatItem from "./chat-item/chat-item";
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
      <div className={classes.list}>
        <ChatItem
          avatarSrc="https://picsum.photos/100"
          firstName="James"
          lastName="Aaron"
          lastMessage="Michelle, let's go for a walk tomorrow?"
          lastMessageTime="10.45"
          unreadCount={1}
        />
        <ChatItem
          avatarSrc="https://picsum.photos/100"
          firstName="Candy"
          lastName="Bosly"
          lastMessage="Michelle, let's go for a walk tomorrow?"
          lastMessageTime="10.45"
          unreadCount={3}
          active={true}
        />
        <ChatItem
          avatarSrc="https://picsum.photos/100"
          firstName="James"
          lastName="Aaron"
          lastMessage="Michelle, let's go for a walk tomorrow?"
          lastMessageTime="10.45"
          unreadCount={10}
        />
        <ChatItem
          avatarSrc="https://picsum.photos/100"
          firstName="James"
          lastName="Aaron"
          lastMessage="Michelle, let's go for a walk tomorrow?"
          lastMessageTime="10.45"
          unreadCount={10}
        />
        <ChatItem
          avatarSrc="https://picsum.photos/100"
          firstName="James"
          lastName="Aaron"
          lastMessage="Michelle, let's go for a walk tomorrow?"
          lastMessageTime="10.45"
          unreadCount={10}
        />
        <ChatItem
          avatarSrc="https://picsum.photos/100"
          firstName="James"
          lastName="Aaron"
          lastMessage="Michelle, let's go for a walk tomorrow?"
          lastMessageTime="10.45"
          unreadCount={10}
        />
        <ChatItem
          avatarSrc="https://picsum.photos/100"
          firstName="James"
          lastName="Aaron"
          lastMessage="Michelle, let's go for a walk tomorrow?"
          lastMessageTime="10.45"
          unreadCount={10}
        />
        <ChatItem
          avatarSrc="https://picsum.photos/100"
          firstName="James"
          lastName="Aaron"
          lastMessage="Michelle, let's go for a walk tomorrow?"
          lastMessageTime="10.45"
          unreadCount={10}
        />
        <ChatItem
          avatarSrc="https://picsum.photos/100"
          firstName="James"
          lastName="Aaron"
          lastMessage="Michelle, let's go for a walk tomorrow?"
          lastMessageTime="10.45"
          unreadCount={10}
        />
        <ChatItem
          avatarSrc="https://picsum.photos/100"
          firstName="James"
          lastName="Aaron"
          lastMessage="Michelle, let's go for a walk tomorrow?"
          lastMessageTime="10.45"
          unreadCount={10}
        />
      </div>
    </div>
  );
}
