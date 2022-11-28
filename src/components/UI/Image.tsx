const Image = (props: { filename: string }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/assets/images/${props.filename}`}
      alt={props.filename}
    />
  );
};

export default Image;
