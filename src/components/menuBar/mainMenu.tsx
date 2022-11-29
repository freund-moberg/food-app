import IconButton from "../UI/iconButton";

const MainMenu = (props: { className?: string }) => {
    return (
        <IconButton
            image="button_icons/menu_button.png"
            className={props.className}
        />
    );
};

export default MainMenu;
