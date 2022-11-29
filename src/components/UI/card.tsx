import "./card.scss";
import { AppProps } from "../../common/types";

const Card = (props: AppProps) => {
    const classes = "card" + (props.className ? " " + props.className : "");
    return (
        <button className={classes} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Card;
