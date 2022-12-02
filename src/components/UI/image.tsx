import { AppProps } from "common/types";

const Image = (props: AppProps) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/assets/images/${props.imageFilename}`}
      alt={props.imageFilename}
    />
  );
};

export default Image;
