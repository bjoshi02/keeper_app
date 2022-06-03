import React from "react";

function CreateArea(props) {
    
    const [inputText,setItem] = React.useState({title: "", content: ""});
    function handleChange(event){
        const {name,value} = event.target;
        setItem((prevValue) =>{
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        props.click(inputText);            
        setItem({ title: "", content: "" });        
    }
  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} placeholder="Title" value={inputText.title}/>
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={inputText.content}/>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
