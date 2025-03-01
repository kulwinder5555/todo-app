import React from "react";

const tags = () => {
  return( 
  
  <div className="col-lg-4">
        
    <div className="sticky-md-top d-flex  flex-column   align-items-center gap-6 py-3 tags">
        {/*work*/}
     <div className="d-flex size justify-content-center align-items-center tag">
      <div className="work circle label"></div>
      <h3>work</h3>
     </div>

       
      {/*school*/}
      <div className="d-flex size justify-content-center align-items-center tag">
      <div className="school circle label"></div>
      <h3>school</h3>
      </div>

      {/*entertainment*/}
      <div className="d-flex size justify-content-center align-items-center tag">
      <div className="entertainment circle label"></div>
      <h3>entertainment</h3>
      </div>


      {/*family*/}
      <div className="d-flex size justify-content-center  align-items-center tag">
      <div className="family circle label"></div>
      <h3>family</h3>
      </div>


    </div>
    
    </div>)
   
};

export default tags;
