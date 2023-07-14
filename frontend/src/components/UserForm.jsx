import React, { useContext, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../redux/slices/orderSlice";
import ModalContext from "../context/ModalContext";

export default function UserForm() {
    const [fieldValues, setFieldValues] = useState(() => {
        const savedFieldValues = localStorage.getItem("fieldValues");
        return savedFieldValues
            ? JSON.parse(savedFieldValues)
            : {
                  userName: "",
                  email: "",
                  phoneNumber: "",
                  address: "",
              };
    });

    const [errors, setErrors] = useState({});
    const { openModal, setModalData } = useContext(ModalContext);
    const { cartItems, totalAmount, totalQty } = useSelector((state) => state.cartData);
    const dispatch = useDispatch();

    // Update localStorage whenever fieldValues change
    useEffect(() => {
        localStorage.setItem("fieldValues", JSON.stringify(fieldValues));
    }, [fieldValues]);

    // Handles the change event of the form fields
    const handleChange = (fieldName, value) => {
        let formattedValue = value;
        if (fieldName === "userName") {
            formattedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        } else if (fieldName === "email") {
            formattedValue = value.toLowerCase();
        }

        setFieldValues((prevValues) => ({
            ...prevValues,
            [fieldName]: formattedValue,
        }));
    };

    // Validates a single form field based on its name and value
    const validateFormField = (fieldName, value) => {
        const errors = {};
        switch (fieldName) {
            case "userName":
                if (!value.match(/^[A-Za-z]+$/)) {
                    errors.userName = "Only Latin characters are valid.";
                }
                break;
            case "email":
                if (!value.match(/^[A-Za-z0-9]+(\.[A-Za-z0-9]+)*@[A-Za-z]+(\.[A-Za-z]+)+$/)) {
                    errors.email = "Invalid email format.";
                }
                break;
            case "phoneNumber":
                if (!value.match(/^\+?\d+$/)) {
                    errors.phoneNumber = "Invalid phone number. Please enter digits only.";
                } else if (!value.startsWith("+380")) {
                    errors.phoneNumber = "Phone number should start with '+380'.";
                } else if (value.length < 13) {
                    errors.phoneNumber = "Phone number should contain 13 digits.";
                }
                break;
            case "address":
                if (value.length < 10) {
                    errors.address = "Address should contain at least 10 characters.";
                }
                break;
            default:
                break;
        }
        return errors;
    };

    // Validates the entire form and returns errors for each field
    const validateForm = () => {
        const fieldErrors = {};
        const fieldNames = ["userName", "email", "phoneNumber", "address"];

        fieldNames.forEach((fieldName) => {
            const fieldError = validateFormField(fieldName, fieldValues[fieldName]);
            if (Object.keys(fieldError).length > 0) {
                fieldErrors[fieldName] = fieldError[fieldName];
            }
        });

        return fieldErrors;
    };

    // Handles the blur event of the form fields
    const handleFieldBlur = (fieldName) => {
        const fieldErrors = validateForm();
        setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: fieldErrors[fieldName],
        }));
    };

    // Scrolls to the top of the page if user clicked sumbit button but there is an error
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Dispatches a new order and show modal window about order complete
    const saveOrderAndShowModal = async () => {
        const { userName, email, phoneNumber, address } = fieldValues;

        const formData = {
            email,
            lastOrder: {
                userName,
                phoneNumber,
                address,
                cartItems,
                totalAmount,
                totalQty,
            },
        };

        dispatch(createOrder(formData))
            .then((action) => {
                const { userName, totalAmount, orderNumber } = action.payload;
                const modalData = { type: "order complete", userName, orderNumber, totalAmount };
                setModalData(modalData);
                openModal();
            })
            .catch((error) => console.log(error));
    };

    // Resets the form fields and errors
    const resetForm = () => {
        setFieldValues({
            userName: "",
            email: "",
            phoneNumber: "",
            address: "",
        });
        localStorage.removeItem("fieldValues");
        setErrors({});
    };

    // Handles the form submission event: validate the form, dispatch a new order and reset state variables
    const handleSubmit = (e) => {
        e.preventDefault();

        const fieldErrors = validateForm();
        if (Object.keys(fieldErrors).length > 0) {
            setErrors(fieldErrors);
            scrollToTop();
            return;
        }

        saveOrderAndShowModal();
        resetForm();
    };

    // Create a form field based on the provided parameters
    const generateFormField = ({ name, label, type, placeholder }) => (
        <Form.Group controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                as={type === "textarea" ? "textarea" : "input"}
                rows={type === "textarea" ? 4 : undefined}
                placeholder={placeholder}
                name={name}
                maxLength={name === "phoneNumber" ? 13 : undefined}
                value={fieldValues[name]}
                onChange={(e) => handleChange(name, e.target.value)}
                onBlur={() => handleFieldBlur(name)}
                isInvalid={!!errors[name]}
            />
            <Form.Control.Feedback type="invalid">{errors[name]}</Form.Control.Feedback>
        </Form.Group>
    );

    return (
        <section className="user-form-wrapper" style={{ "--cart-items-qty": cartItems.length }}>
            <h3 className="mb-3 mt-3 text-center">Order Details:</h3>
            <Form onSubmit={handleSubmit} id="user-form">
                {generateFormField({
                    name: "userName",
                    label: "Name:",
                    type: "text",
                    placeholder: "Nikolay",
                })}
                {generateFormField({
                    name: "email",
                    label: "Email:",
                    type: "text",
                    placeholder: "example@gmail.com",
                })}
                {generateFormField({
                    name: "phoneNumber",
                    label: "Phone Number:",
                    type: "tel",
                    placeholder: "+380979551397",
                })}
                {generateFormField({
                    name: "address",
                    label: "Address:",
                    type: "textarea",
                    placeholder: "1 Independence Square, Kyiv, 01001",
                })}
                <section className="cart-submit">
                    <span>
                        Total Amount: <span className="total-value">{totalAmount}</span>
                    </span>
                    <Button variant="default" type="submit" disabled={totalAmount === "0.00 ₴"}>
                        Submit
                    </Button>
                </section>
            </Form>
        </section>
    );
}
