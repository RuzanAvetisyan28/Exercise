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
import ReactPaginate from 'react-paginate';

const Pros = (props) => {
    const prosValues = useSelector(selectProsValues)
    const [prosValue, setProsValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [currentPage, setCurrentPage] = useState(0); // Current page state
    const dispatch = useDispatch()

    const prosValuesInArray = Object.entries(prosValues)
    const itemsPerPage = 10; // Number of items per page
    const pageCount = Math.ceil(prosValuesInArray.length / itemsPerPage);

    // Calculate the current items to display based on currentPage
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProsItems = prosValuesInArray.slice(indexOfFirstItem, indexOfLastItem);

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

    // Function to handle page change
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

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
                {prosValues && currentProsItems.map((item,index) => ( 
                    <ProsItems 
                      key={item[0]}
                      value = {item[1]}
                      id={item[0]}
                      prosItems={prosValuesInArray}
                    />
                ))}
                <ReactPaginate
                  pageCount={pageCount}
                  pageRangeDisplayed={5} // Number of page numbers to display
                  // marginPagesDisplayed={2} // Number of pages to display for the margins
                  onPageChange={handlePageChange}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                />
            </ul>
        </div>
    )
}

export default Pros