import "./Card.scss";

type AppProps = {
  className?: string;
  children: JSX.Element|JSX.Element[];
}

const Card = (props: AppProps) => {
  const classes = "card " + props.className;
  return <button className={classes}>{props.children}</button>;
}

export default Card;
