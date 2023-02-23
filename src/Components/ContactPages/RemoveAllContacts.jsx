import React from 'react'

const RemoveAllContacts = ({ handleRemoveAll }) => {
  return (
    <div>
      <button onClick={handleRemoveAll} className='btn btn-danger form-control'>Remove All</button>
    </div>
  )
}

export default RemoveAllContacts