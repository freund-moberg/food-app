import Image from "./image";
const IconButton = (props: { className?: string; image: string }) => {
    return (
        <button className={props.className}>
            <Image filename={props.image} />
        </button>
    );
};

export default IconButton;
