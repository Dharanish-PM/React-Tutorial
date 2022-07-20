import React from 'react'
import { createRoot } from 'react-dom/client';


//CSS
import './index.css';


const Books = [
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/51TehdI7m3L._AC_SX184_.jpg',
    title: 'I love You to the moon and backsss',
    Author: 'Amelia'
  },
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/51TehdI7m3L._AC_SX184_.jpg',
    title: 'I love You to the moon and backsss',
    Author: 'Amelia'
  },

];


/*React wont render array of obejects*/ 
const names = ['a', 'dfb0', 'dsv'];

const newNames = names.map((name) => {
  return <h1>{ name}</h1>
})

function Booklist(){
  return (
    <section className='booklist'>
      {/* { Books}==>NOt possible */} 
      {names}
      {newNames}
      
      
    
    </section>
  );
}


const Book = (props) => {

  const { img, title, Author } = props;
  console.log(props)
  return (
    <article className='book'>
       <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{Author}</h4>
    </article>
  );
  
};


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Booklist/>);
