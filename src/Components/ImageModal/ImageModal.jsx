import Modal from "react-modal";
import css from "./imageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modalContent}
        overlayClassName={css.overlay}
        shouldCloseOnOverlayClick={true}
      >
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.modalImage}
        />
      </Modal>
      <button className={css.closeButton} onClick={onClose}>
        X
      </button>
    </>
  );
};

export default ImageModal;
