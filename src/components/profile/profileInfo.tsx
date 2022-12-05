import "./profile.scss";

const ProfileInfo = () => {
    const account = {
        name: "Mark Smith",
        adress: "11 London Road",
        email: "msmith@gmail.com",
        creditCard: "5678 9101 1121 1234",
    };

    const censor = (value: string) => {
        return value.substring(0, 4) + " ****".repeat(3);
    };

    return (
        <div>
            <div className="info-block">
                <p>Name: </p>
                <p>{account.name}</p>
            </div>

            <div className="info-block">
                <p>Adress: </p>
                <p>{account.adress}</p>
            </div>
            <div className="info-block">
                <p>Email: </p>
                <p>{account.email}</p>
            </div>
            <div className="info-block">
                <p>Credit Card:</p>
                <p>{censor(account.creditCard)}</p>
            </div>
            <button>edit</button>
        </div>
    );
};

export default ProfileInfo;
