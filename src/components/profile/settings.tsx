import "./profile.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCCInfo, setTheme } from "redux/reducers/accountReducer";
import { RootState } from "redux/store";

const Settings = () => {
    const dispatch = useDispatch();

    const settings = useSelector((state: RootState) => state.account.settings);
    const darkTheme = settings.darkTheme;
    const ccInfo = settings.showCC;

    return (
        <div>
            <h4>Settings</h4>
            <div className="settings">
                <label>Theme:</label>
                <div className="container">
                    <span style={{ color: darkTheme ? "grey" : "yellow" }}>☀︎</span>
                    <div className="switch-checkbox">
                        <label className="switch">
                            <input
                                type="checkbox"
                                onChange={() => dispatch(setTheme(!darkTheme))}
                                defaultChecked={darkTheme}
                            />
                            <span className="slider round"> </span>
                        </label>
                    </div>
                    <span style={{ color: darkTheme ? "#c96dfd" : "grey" }}>☽</span>
                </div>
                <label>Show CC Info:</label>
                <div className="container">
                    <span style={{ color: ccInfo ? "grey" : "red" }}>✖</span>
                    <div className="switch-checkbox">
                        <label className="switch">
                            <input
                                type="checkbox"
                                onChange={() => dispatch(setCCInfo(!ccInfo))}
                                defaultChecked={ccInfo}
                            />
                            <span className="slider round"> </span>
                        </label>
                    </div>
                    <span style={{ color: ccInfo ? "green" : "grey" }}>✓</span>
                </div>
            </div>
        </div>
    );
};

export default Settings;
