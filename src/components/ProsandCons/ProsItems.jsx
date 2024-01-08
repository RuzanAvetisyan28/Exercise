import { useDispatch } from 'react-redux';
import './ProsItems.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { removeProsItem, renameProsName } from '../../redux/PropValues/actions';
import EditIcon from '@mui/icons-material/Edit';
import EditModal from '../Modal/EditModal';
import { useState } from 'react';

const ProsItems = (props) => {

  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const dispatch = useDispatch()

    const removeItem = (id) => {
        dispatch(removeProsItem(id))
    }

  const closeModal = () => {
      setIsOpenEditModal(false);
    };

  const handleSave = (value) => {
    dispatch(renameProsName(props.id,value))
    setIsOpenEditModal(false);
    };

    return <div className='d-flex justify-content-between align-item-center pros-item-style' >
              <li className='text-start pros-item' >
               {props.value}
              </li>
              <div>
                <DeleteIcon style={{ color: 'white' , fontSize: '20', marginRight:"5px" , marginTop:"4px",cursor: "pointer"}} 
                  onClick={() => removeItem(props.id)}/>
                <EditIcon style={{ color: 'white' , fontSize: '20', marginRight:"5px" , marginTop:"4px",cursor: "pointer"}} 
                  onClick={() => setIsOpenEditModal(true)}/>  
              </div>
              {isOpenEditModal && (
                    <EditModal 
                       title={"Pros"}
                       id={props.id}
                       value={props.value}
                       open={isOpenEditModal} 
                       closeModal={closeModal} 
                       handleSave={handleSave} 
                       items={props.prosItems}
                    />
                )}
          </div>
}

export default ProsItems