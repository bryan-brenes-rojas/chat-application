import classes from "./icon-button.module.scss";
type Props = {
  alert?: boolean;
  children?: React.ReactNode;
};

export default function IconButton(props: Props) {
  return (
    <button className={`${classes.button} ${props.alert ? classes.alert : ""}`}>
      {props.children}
    </button>
  );
}
