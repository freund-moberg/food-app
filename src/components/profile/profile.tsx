import { Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <div className="profile">
            <h3>Profile</h3>
            <Outlet />
        </div>
    );
};

export default Profile;
