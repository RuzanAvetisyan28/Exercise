import { useDispatch } from 'react-redux';
import './ConsItems.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteConsItem } from '../../redux/ConsValues/actions';
import EditModal from '../Modal/EditModal';
import { useState } from 'react';

const ConsItems = (props) => {

    const dispatch = useDispatch()

    const deleteItem = (id) => {
        dispatch(deleteConsItem(id))
    }

    const editItem = (id, consValue) => {
    }

    return <div className='d-flex justify-content-between align-item-center cons-item-style'>
                <li className='text-start pros-item'>
                    {props.value}
                </li>
                <div>
                   <DeleteIcon 
                      style={{ color: 'white' , fontSize: '20',  marginRight:"5px", marginTop:"4px",cursor: "pointer" }} 
                      onClick={() => deleteItem(props.id)}
                      />
                   <EditIcon style={{ color: 'white' , fontSize: '20', marginRight:"5px" , marginTop:"4px",cursor: "pointer"}} 
                    onClick={() => editItem()}/>  
                </div>
                {
                  isOpenEditModal && <EditModal/>
                }
            </div>
}
export default ConsItems