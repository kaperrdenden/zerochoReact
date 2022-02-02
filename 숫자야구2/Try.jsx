const React = require('react');
const {Component} = React;


class Try extends Component{


    render(){

        return(
            <>
                {console.log('here', this.props.tryInfo)}
                <li>
                    {this.props.tryInfo.try} - {this.props.tryInfo.result}   
                </li>
            </>
        )
    }
};

module.exports = Try;