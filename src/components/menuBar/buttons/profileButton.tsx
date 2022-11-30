import IconButton from "../../UI/iconButton";
import { AppProps } from "../../../common/types";

const ProfileButton = (props: AppProps) => {
    return (
        <IconButton
            imageFilename="button_icons/profile_button.png"
            className={props.className}
        />
    );
};

export default ProfileButton;
