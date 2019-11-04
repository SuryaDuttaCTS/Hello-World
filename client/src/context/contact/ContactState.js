import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import axios from "axios";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [],
    current: [],
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //GET CONTACTS
  const getContacts = async () => {
    try {
      const res = await axios.get("/api/contacts");
      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  //ADD CONTACT
  const addContact = async contact => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/contacts", contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  //DELETE CONTACT

  const deleteContact = async id => {
    try {
      await axios.delete(`/api/contacts/${id}`);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  //CLEAR CONTACTS
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };

  //SET CURRENT CONTACT

  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //CLEAR CURRENT CONTACT
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //UPDATE THE CURRENT CONTACT
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //FILTER CONTACT

  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  //CLEAR FILTER
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        clearCurrent,
        setCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        error: state.error,
        getContacts,
        clearContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
