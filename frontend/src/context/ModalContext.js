import React, { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setModalData({});
        setShowModal(false);
    };

    const contextValue = {
        showModal,
        modalData,
        setModalData,
        openModal,
        closeModal,
    };

    return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
};

export default ModalContext;
