import IconButton from "../../UI/iconButton";
import { AppProps } from "../../../common/types";
import { useDispatch } from "react-redux";
import { setTab } from "../../../redux/tabReducer";
import { Tabs } from "../../../common/types"

const StoreButton = (props: AppProps) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(setTab(Tabs.STORE));
    };

    return (
        <IconButton
            imageFilename="button_icons/menu_button.png"
            className={props.className}
            onClick={() => clickHandler()}
        />
    );
};

export default StoreButton;
