import React from 'react'
import ReactDOM from 'react-dom'

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
    <section>
      this is a booklist
    </section>

  );
}

ReactDOM.render(<Greeting/>,document.getElementById('root'));