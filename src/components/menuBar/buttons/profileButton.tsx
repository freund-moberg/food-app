import IconButton from "../../UI/iconButton";
import { AppProps,Tabs } from "../../../common/types";
import { useDispatch } from "react-redux";
import { setTab } from "../../../redux/reducers/tabReducer";

const ProfileButton = (props: AppProps) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(setTab(Tabs.PROFILE));
    };
    return (
        <IconButton
            imageFilename="button_icons/profile_button.png"
            className={props.className}
            onClick={() => clickHandler()}
        />
    );
};

export default ProfileButton;
