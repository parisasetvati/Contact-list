import { Link } from "react-router-dom";
import image from "../../../assets/image/profile.png";
import styles from "./Contact.module.css";

const Contact = ({ contact,onDelete }) => {
 const { id, name,email } = contact;
  return (
    <div key={contact.id} className={styles.contactlist}>
      <img src={image} alt="user" />
     <Link to={{pathname:`/user/${id}`,state:{contact}}}>
     <p>name:{name}</p>
      <p>email:{email}</p>
      <button onClick={() => onDelete(id)} className={styles.btn}>
        Delete
      </button>
     </Link>
    </div>
  );
};

export default Contact;
