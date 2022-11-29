import Image from "./image";
import { AppProps } from "../../common/types";

const IconButton = (props: AppProps) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            <Image imageFilename={props.imageFilename} />
        </button>
    );
};

export default IconButton;
