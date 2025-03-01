import React from "react";
import { useState,useEffect } from "react";


const Form = (props) => {

 
  const [formState ,  updateFormState] = useState({
    heading:"",
    description:"",
    Tags:[]
  })

 const[isEmpty , updateEmpty] =useState(false);

 useEffect(() => {
  if (props.isEditClicked && props.oldCardValues) {
    updateFormState({
      heading: props.oldCardValues.heading,
      description: props.oldCardValues.description,
      Tags: props.oldCardValues.Tags,
    });
  }
 }, [props.oldCardValues, props.isEditClicked]);


  const handleChange=(e)=>{
      
    const { name, value ,checked } = e.target;
  
    if (name === "Tags") {
      // Update Tags array
      updateFormState((prevState) => ({
        ...prevState,
        Tags: checked
          ? [...prevState.Tags, value] // Add the tag
          : prevState.Tags.filter((tag) => tag !== value), // Remove the tag
      }));
    } else {
      // Update other fields (heading, description)
      updateFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
   
      
  }
  
  const handleSumbit=(e)=>{
    e.preventDefault();
    if(formState.heading!=="" && formState.description!==""){
      props.sendFormData(formState);
    }else if(formState.heading ==="" || formState.description ===""){
       updateEmpty(true);
    }
  }

  return (

   <div className="row p-4 d-flex align-items-center justify-content-center wapper">
    <form onSubmit={handleSumbit} className="gap-4 d-flex flex-column p-4">
     
    <div className="d-flex justify-content-end">
      
      <i className="fa-solid fa-xmark" aria-hidden="true"  onClick={props.remove}/>
    
    </div>
   
    {/*Text inputs*/}
    <input className="form-control" 
    name="heading" value ={formState.heading} 
    type="text" onChange={handleChange}
    placeholder="your heading…"
    />
    {isEmpty &&<p className="text-danger" style={{margin:"-2% 0"}}>Required</p>}


    <textarea className="form-control" 
    value ={formState.description}  name="description" 
    type="text" onChange={handleChange}
    rows="5" placeholder="Your description..."/>
    {isEmpty && <p  className="text-danger" style={{margin:"-2% 0"}}>Required</p>}
    

    {/*Tags*/}
    <div className=" form-group d-flex gap-3">

       {/*work*/}
    <div className="form-group d-flex gap-1" id="tags">

    <input type="checkbox" value="work" onChange={handleChange} name="Tags"  checked={formState.Tags.includes("work")} className="form-check-input"/>
    <label className="form-check-label" checked={formState.Tags.includes("work")}>Work</label>    

    </div>

    {/*School*/}
    <div className="form-group d-flex gap-1" id="tags">

    <input type="checkbox" value={"school"} onChange={handleChange} name="Tags" checked={formState.Tags.includes("school")} className="form-check-input"/>
    <label className="form-check-label">School</label>    

    </div>

    {/*Entertainment*/}
    <div className="form-group d-flex gap-1" id="tags">

    <input type="checkbox" value ="entertainment" onChange={handleChange} name="Tags" checked={formState.Tags.includes("entertainment")}  className="form-check-input"/>
    <label className="form-check-label">Entertainment</label>    

    </div>

    {/*Family*/}
    <div className="form-group d-flex gap-1" id="tags">

    <input type="checkbox" value="family" onChange={handleChange} name="Tags" checked={formState.Tags.includes("family")}  className="form-check-input"/>
    <label className="form-check-label">Family</label>    

    </div>

    </div>

    <button type="submit" className="btn bg-warning  my-2">Sumbit</button>
    </form>
  </div>
  ) 
  
}

export default Form;
