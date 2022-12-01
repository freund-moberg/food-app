import "./profile.scss";

const Profile = () => {
    const account = {
        name: "Mark Smith",
        adress: "11 London Road",
        creditCard: "5678 9101 1121 1234",
    };

    const description =
        "Every day, more than 11 million guests visit our restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food. Founded in 1954, we are the second largest fast food hamburger chain in the world. Our commitment to premium ingredients, signature recipes, and family-friendly dining experiences is what has defined our brand for more than 50 successful years.";

    const censor = (value: string) => {
        return value.substring(0, 4) + " ****".repeat(3);
    };

    return (
        <div className="profile">
            <div>
                <h3>Profile</h3>
                <div className="info-block">
                    <p>Name: </p>
                    <p>{account.name}</p>
                </div>

                <div className="info-block">
                    <p>Adress: </p>
                    <p>{account.adress}</p>
                </div>
                <div className="info-block">
                    <p>Credit Card:</p>
                    <p>{censor(account.creditCard)}</p>
                </div>
            </div>
            <div>
                <h3>About Us</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Profile;
