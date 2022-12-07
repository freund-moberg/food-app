import "./profile.scss";

const Settings = () => {

    const darkMode=true;
    const setDarkMode = (mode: boolean) => {
        console.log("a")
    }
    return (
        <div>
            <h4>Settings</h4>
            <div className="settings">
                <label>Theme:</label>
                <div className="container">
                    <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                    <div className="switch-checkbox">
                        <label className="switch">
                            <input
                                type="checkbox"
                                onChange={() => setDarkMode(!darkMode)}
                            />
                            <span className="slider round"> </span>
                        </label>
                    </div>
                    <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
                </div>
                <label>Show CC Info:</label>
                <div className="container">
                    <span style={{ color: darkMode ? "grey" : "red" }}>✖</span>
                    <div className="switch-checkbox">
                        <label className="switch">
                            <input
                                type="checkbox"
                                onChange={() => setDarkMode(!darkMode)}
                            />
                            <span className="slider round"> </span>
                        </label>
                    </div>
                    <span style={{ color: darkMode ? "green" : "grey" }}>✓</span>
                </div>
            </div>
        </div>
    );
};

export default Settings;
