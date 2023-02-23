import React from 'react';
import Contact from './Contact';

const GeneralContacts = ({ contacts, onClickFavorite, deleteContact, handleUpdateClick }) => {
  return (
    <div className='col-12 py-2' style={{ borderRadius: '10px', backgroundColor: '#323637' }}>
      <div className='text-center text-white-50'>Other Contacts</div>
      <div className='p-2'>
        {contacts.map((contact) => (
          <Contact
            onClickFavorite={onClickFavorite}
            deleteContact={deleteContact}
            handleUpdateClick={handleUpdateClick}
            contact={contact}
            key={contact.name}
          />
        ))}
      </div>
    </div>
  )
}

export default GeneralContacts