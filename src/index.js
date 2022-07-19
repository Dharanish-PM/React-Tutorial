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

const Book = () => {
  return (
    <article className='book'>
      <IMage />
      <Title />
      <Author />
    </article>
  );
  
};

const IMage = () => {
  return (
    <img src="https://images-eu.ssl-images-amazon.com/images/I/51TehdI7m3L._AC_SX184_.jpg" alt="" srcset="" />

  );
};

const Title=()=> <h1>I love You</h1>
const Author=()=> <h4>Amilia</h4>

ReactDOM.render(<Booklist/>,document.getElementById('root'));