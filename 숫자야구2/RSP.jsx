const React = require('react');
const {Component} = React;

class RSP extends Component{
    state = {
        result:'',
        imgCoord:0,
        score: 0,
    }
    componentDidMount(){ // 비동기 요청을 많이한다
        setInterval(()=>{
            console.log("asd");
        },1000)
    }
    componentDidUpdate(){}
    componentWillUnmount(){}// 비동기요청 정리를 많이한다.
    render(){
        const {result, score, imgCoord} =this.state;
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