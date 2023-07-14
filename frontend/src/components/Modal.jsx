import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import ModalContext from "../context/ModalContext";

export default function ModalWindow() {
    const { showModal, modalData, closeModal } = useContext(ModalContext);

    let headerContent, bodyContent;
    if (modalData.type === "order complete") {
        const { userName, totalAmount, orderNumber } = modalData;
        headerContent = (
            <>
                Order Complete
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.2em"
                    viewBox="0 0 512 512"
                    fill="#5fc5b4"
                    className="mx-2">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
            </>
        );

        bodyContent = (
            <>
                <p className="mb-2">
                    Dear <span>{userName}</span>, thank you for your order!
                </p>
                <p className="mb-1">
                    Your <span>order #{orderNumber}</span> with a total amount of{" "}
                    <span>{totalAmount}</span> has been received and is being processed. We will
                    contact you shortly.
                </p>
            </>
        );
    }

    return (
        <Modal
            show={showModal}
            onHide={() => closeModal()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{headerContent}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{bodyContent}</Modal.Body>
        </Modal>
    );
}
