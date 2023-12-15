import { useEffect, useState } from 'react';
import Cons from './Cons'
import Pros from './Pros'
import './ProsAndCons.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setProsItems1 } from '../../redux/PropValues/actions';
import { selectProsValues } from '../../redux/PropValues/selectors';
import { selectConsValues } from '../../redux/ConsValues/selectors';
import { setConsItems } from '../../redux/ConsValues/actions';

const ProsAndCons = () => {

    const dispatch = useDispatch()
    const prosValues = useSelector(selectProsValues)
    const consValues = useSelector(selectConsValues)
 
    window.addEventListener('beforeunload', () => {
      window.localStorage.setItem('prosValues', JSON.stringify(prosValues));
      window.localStorage.setItem('consValues', JSON.stringify(consValues));

    })
    
   useEffect(() => {

        const valuesPros = localStorage.getItem('prosValues')
        const consValue = localStorage.getItem('consValues')
        valuesPros && dispatch(setProsItems1(JSON.parse(valuesPros)))
        consValue && dispatch(setConsItems(JSON.parse(consValue)))
  }, [dispatch]);

    return (
        <div className='prosandcons'>
            <Pros/>
            <Cons/>
        </div>
    )
} 

export default ProsAndCons



// const prosValues = localStorage.getItem('prosValues')
// const consValues = localStorage.getItem('consValues')
// prosValues && dispatch(setProsItems1(JSON.parse(prosValues)))
// consValues && dispatch(setProsItems1(JSON.parse(consValues)))