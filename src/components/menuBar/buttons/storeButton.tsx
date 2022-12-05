import IconButton from "components/UI/iconButton";
import { AppProps } from "common/types";

const StoreButton = (props: AppProps) => {
    return (
        <IconButton
            imageFilename="button_icons/menu_button.png"
            className={props.className}
        />
    );
};

export default StoreButton;
