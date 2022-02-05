const React = require('react');
const {Component} = React;


const Try = ({tryInfo}) => {
    return(
        <>
        <li> 
         {tryInfo.try} - {tryInfo.result} 
         
           </li>
       
   </>
    )
}


module.exports = Try;