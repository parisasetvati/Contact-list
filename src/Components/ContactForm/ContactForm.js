import { useState } from "react";
import styles from "./ContactForm.module.css";
import ContactList from "../ContactList/ContactList";
import React from "react";

import { toast } from "react-toastify";
const ContactForm = ({ addHandler, history }) => {
  console.log(history);
  const [contactName, setContactName] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    console.log(e.target.value);
    setContactName({ ...contactName, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!contactName.name || !contactName.email) {
      toast.error("please input name & email");
    } else {
      addHandler(contactName);
      setContactName({ name: "", email: "" });
      history.push("/");
    }
  };
  return (
    <section className={styles.container}>
      <form onSubmit={submitHandler}>
        <div className={styles.div}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            className={styles.input}
            onChange={changeHandler}
            value={contactName.name}
          ></input>
        </div>
        <div>
          <label className={styles.label}>email</label>
          <input
            type="email"
            name="email"
            className={styles.input}
            onChange={changeHandler}
            value={contactName.email}
          ></input>
        </div>

        <button type="submit" className={styles.btn}>
          Add
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
