import "./profile.scss";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "components/UI/iconButton";
import { useEffect } from "react"
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useDispatch } from "react-redux";
import { logout } from "redux/reducers/accountReducer";

const ProfileInfo = () => {
    const dispatch = useDispatch();
    const account = useSelector((state: RootState) => state.account);
    const navigate = useNavigate();

    const censor = (value: string) => {
        return value.substring(0, 4) + " ****".repeat(3);
    };

    useEffect(() => {
        if (!account.loggedIn){
            navigate("/profile/login");
        }
        
    }, [account.loggedIn, navigate]);

    const logoutClickHandler = () => {
        //are u sure
        dispatch(logout());
    };

    return (
        <div>
            <div className="button_bar">
                <Link to="settings">
                    <IconButton
                        imageFilename="button_icons/settings_button.png"
                        className="button_bar__settings"
                    />
                </Link>
                <Link to="login">
                    <IconButton
                        imageFilename="button_icons/logout_button.png"
                        onClick={logoutClickHandler}
                        className="button_bar__logout"
                    />
                </Link>
            </div>
            <div className="info-block">
                <p>Name: </p>
                <p>
                    {account.current.firstName} {account.current.lastName}
                </p>
            </div>

            <div className="info-block">
                <p>Address: </p>
                <p>{account.current.address}</p>
            </div>
            <div className="info-block">
                <p>Email: </p>
                <p>{account.current.email}</p>
            </div>
            <div className="info-block">
                <p>Credit Card:</p>
                <p>{censor(account.current.creditCard)}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
