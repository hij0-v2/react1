import React from 'react'
import './book.css'
import Discount from './Discount.jsx'

export default function Book() {
    return (
        <div className='book'>
        <Image/>
        <Author/>
        <Title/>
        <Price/>
        <Discount/>
        </div>
    )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/515-EdWvVaL._SX331_BO1,204,203,200_.jpg" alt="dragon ball manga vol 1"></img>
const Author = () => <h2>Akira Toriyama</h2>
const Title = () => <h3>Dragon Ball, Vol. 1</h3>
const Price = () => <p>$8.99</p>