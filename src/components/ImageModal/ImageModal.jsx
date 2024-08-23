import Modal from "react-modal";
import css from "./imageModal.module.css";
import { RxCross1 } from "react-icons/rx";
Modal.setAppElement("#root");

const ImageModal = ({ isOpen, image: { urls, alt_description }, onClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modalContent}
        overlayClassName={css.overlay}
        shouldCloseOnOverlayClick={true}
      >
        <div className="">
          <img
            src={urls.regular}
            alt={alt_description}
            className={css.modalImage}
          />
          <div className={css.descrDiv}>
            <p className={css.descr}>{alt_description}</p>
          </div>
        </div>
      </Modal>
      <button className={css.closeButton} onClick={onClose}>
        <RxCross1 color="white" size="30" />
      </button>
    </>
  );
};

export default ImageModal;
