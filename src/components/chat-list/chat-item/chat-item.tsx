import Avatar from "../../base/avatar/avatar";
import classes from "./chat-item.module.scss";

type Props = {
  avatarSrc: string;
  firstName: string;
  lastName?: string;
  unreadCount?: number;
  lastMessage?: string;
  lastMessageTime?: string;
  active?: boolean;
};

export default function ChatItem(props: Props) {
  const activeClass = props.active ? classes.active : "";
  return (
    <div className={`${classes.container} ${activeClass}`}>
      <div className={classes.left}>
        <Avatar src={props.avatarSrc} size="large" />
        <div className={classes.headerText}>
          <h1 className={classes.title}>{`${props.firstName} ${
            props.lastName || ""
          }`}</h1>
          <span className={`${classes.subTitle} ${activeClass}`}>
            {props.lastMessage}
          </span>
        </div>
      </div>
      <div className={classes.right}>
        <span className={`${classes.subTitle} ${activeClass}`}>
          {props.lastMessageTime}
        </span>
        {props.unreadCount && (
          <span className={classes.unreadBadge}>
            <span>{props.unreadCount > 9 ? "9+" : props.unreadCount}</span>
          </span>
        )}
      </div>
    </div>
  );
}
