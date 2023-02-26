import classes from "./avatar.module.scss";

type Props = {
  src: string;
  alt?: string;
  online?: boolean;
  size?: "regular" | "large";
};

export default function Avatar(props: Props) {
  return (
    <span
      className={`${classes.avatar} ${props.online ? classes.online : ""} ${
        props.size && props.size === "large" ? classes.large : ""
      }`}
    >
      <img src={props.src} alt={props.alt} />
    </span>
  );
}
