const React = require('react');
const {Component} = React;

class ResponseCheck extends Component {
    state = {
        state: 'waiting',
        message: ' 클릭해서 시작하세요 ',
        result: [],
    }
    onClickScreen = () => {

    }
    render() {
        return(
            <>
                <div
                    id="screen"
                    className={this.state.state}
                    onClick={this.onClickScreen}
                >
                    {this.state.message}
                </div>
                {

                this.state.result.length === 0 
                ? null 
                :  <div>평균시간: {this.state.result.reduce((a,c) => a + c / this.state.result.length)} ms
                </div>
                }
               
            </>
        )
    }
}

module.exports = ResponseCheck;