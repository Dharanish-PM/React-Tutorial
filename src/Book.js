import React from 'react'

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

export default Book