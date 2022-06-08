import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import ContactDetail from "./Components/ContactDetail/ContactDetail";
const App = () => {
  const [categoryName, setCategoryName] = useState([]);

  const addHandler = (contactName) => {
    console.log(contactName);
    setCategoryName([
      ...categoryName,
      { ...contactName, id: categoryName.length + 1 },
    ]);
  };
  const DeleteHandler = (id) => {
    console.log("clicked", id);
    const deleteItem = categoryName.filter((c) => c.id !== id);
    setCategoryName(deleteItem);
  };
  useEffect(() => {
    const saveLocal = JSON.parse(localStorage.getItem("items"));
    if (saveLocal) setCategoryName(saveLocal);
  }, []);

  useEffect(() => {
    if (categoryName?.length) {
      localStorage.setItem("items", JSON.stringify(categoryName));
    }
  }, [categoryName]);

  return (
    <section>
      <header>
        
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/newcontact">NewContact</Link>
            </li>
          </ul>
        </nav> */}
      </header>
      <Switch>
      <Route
          path="/user/:id"
         component={ContactDetail} />
          
      
        <Route
          path="/add"
          exact
          render={(props) => <ContactForm addHandler={addHandler} {...props} />}
        />
        <Route
          path="/"
          render={() => (
            <ContactList categoryName={categoryName} onDelete={DeleteHandler} />
          )}
        />
      </Switch>
      {/* <ContactForm addHandler={addHandler} /> */}
      {/* <ContactList categoryName={categoryName} onDelete={DeleteHandler} /> */}
      <ToastContainer />
    </section>
  );
};

export default App;
