import React, { useEffect, useState } from 'react';


const EditModal = (props) => {


  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1>Modal13</h1>
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default EditModal;