import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

const Shoplist = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='grid-1'>
      <div>
        <ContactFilter />
      </div>
      <div className='grid-3'>
        <Contacts></Contacts>
        <Contacts></Contacts>
        <Contacts></Contacts>
      </div>
    </div>
  );
};

export default Shoplist;
