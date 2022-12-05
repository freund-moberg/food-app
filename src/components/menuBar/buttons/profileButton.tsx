import IconButton from "components/UI/iconButton";
import { AppProps } from "common/types";
import { useDispatch } from "react-redux";


const ProfileButton = (props: AppProps) => {
    return (
        <IconButton
            imageFilename="button_icons/profile_button.png"
            className={props.className}
        />
    );
};

export default ProfileButton;
