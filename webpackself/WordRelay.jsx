const React = require('react');
const {Component} = React;
class WordRelay extends Component{
    state = {
        test:"hello react",
    };
    render() {
        return(
            <div>{this.state.test}</div>
        )
    }
}


module.exports = WordRelay;