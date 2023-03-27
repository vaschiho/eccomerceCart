import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { artimathicAction } from '../store/redux_pratice'
const ReducerRevision = () => {
const dispatch = useDispatch()
const count = useSelector((state) => state.counter.count)

const addHandler =()=>{
    dispatch(artimathicAction.increament())
}
const reduceHandler =()=>{
    dispatch(artimathicAction.decreament())
}
const paylaodHandler =()=>{
    dispatch(artimathicAction.payload(20))
}

  return (
    <div className='flex justify-center flex-col'>
        <h1>{count}</h1>
        <button onClick={addHandler}>+</button>
        <button onClick={reduceHandler}>-</button>
        <button onClick={paylaodHandler}>20</button>
    </div>
  )
}

export default ReducerRevision