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
      <Book img={firstbook.img} title={firstbook.title} Author={firstbook.Author}>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt in incidunt placeat quis quam necessitatibus expedita dolorum laudantium fuga?</p>

      </Book>
      

      <Book img={firstbook.img} title={firstbook.title} Author={firstbook.Author}  />
    
    </section>
  );
}


const Book = (props) => {/*const Book = ({img, title, Author })*/

  const { img, title, Author } = props;
  console.log(props)/*You get the pararagraph element also in props in name of children*/ 
  // const { img, title, Author,children } = props;
  
 
  return (
    <article className='book'>
       <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{Author}</h4>
      { props.children}

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
