import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const ImageBackdrop = (props) => {
  return (
    <div
      className={`hidden sm:block ${props.imageAppear ? "block" : "hidden"}`}
      onClick={props.imageClick}
    
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

const ImageModalOverlay = (props) => {
  return <div>{props.children}</div>;
};

const imagePortalElement = document.getElementById("image-overlay");

const ImageModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ImageBackdrop
        
          imageAppear={props.imageAppear}
          imageClick={props.imageClick}
        />,
        imagePortalElement
      )}
      {ReactDOM.createPortal(
        <ImageModalOverlay>{props.children}</ImageModalOverlay>,
        imagePortalElement
      )}
    </Fragment>
  );
};

export default ImageModal;
