const React = require('react');
const {PureComponent} = React;

class RenderTest extends PureComponent {
    state ={
        counter: 0,
    };
  
    onClick = () => {
        this.setState({

        })
    }

    render(){
        console.log("렌더링",this.state);
        return(
            <>
                <button onClick={this.onClick}>클릭</button>
            </>
        )
    }
}

module.exports = RenderTest;