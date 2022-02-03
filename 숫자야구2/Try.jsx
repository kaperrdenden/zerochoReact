const React = require('react');
const {Component} = React;

class Try extends Component{


    render(){

        return(
           
               
                <li>
                     {console.log('hsdasdasdasdsere', this.props.tryInfo)}
                    {this.props.tryInfo.try} - {this.props.tryInfo.result}   
                </li>
            
        )
    }
};

module.exports = Try;