import React from 'react'

const Contact = ({ contact, onClickFavorite, deleteContact, handleUpdateClick }) => {
  return (
    <div className='row p-md-2 mb-2' style={{ borderRadius: '20px', border: '1px solid #555' }}>
      <div className='col-2 col-md-2 pt-2 pt-md-1'>
        <img src={`https://ui-avatars.com/api/?name=${contact.name}`}
          style={{ width: '80%' }} alt={contact.name} />
      </div>
      <div className='col-6 col-md-5 text-warning pt-0'>
        <span className='h4'>{contact.name}</span>
        <br />
        <div className='text-white-50'>
          {contact.email}
          <br />
          {contact.phone}
        </div>
      </div>
      <div className='col-2 col-md-2 pt-md-3'>
        <button onClick={() => onClickFavorite(contact)} className={`btn btn-sm m-1 ${contact.isFavorite ? "btn-warning" : "btn-outline-warning"
          }`}>
          <i className="bi bi-star" style={{ fontSize: '1rem' }}></i>
        </button>
      </div>
      <div className='col-2 col-md-3 pt-md-3'>
        <button onClick={() => handleUpdateClick(contact)} className='btn btn-primary btn-sm m-1'>
          <i style={{ fontSize: '1rem' }} className="bi bi-pencil-square"></i>
        </button>
        <button onClick={() => deleteContact(contact.id)} className='btn btn-danger btn-sm m-1'>
          <i style={{ fontSize: '1rem' }} className="bi bi-trash-fill"></i>
        </button>
      </div>
    </div>
  )
}

export default Contact