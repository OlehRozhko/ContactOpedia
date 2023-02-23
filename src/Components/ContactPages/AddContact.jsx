import React, { useState } from 'react'

const AddContact = ({ handleAddContact, isUpdating, selectedContact, handleCancelUpdateContact, handleUpdateContact }) => {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);

  const handleAddContactFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.contactName.value.trim();
    const email = e.target.elements.contactEmail.value.trim();
    const phone = e.target.elements.contactPhone.value.trim();
    const id = e.target.elements.contactId.value.trim();
    let response;

    if (isUpdating) {
      response = handleUpdateContact({ name, email, phone, id });
    } else {
      response = handleAddContact({ name, email, phone });
    }

    if (response.status == 'success') {
      setSuccessMessage(response.msg);
      setErrorMessage(undefined);
      document.querySelector('.contact-form').reset();
    } else {
      setErrorMessage(response.msg);
      setSuccessMessage(undefined);
    }
  }

  return (
    <div className='border col-12 text-white p-2'>
      <form onSubmit={handleAddContactFormSubmit} className='contact-form'>
        <input name='contactId' defaultValue={isUpdating ? selectedContact.id : ''} hidden />
        <div className="row p-2">
          <div className='col-12 text-white-50'>{isUpdating ? 'Update contact' : 'Add a new Contact'}</div>
          <div className='col-12 col-md-4 p-1'>
            <input
              className='form-control form-control-sm'
              placeholder='Name...'
              name='contactName'
              defaultValue={isUpdating ? selectedContact.name : ''}
            />
          </div>
          <div className='col-12 col-md-4 p-1'>
            <input
              className='form-control form-control-sm'
              placeholder='Email...'
              name='contactEmail'
              defaultValue={isUpdating ? selectedContact.email : ''}
            />
          </div>
          <div className='col-12 col-md-4 p-1'>
            <input
              className='form-control form-control-sm'
              placeholder='Phone...'
              name='contactPhone'
              defaultValue={isUpdating ? selectedContact.phone : ''}
            />
          </div>
          {!errorMessage ? (<div></div>) : (<div className='col-12 text-center text-danger'>
            {errorMessage}
          </div>)}
          {!successMessage ? (<div></div>) : (<div className='col-12 text-center text-success'>
            {successMessage}
          </div>)}
          <div className={`col-12 p-1 ${isUpdating ? 'col-md-4 offset-md-2' : 'col-md-6 offset-md-3'}`}>
            <button className='btn btn-primary btn-sm form-control'>
              {isUpdating ? "Update" : "Create"}
            </button>
          </div>
          <div className="col-12 col-md-4 p-1">
            {isUpdating && (
              <button onClick={handleCancelUpdateContact} className='btn btn-secondary form-control btn-sm'>
                Cancel
              </button>
            )
            }
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddContact