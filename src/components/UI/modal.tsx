import IconButton from "./iconButton";
import "./modal.scss";
import { AppProps } from "common/types";

const Modal = (props: AppProps) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onUnfocus} />
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <IconButton onClick={props.onClick} />
        </footer>
      </div>
    </div>
  );
};

export default Modal;
