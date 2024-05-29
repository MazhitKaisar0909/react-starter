import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchProductAsync from './store/Slices/fetchProductSliceAsync'

function App() {
  const product = useSelector((state)=>state.products.products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductAsync());
  },[]);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <ul className='grid gap-4 grid-cols-3'>
        {product.map(item => (
          <li key={item.id} >
            {item.title}
            <img src={item.image} className='w-[200px]'/>
            <p>
              {item.price}
            </p>
          </li>
          
        ))}
      </ul>
    </>
  )
}

export default App
