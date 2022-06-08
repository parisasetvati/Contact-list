import styles from "./ContactList.module.css";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";

const ContactList = ({ categoryName, onDelete,contact }) => {
  return (
    <div>
      <div className={styles.header}>
        <h2>ContactList</h2>
        <Link to="/add">
          <button className={styles.addbtn}>Home</button>
        </Link>
      </div>
      {categoryName.map((contact) => {
        return (
         <Contact contact={contact} onDelete={onDelete}/>
        );
      })}
    </div>
  );
};

export default ContactList;
