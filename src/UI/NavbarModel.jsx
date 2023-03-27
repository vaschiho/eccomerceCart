import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const NavbarBackdrop = (props) => {
  return (
    <div
      className={`${props.showNavbar ? "block" : "hidden"}`}
      onClick={props.onClose}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        zIndex: "20",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
      }}
    />
  );
};

const NavbarModalOverlay = (props) => {
  return <div>{props.children}</div>;
};

const navbarPortalElement = document.getElementById("navbar-overlay");

const NavbarModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <NavbarBackdrop
          onClose={props.onClose}
          showNavbar={props.showNavbar}
        />,
        navbarPortalElement
      )}
      {ReactDOM.createPortal(
        <NavbarModalOverlay>{props.children}</NavbarModalOverlay>,
        navbarPortalElement
      )}
    </Fragment>
  );
};

export default NavbarModal;
