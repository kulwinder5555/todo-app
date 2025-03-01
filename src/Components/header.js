import React from 'react'


const header = (props) => {
  return (
    <div className="container-md d-flex  justify-content-between p-4" id="test">
    <h1>todo</h1>
    <i className="fa fa-plus" aria-hidden="true" onClick={props.show_card} />
  </div>
  )
}

export default header;