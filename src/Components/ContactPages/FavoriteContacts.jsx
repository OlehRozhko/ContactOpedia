import React from 'react'
import Contact from './Contact'

const FavoriteContacts = ({ contacts, onClickFavorite, deleteContact, handleUpdateClick }) => {
  return (
    <div className='col-12 py-2' style={{ borderRadius: '10px', backgroundColor: '#323637' }}>
      <div className='text-center text-white-50'>Favorites</div>
      <div className='p-2'>
        {contacts.map((contact) => (
          <Contact
            deleteContact={deleteContact}
            handleUpdateClick={handleUpdateClick}
            onClickFavorite={onClickFavorite}
            contact={contact}
            key={contact.name}
          />
        ))}
      </div>
    </div>
  )
}

export default FavoriteContacts