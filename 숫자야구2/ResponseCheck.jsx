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
    renderAverage = () => {
        const { result } = this.state;
        result.length === 0 
        ? null 
        :  <div>평균시간: {result.reduce((a,c) => a + c / result.length)} ms
        </div>
    }
    render() {
        const { state, message } = this.state;
        return(
            <>
                <div
                    id="screen"
                    className={state}
                    onClick={this.onClickScreen}
                >
                    {message}
                </div>
                {
                    this.renderAverage()
                }
               
            </>
        )
    }
}

module.exports = ResponseCheck;