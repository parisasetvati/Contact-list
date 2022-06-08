import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ContactDetail = ({ location }) => {
//   console.log(props.location.state.contact);
  const { contact } = location.state;
  return (
    <div>
      <p> name is :{contact.name}</p>
      <p>email is :{contact.email}</p>
      <Link to="/">go to home</Link>
    </div>
  );
};

export default ContactDetail;
