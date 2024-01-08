import { useState } from "react";
import ConsItems from "./ConsItems"
import { setConsItem, deleteConsItems } from "../../redux/ConsValues/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectConsValues } from "../../redux/ConsValues/selectors";
import {v4 as uuidv4} from 'uuid'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import { validationValues } from "../Utils";


const Cons = (props) => {

    const consValues = useSelector(selectConsValues)
    const [consValue, setConsValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    const consValuesInArray = Object.entries(consValues)
   
    const handleConsChange = (e) => {
          setConsValue(e.target.value);
          const error =  validationValues (e.target.value, consValuesInArray)
          setErrorMessage(error);
    }

    const handleClick = () => {
      const id = uuidv4();
      dispatch(setConsItem({consValue,id}))
      setConsValue('')
    };

  const handleDeleteConsItems = () => {
      dispatch(deleteConsItems())
  }

    return(
      <div className='cons'>
            <h2>Cons</h2>
            <div className="input-group custom-search " style={{paddingLeft:'10px',paddingRight:'10px'}}>
                <input type="text" 
                        className={`form-control custom-search-input ${!!errorMessage ? 'border-danger is-invalid' : ''}`}
                        placeholder="Enter"
                        value={consValue}
                        onChange={handleConsChange}/>
                <button 
                    className="btn btn-success custom-search-botton" 
                    type="submit"
                    onClick={() => handleClick()}
                    disabled={!!errorMessage || !consValue}

                    >
                        AddCons
                    </button>  
            </div>

            {errorMessage ? <div className='invalid-value'>{errorMessage}</div> : <div className='mt-3'></div>}
            <div className='d-flex justify-content-end pe-2'>
                <Button variant="contained" 
                        style={{ backgroundColor: '#02c39a', color: 'white' }} 
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDeleteConsItems()}
                        disabled={!consValues}
                        >
                    Delete All
                </Button>
            </div>
            
            <ul className='ps-0'>
                {consValues && Object.entries(consValues).map((item,index) => ( 
                    <ConsItems 
                      key={item[0]}
                      value = {item[1]}
                      id={item[0]}
                      consItems={consValuesInArray} 
                    />
                ))}
            </ul>
        </div>
    )
}

export default Cons