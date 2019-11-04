import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [current, contactContext]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current.length === 0) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearCurrent();
    setContact({
      name: "",
      email: "",
      phone: "",
      type: ""
    });
  };

  const clearAll = () => {
    clearCurrent();
    setContact({
      name: "",
      email: "",
      phone: "",
      type: ""
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current.length === 0 ? "Add Contact" : "Edit Contact"}
      </h2>
      <input
        type='text'
        placeHolder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeHolder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeHolder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === "personal"}
        onChange={onChange}
      />
      Personal{" "}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === "professional"}
        onChange={onChange}
      />
      Professional
      <div>
        <input
          type='submit'
          value={current.length === 0 ? "Add Contact" : "Update Contact"}
          className='btn btn-primary btn-block'
        />
      </div>
      {current.length !== 0 && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
