import "./card.scss";

type AppProps = {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; //function type
    children: JSX.Element | JSX.Element[];
};

const Card = (props: AppProps) => {
    const classes = "card" + (props.className ? " " + props.className : "");
    return (
        <button className={classes} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Card;
