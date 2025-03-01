import './App.css';
import Header from './Components/header';
import Form from './Components/form';
import { useState ,useEffect } from "react";
import Tags from './Components/tags';
import Todo_Card from './Components/todo_Card'


function App() 
{

  const [card , addCard] = useState([]); // for card
  const [form , showform] = useState(false); // for showing forms
  const [tags , showTags] = useState(true); // for showing tags
  const [isCardIsEditing , cardIsEditing] = useState(false); // flag for to show form is editing

  
  const[cardToEdit , updateEditValues] = useState(
  {
    heading:"",
    description:"",
    Tags:[]
  });// for card to edit
 
  //get item from localStorage
  useEffect(()=>{
    const _card  = JSON.parse(localStorage.getItem("addCard")) || [];
    addCard(_card);
  },[])
  

  // set item in LoacalStorage
  useEffect(()=>{
    {localStorage.setItem("addCard" , JSON.stringify(card))};
  },[card])

  {/* On-Off forms */}
  const toggleForm=()=>{
    
    showform(!form);
    showTags(!tags);
  }
  
   {/*Set Card */}
  function Set_Card(){
    cardIsEditing(false);
    toggleForm();
  }
  


  {/*remoave form*/}
  const Remove_form =(e)=>{
    cardIsEditing(false);
    e.preventDefault();
    toggleForm();
  }
  
 {/*getData from form */}
  const getFormData=(data)=>{

    if (data.heading !== "" && data.description !== "") {
      if (isCardIsEditing) {
        addCard((prev) => {
          const updatedCards = [...prev];
          const index = prev.findIndex((c) => c === cardToEdit);
          updatedCards[index] = data;
          return updatedCards;
        });
      } else {
        addCard((prev) => [...prev, data]);
        localStorage.setItem('Card', card);
      }
      toggleForm();
    }
     
  }
  
  {/*delete card*/}
  const deleteCard=(index)=>{
    const newCardState = card.filter((_, i) => i !== index);// curent state index
    addCard(newCardState);
  }
  
  {/*edit card*/}
  const editCard=(index)=>{
   
    updateEditValues(card[index]);
    cardIsEditing(!isCardIsEditing);
    
   toggleForm();
 
  }
  
  
  return (
    <>
    
    <Header show_card={Set_Card}/>   
    
    {/*form*/}
    {form && 
      <Form  remove={Remove_form} sendFormData={getFormData} oldCardValues={cardToEdit} isEditClicked={isCardIsEditing}/>
    } 
    
   
   

    <div className="row p-4 contain">

      
       {/*tags*/}

      { tags &&
       <Tags/>
      }


      <div className="col-lg-8 cards" >
        
      <div className="row g-2">
       {/*card*/}
       {
        
      
       card.map
       (
        (cards ,i)=><Todo_Card Heading={cards.heading} 
         Description={cards.description} 
         Tags={cards.Tags} key={i}
         handleDelete={()=>deleteCard(i)}
         handleEdit ={()=>editCard(i)}
         />
       
        
       )

       }
       

      </div>

        

      </div>

    </div>
    </>
  );
}

export default App;
