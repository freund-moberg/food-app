import IconButton from "../UI/iconButton";
import { AppProps } from "../../common/types";

const MainMenuButton = (props: AppProps) => {
    return (
        <IconButton
            imageFilename="button_icons/menu_button.png"
            className={props.className}
        />
    );
};

export default MainMenuButton;
