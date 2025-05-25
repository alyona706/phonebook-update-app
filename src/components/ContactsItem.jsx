export default function ContactsItem({ contact, onDelete }) {
    return (
        <div className="row">
            <div className="cell">{contact.firstName}</div>
            <div className="cell">{contact.lastName}</div>
            <div className="cell">{contact.phone}</div>
            <div className="cell actions">
                <button onClick={() => onDelete(contact.id)}>Delete</button>
            </div>
        </div>
    )
};