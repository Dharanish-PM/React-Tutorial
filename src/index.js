import React from 'react'
import ReactDOM from 'react-dom'

//CSS
import './index.css';

// stateless functional component
// always return JSX


// JSX Rules
// return single element
// div/section/article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting


//Nested coponents,reat dev tools==> person and message
function Booklist(){
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>

  );
}

const Author='Amelia'
const Book = () => {
  const title='I love You to the moon and backsss'
  return (
    <article className='book'>
       <img src="https://images-eu.ssl-images-amazon.com/images/I/51TehdI7m3L._AC_SX184_.jpg" alt="" srcset="" />
      <h1>{title}</h1>

      
      <h4>{Author.toUpperCase()}</h4>
      {/* <h3>{ let x=5}</h3>  ==> not possible only returning stuffs can be in here not statements*/}
      <h3>{ 6+6}</h3>
    </article>
  );
  
};



ReactDOM.render(<Booklist/>,document.getElementById('root'));