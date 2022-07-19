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


//Nested coponents,reat tools
function Greeting(){
  return (
    <React.Fragment>
      <div>
        <Person />
        <Message />
        
        <h2>helllo</h2>
        <img src="" alt="" />
      </div>

    </React.Fragment>

  );
}

const Person = () => {
  return (<h2>First message</h2>)
}
const Message = ()=> <h1>Secind Message</h1>

ReactDOM.render(<Greeting/>,document.getElementById('root'));