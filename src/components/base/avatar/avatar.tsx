import classes from "./avatar.module.scss";

type Props = {
  src: string;
  alt?: string;
  online?: boolean;
};

export default function Avatar(props: Props) {
  return (
    <span className={`${classes.avatar} ${props.online ? classes.online : ""}`}>
      <img src={props.src} alt={props.alt} />
    </span>
  );
}
