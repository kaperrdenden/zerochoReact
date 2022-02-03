const React = require('react');
const {Component} = React;




class Try extends React.Component{
   
    render() {
       return(
           <>
                <li> 
                 {this.props.tryInfo.try} - {this.props.tryInfo.result} 
                 
                   </li>
               
           </>
       );
        
    }
}

module.exports = Try;