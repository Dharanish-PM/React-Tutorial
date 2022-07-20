import React from 'react'
import { createRoot } from 'react-dom/client';


//CSS
import './index.css';


import { data } from './books'
import Book from './Book'



function Booklist(){
  return (
    <section className='booklist'>
      {data.map((book) => {
   
        return (
          <Book key={book.id} {...book} />
        )
      })}
    
    </section>
  );
}





const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Booklist/>);
