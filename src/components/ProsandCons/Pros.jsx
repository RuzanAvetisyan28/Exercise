import { useState } from 'react';
import './ProsAndCons.scss'
import ProsItems from './ProsItems'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProsItems, setProsItem } from '../../redux/PropValues/actions';
import { selectProsValues } from '../../redux/PropValues/selectors';
import {v4 as uuidv4} from 'uuid'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { validationValues } from '../Utils';

const Pros = (props) => {
    const prosValues = useSelector(selectProsValues)
    const [prosValue, setProsValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    const prosValuesInArray = Object.entries(prosValues)

    const handleProsChange = (e) => {
        setProsValue(e.target.value);
       const error =  validationValues(e.target.value, prosValuesInArray)

       setErrorMessage(error);
    }
    const handleClick = () => {
        const id = uuidv4();

        dispatch(setProsItem({prosValue,id}))
       setProsValue('')
    };

    const handleDeleteProsItems = () => {
        dispatch(deleteProsItems())
    }

    return(
        <div className='pros me-1'>
            <h2>Pros</h2>
            <div className="input-group custom-search " style={{paddingLeft:'10px',paddingRight:'10px'}}>
                <input type="text" 
                        className={`form-control custom-search-input ${!!errorMessage ? 'border-danger is-invalid' : ''}`}
                        placeholder="Enter"
                        value={prosValue}
                        onChange={handleProsChange}/>
                <button 
                    className="btn btn-yellow custom-search-botton" 
                    type="submit"
                    onClick={() => handleClick()}
                    disabled={!!errorMessage || !prosValue}

                    >
                        AddPros
                    </button>  
            </div>

            {errorMessage ? <div className='invalid-value'>{errorMessage}</div> : <div className='mt-3'></div>}
            <div className='d-flex justify-content-end pe-2'>
                <Button variant="contained" 
                        style={{ backgroundColor: '#dacf3c', color: 'white' }} 
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDeleteProsItems()}
                        disabled={!prosValues}
                        >
                    Delete All
                </Button>
            </div>
            
            <ul className='ps-0'>
                {prosValues && Object.entries(prosValues).map((item,index) => ( 
                    <ProsItems 
                      key={item[0]}
                      value = {item[1]}
                      id={item[0]}
                      prosItems={prosValuesInArray}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Pros