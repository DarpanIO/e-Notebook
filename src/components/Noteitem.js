import React from 'react'

export const Noteitem = (props) => {
    const {note} = props;
  return (
    <div className='col-md-3 my-2'>
        <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
  </div>
</div>
    </div>
  )
}
export default Noteitem;
