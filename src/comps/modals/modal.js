import ReactDOM from "react-dom";

// import AppleHomeScreenModal from "./applehomescreenmodal";

const Modal = ({ isShowing, children }) =>
  isShowing ? ReactDOM.createPortal(<>{children}</>, document.body) : null;
export default Modal;
