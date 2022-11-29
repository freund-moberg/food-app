import IconButton from "../UI/iconButton";

const Profile = (props: { className?: string }) => {
    return (
        <IconButton
            image="button_icons/profile_button.png"
            className={props.className}
        />
    );
};

export default Profile;
