import Avatar from "../../base/avatar/avatar";
import classes from "./header.module.scss";

type Props = {
  title: string;
  subTitle: string;
  avatarSrc: string;
  online?: boolean;
  swapTitles?: boolean;
  children?: React.ReactNode;
};

export default function Header(props: Props) {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Avatar src={props.avatarSrc} online={props.online} />
        <div
          className={`${classes.headerText} ${
            props.swapTitles ? classes.reverse : ""
          }`}
        >
          <span className={classes.subTitle}>{props.subTitle}</span>
          <h1 className={classes.title}>{props.title}</h1>
        </div>
      </div>
      <div className={classes.right}>{props.children}</div>
    </div>
  );
}
