import React from 'react'
import "./Card.css"
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Component } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';

const CardProduct = () => {
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)

    // console.log(e)
  }

//   const h11 = document.querySelectorAll('.namaproduk')
  function kirim(data){
   
    // const dat = data
    // console.log(dat)
    const state = {
    
        formBlogPost: {
            // ini adalah tempat menyimpan block kontent
            name: data.name,
            category: data.category,
            price: data.price,

        },isUpdate : false
    }
    // console.log(state.formBlogPost.name)
    openModal()
    
    // console.log(h11)
    // return (
    //     <>
    //     {h11.innerHTML = state.formBlogPost.name}
    //     </>
    // )

    
  }
  
    const data = [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ]
    
  return (
    <div>
        <div class="wrapping-card">
       {
        data.map(data => { 
            return <div className='card'>
                <h1 className='name-product'>{data.name}</h1>
                <span>{data.category}</span>
                <h6>{data.price}</h6>
                <button
                    type="button"
                    className='button'
                    onClick={() => kirim(data)}  >
                    Buy
                </button>
            </div>
        })
       }
       </div>
      {/* {
        kirim(() => {
            return <>{this.state.formBlogPost.name}</>
        })
      } */}
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
        
            <Dialog.Title >{}</Dialog.Title>
            <Dialog.Description>
              {}
            </Dialog.Description>

            <p>
              <br></br>
              Produk masuk dikeranjang
            </p>
            
          </Dialog.Panel>
        </Transition>
      </Dialog>
      <h4 className='namaproduk'></h4>
    </div>
  )
}

export default CardProduct
