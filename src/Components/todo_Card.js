import React, {useState} from "react";

const Todo_Card = (props) => {

  const [misc , upadteMiscState]= useState(false);
  const [done , UpdateDone]=useState(false);

  const hideMisc =()=>{
    upadteMiscState(!misc);
  }

  const showMisc =()=>{
    upadteMiscState(!misc);
  }


  {/*handle Done */}
  const handleDone=(e)=>{
      if(e.target.checked){
        UpdateDone(!done);
      }else{
        UpdateDone(false);
      }
    
  }

  return (<> {/*card*/}
   
      <div className="col-lg-6" key={props.i}>
         <div className="card p-3">
            
           {misc&& //togle on misc off
              <div className="d-flex flex-column gap-2 p-2 menu">

              <div className="d-flex justify-content-end close">
        
                <i className="fa-solid fa-xmark" aria-hidden="true"  onClick={hideMisc}/>
      
              </div>
               <span className="buttonHoverGreen" onClick={props.handleEdit}>Edit</span>
               <div className="divider"></div>
               <span className="buttonHoverRed" onClick={props.handleDelete}>Delete</span>
            </div>
           }

            <div className="c-header d-flex justify-content-between align-items-center py-2">

             {done?<s><h2>{props.Heading}</h2></s>:<h2>{props.Heading}</h2>}
              <i className="fa-solid fa-ellipsis" onClick={showMisc}></i>
            </div>

            {/*<p>{props.Description}</p> */}
            {done?<s><p>{props.Description}</p></s>:<p>{props.Description}</p>}

            <div className="c-footer d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2">
                
              {
                 props.Tags.map
                 (
                   (t , i)=><div key={i} className={`circle ${t}`} />
                 )
              }
                

                {/*tags*/}
                {/* <div className="work circle tags"></div>
                <div className="school circle tags"></div>
                <div className="entertainment circle tags"></div>
                <div className="family circle tags"></div> */}
                
              </div>
              <div className="form-check d-flex gap-2">
                <input className="form-check-input" value={done} onChange={handleDone} type="checkbox"  id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Done
                 </label>
           </div>
            </div>
             
         </div>

    
    </div></>);
};

export default Todo_Card;
