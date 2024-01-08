import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './EditModal.scss'
import { validationValues } from '../Utils';

const EditModal = ({handleSave, closeModal, title, value, items}) => {

  const [editValue, setEditValue] = useState(value);
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    const value = e.target.value
    const isValid = validationValues(value, items);
    setErrorMessage(isValid)
    setEditValue(value)
  };

  return (
    <Modal open={open} onClose={closeModal} center classNames='p-0'>
      <div className="modal-content">
        <div className='modal-header px-3'>
          <h4 className='modal-title'>Edit {title} name</h4>
        </div>
        <div className='modal-body px-3'>
            <div className='form-group'>
              <label className='form-label'>
                Name <span className='text-danger'>*</span>
              </label>
              <input
                type='text'
                className={`form-control ${!!errorMessage ? 'border-danger ' : ''}`}
                placeholder='name'
                onChange={handleInputChange}
                value={editValue}
              />
            {errorMessage ? <div className='invalid-value'>{title} {errorMessage}</div> : <div className='mt-3'></div>}
            </div>
        </div>
        <div className='modal-footer px-3 my-3'>
            <button
              type='button'
              className='btn btn-success'
              onClick={() => handleSave(editValue)}
              disabled={!!errorMessage || !editValue}
            >
              <span className='ps-1'>Save</span>
            </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
