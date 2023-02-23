import React, { useState } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import AddContact from './AddContact';
import AddRandomContact from './AddRandomContact';
import FavoriteContacts from './FavoriteContacts';
import GeneralContacts from './GeneralContacts';
import RemoveAllContacts from './RemoveAllContacts';


const ContactMain = () => {
  const contacts = [
    {
      id: 1,
      name: "Ben Parket",
      phone: '123-134-2212',
      email: "ben@fakeEmail.com",
      isFavorite: false
    },
    {
      id: 2,
      name: "Kathy Patrick",
      phone: "111-222-0000",
      email: "kathy@dotnetmastery.com",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Paul Show",
      phone: "999-222-1111",
      email: "paul@dotnetmastery.com",
      isFavorite: true,
    },
    {
      id: 4,
      name: "John Show",
      phone: "653-222-1111",
      email: "john@dotnetmastery.com",
      isFavorite: false,
    }];

  const [contactList, setContactList] = useState(contacts);
  const [selectedContact, setSelectedContact] = useState(undefined);
  const [isUpdating, setIsUpdating] = useState(false);



  const handleAddContact = (newContact) => {
    if (newContact.name == '') {
      return { status: 'failure', msg: 'Please Enter a valid Name' };
    } else if (newContact.phone == '') {
      return { status: 'failure', msg: 'Please Enter a valid Phone Number' };
    }

    const duplicateRecord = contactList.filter((contact) => {
      if (contact.name === newContact.name && contact.phone === newContact.phone) {
        return true
      }
    });

    if (duplicateRecord.length > 0) {
      return { status: 'failure', msg: 'Duplicated Record' };
    } else {
      const id = contactList.length + 1;
      const newFinalContact = { ...newContact, isFavorite: false, id };
      setContactList([...contactList, newFinalContact]);
      return { status: 'success', msg: 'Contact was added successfully!' };
    }
  }

  const handleUpdateContact = (updatedContact) => {
    console.log(updatedContact);
    if (updatedContact.name == '') {
      return { status: 'failure', msg: 'Please Enter a valid Name' };
    } else if (updatedContact.phone == '') {
      return { status: 'failure', msg: 'Please Enter a valid Phone Number' };
    }

    setContactList(existingItems => {
      return existingItems.map((item) => {
        if (item.id == updatedContact.id) {
          return {
            ...item,
            name: updatedContact.name,
            phone: updatedContact.phone,
            email: updatedContact.email
          };
        }
        return item;
      })
    });
    setSelectedContact(undefined);
    setIsUpdating(false);
    return { status: 'success', msg: 'Contact was updated successfully!' };
    // }
  }

  const handleToggleFavorite = (contact) => {
    setContactList(existingItems => {
      return existingItems.map(item => {
        return item.id === contact.id ? { ...item, isFavorite: !item.isFavorite } : item
      })
    })
  }

  const handleDeleteContact = (contactId) => {
    setContactList(existingItems => {
      return existingItems.filter(obj => {
        return obj.id !== contactId;
      });
    });
  }

  const handleAddRandomContact = (newContact) => {
    const id = contactList.length + 1;
    const newFinalContact = { ...newContact, isFavorite: false, id };
    setContactList([...contactList, newFinalContact]);
  };

  const handleRemoveAllContacts = () => {
    setContactList([]);
  };

  const handleUpdateClick = (contact) => {
    setSelectedContact(contact);
    setIsUpdating(true);
  }

  const handleCancelUpdateContact = () => {
    setSelectedContact(undefined);
    setIsUpdating(false);
  }

  return (
    <div>
      <Header />
      <div className='container' style={{ minHeight: '85vh' }}>
        <div className="row py-3">
          <div className='col-4 offset-2 row'>
            <AddRandomContact handleAddRandomContact={handleAddRandomContact} />
          </div>
          <div className='col-4 row'>
            <RemoveAllContacts handleRemoveAll={handleRemoveAllContacts} />
          </div>
          <div className='row py-2'>
            <div className='col-8 offset-2 row'>
              <AddContact
                isUpdating={isUpdating}
                selectedContact={selectedContact}
                handleAddContact={handleAddContact}
                handleCancelUpdateContact={handleCancelUpdateContact}
                handleUpdateContact={handleUpdateContact}
              />
            </div>
          </div>
          <div className='row py-2'>
            <div className='col-8 offset-2 row'>
              <FavoriteContacts
                onClickFavorite={handleToggleFavorite}
                deleteContact={handleDeleteContact}
                handleUpdateClick={handleUpdateClick}
                contacts={contactList.filter((contact) => contact.isFavorite == true)}
              />
            </div>
          </div>
          <div className='row py-2'>
            <div className='col-8 offset-2 row'>
              <GeneralContacts
                onClickFavorite={handleToggleFavorite}
                deleteContact={handleDeleteContact}
                handleUpdateClick={handleUpdateClick}
                contacts={contactList.filter((contact) => contact.isFavorite == false)}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactMain  