import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  // return <div className={`${props.showNavbar ? "block" : "hidden"}`} className={`${props.imageAppear ? "block" :"hidden"}`} onClick={props.imageClick} onClick={props.onClose}  style={{ position: "fixed", top: "0", left: "0", width: "100%", height: "100vh", zIndex: "20", backgroundColor: "rgba(0, 0, 0, 0.75)" }} />
}

const ModalOverlay = (props) => {
  return (
    <div >
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById('overlays');


const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} imageAppear={props.imageAppear} imageClick={props.imageClick} showNavbar={props.showNavbar}  />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
}

export default Modal