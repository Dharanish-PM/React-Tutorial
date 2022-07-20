import React from 'react'
import { createRoot } from 'react-dom/client';


//CSS
import './index.css';


const Books = [
  {
    id:1,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/51TehdI7m3L._AC_SX184_.jpg',
    title: 'I love You to the moon and backsss',
    Author: 'Amelia'
  },
  {
    id:2,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/51TehdI7m3L._AC_SX184_.jpg',
    title: 'I love You to the moon and backsss',
    Author: 'Amelia'
  },

];



function Booklist(){
  return (
    <section className='booklist'>
      {Books.map((book) => {
   
        return (
          <Book key={book.id} {...book} />
        )
      })}
    
    </section>
  );
}


const Book = (props) => {
   //attributes and eventhandler
  //onClick,onMouseover

  const { img, title, Author } = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  }

  const complexExample = (author) => {
    console.log(author);
  }


 
  return (
    <article className='book' onMouseOver={() => {
      console.log(title);
    }}>
    
       <img src={img} alt="" />
      <h1 onClick={() => {
        console.log(title)
      }}>{title}</h1>
      <h4>{Author}</h4>
      <button type='button' onClick={clickHandler}>Referece example</button>
      {/* <button type='button' onClick={complexExample(Author)}>More complex</button>  this on page rendering itself before clocking this prints all the author to avoid this we invoke it in another fucntion belawow*/}
      { <button type='button' onClick={()=>complexExample(Author)}>More complex</button> }

    

    </article>
  );
  
};


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Booklist/>);
