import React from 'react';
import { getRandomUser } from '../../Utility/api';

const AddRandomContact = ({ handleAddRandomContact }) => {
  const getRandomContact = async () => {
    const responseFromAPI = await getRandomUser();
    const { first_name, last_name, email, phone_number } = responseFromAPI.data;
    handleAddRandomContact({ name: `${first_name} ${last_name}`, email, phone: phone_number });
  }

  return (
    <div>
      <button onClick={getRandomContact} className='btn btn-success form-control'>
        Add Random Contact
      </button>
    </div>
  )
}

export default AddRandomContact