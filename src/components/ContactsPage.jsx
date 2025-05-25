import './ContactsPage.css';
import ContactsItem from "./ContactsItem.jsx";

export default function ContactsPage({contacts, onDelete}) {

    return (
        <div>
            <h3>Contacts</h3>
            <div className="table">
                <div className="row header">
                    <div className="cell">First Name</div>
                    <div className="cell">Last Name</div>
                    <div className="cell">Phone</div>
                    <div className="cell actions">Actions</div>
                </div>

                {contacts.map(contact => (
                    <ContactsItem key={contact.id} contact={contact} onDelete={onDelete} />
                ))}
            </div>
        </div>
    )
};
