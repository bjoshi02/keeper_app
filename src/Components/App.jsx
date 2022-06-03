import React from 'react';
import Heading from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from "./CreateArea";


function App(){   
    const [items,setItems] = React.useState([]); 

    function handleClick(item){
        setItems((prevItems) => {
            return [...prevItems,item];
        });
    }

    function handleDelete(id){
        setItems((prevItems) => {
            return (prevItems.filter((item,index) => {
                return (index!==id);
            }));
        });
    }

    return (
        <div> 
            <Heading />
            <CreateArea click={handleClick} />   
            {items.map((item,index) => {
                return (<Note key={index} id={index} title={item.title} ondelete={handleDelete} content={item.content} />);
            })}         
            <Footer />
        </div> 
    );
}

export default App;