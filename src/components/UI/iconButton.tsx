import "./iconButton.scss"
import Image from "./image";
import { AppProps } from "../../common/types";

const IconButton = (props: AppProps) => {
    const classes = "icon-button" + (props.className ? " " + props.className : "");
    return (
        <button className={classes} onClick={props.onClick}>
            <Image imageFilename={props.imageFilename} />
        </button>
    );
};

export default IconButton;
