import '../App.css';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
// import { Dialog } from '@headlessui/react';

function CardDialog(state) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
  
     
    <div className='content'>
    <div>
      <button
        type="button"
        className='button'
        onClick={openModal} >
        Open dialog
      </button>
    </div>
    <div className='container'>
   
    <Dialog className="wrapping-dialog" open={isOpen} onClose={() => closeModal()} >
        <Transition appear show={isOpen} as={Fragment}
                enter="duration-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"

                leave="duration-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
          <Dialog.Panel className="wrap-dialog">
            <button className='tbl-close' onClick={() => closeModal()}>X</button>
        
            <Dialog.Title>Portofolioku</Dialog.Title>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>

            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>
            
          </Dialog.Panel>
        </Transition>
      </Dialog>
  
    </div> 
   
  </div>
    
    
  )
}

export default CardDialog;
