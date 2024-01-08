import { useDispatch, useSelector } from 'react-redux';
import './ConsItems.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteConsItem, renameConsName } from '../../redux/ConsValues/actions';
import EditModal from '../Modal/EditModal';
import { useState } from 'react';

const ConsItems = (props) => {

    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const dispatch = useDispatch()

    const deleteItem = (id) => {
        dispatch(deleteConsItem(id))
    }

    const closeModal = () => {
        setIsOpenEditModal(false);
      };
    
    const handleSave = (value) => {
        dispatch(renameConsName(props.id,value))
        setIsOpenEditModal(false);
    };

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
                    onClick={() => setIsOpenEditModal(true)}/>  
                </div>
                {isOpenEditModal && (
                    <EditModal 
                       title={"Cons"}
                       id={props.id}
                       value={props.value}
                       open={isOpenEditModal} 
                       closeModal={closeModal} 
                       handleSave={handleSave} 
                       items={props.consItems}
                    />
                )} 
            </div>
}
export default ConsItems