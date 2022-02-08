const React = require('react');
const {Component} = React;

class RSP extends Component{
    render(){
        return(
            <>
                <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0 ` }}></div>
                <div>
                    <button id='rock' className='btn' onClick={() => onClickBtn('바위')}>바위</button>
                    <button id='scissor' className='btn' onClick={() => onClickBtn('가위')}>가위</button>
                    <button id='paper' className='btn' onClick={() => onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}

module.exports = RSP;