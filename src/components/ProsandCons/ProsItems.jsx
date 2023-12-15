import { useDispatch } from 'react-redux';
import './ProsItems.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { removeProsItem } from '../../redux/PropValues/actions';
import EditIcon from '@mui/icons-material/Edit';

const ProsItems = (props) => {
    const dispatch = useDispatch()

    const removeItem = (id) => {
        dispatch(removeProsItem(id))
    }

    return <div className='d-flex justify-content-between align-item-center pros-item-style' >
              <li className='text-start pros-item' >
               {props.value}
              </li>
              <div>
                <DeleteIcon style={{ color: 'white' , fontSize: '20', marginRight:"5px" , marginTop:"4px",cursor: "pointer"}} 
                  onClick={() => removeItem(props.id)}/>
                <EditIcon style={{ color: 'white' , fontSize: '20', marginRight:"5px" , marginTop:"4px",cursor: "pointer"}} 
                  onClick={() => removeItem(props.id)}/>  
                </div>
          </div>
}

export default ProsItems