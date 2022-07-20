import React from 'react'
import { createRoot } from 'react-dom/client';


//CSS
import './index.css';

//Settign up objects

const firstbook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51TehdI7m3L._AC_SX184_.jpg',
  title: 'I love You to the moon and backsss',
  Author: 'Amelia'
  
}


function Booklist(){
  return (
    <section className='booklist'>
      <Book img={firstbook.img} title={firstbook.title} Author={firstbook.Author } />
      <Book  />
    
    </section>

  );
}


const Book = (props) => {
  console.log(props);
 
  return (
    <article className='book'>
       <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.Author}</h4>



      {/* <p>{ props.job}</p> */}
      {/* <p>{ props.name}</p> */}
      {/* <p>{props.number}</p> */}
      {/* If it is there in the pros it gets diplyed else not */}
    </article>
  );
  
};


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Booklist/>);
