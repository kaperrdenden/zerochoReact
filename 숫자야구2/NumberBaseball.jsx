const React = require('react');
const {Component, useState} = React;
// import Try from './Try';
const Try = require('./Try.jsx');

function getNumbers() {
//     깃헙에서 수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i+=1){
        const chosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        array.push(chosen);
    }
    return array;
}
const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);
    const onSubmitForm = (e) => {
        e.preventDefault();  
        console.log(this.state.value.length);
        if(this.state.value.length < 4){
            alert("4자리 수 입력");
            this.setState({
                value:'',

            })
            return;
        }
        if(this.state.value === this.state.answer.join('')){
                setResult('홈런');
                setTries((prevTries) => {
                  return  [...prevState.tries, {try: prevState.value, result:'홈런!'}]
                })
               
                alert('게임을 다시 시작합니다');
                this.setState({
                    value:'',
                    answer:getNumbers(),
                    tries:[],

                });
        }
        else{
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9){
                this.setState({
                    result:`10번 넘게 틀려서 실패 답은 ${answer.join('')} `, 
                });
                alert('게임을 다시 시작합니다');
                this.setState({
                    value:'',
                    answer:getNumbers(),
                    tries:[],

                });
            }
            else {
                for( let i = 0; i < 4; i += 1){
                    if(answerArray[i] === this.state.answer[i]){ 
                        strike += 1;
                    } else if( this.state.answer.includes(answerArray[i])){
                        ball += 1;
                    }
                }
            this.setState((prevState) => {
                return{
                    tries:[...tprevState.tries, {try: prevState.value, result: `${strike} 스트라이크 ${ball}볼입니다`}],
                    value:'',
                }
              
            });

            
        }
        }
        console.log(this.state.tries);
    } 
    
    const onChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        });

    }
 
    return(
        <>
        <h1>{result}s</h1>
          <form onSubmit={onSubmitForm}>
              <input 
                   maxLength={4}
                   value={value}
                   onChange={onChangeInput}
                   value={value}
              />
          </form>
          <div>시도:{tries.length}</div>
          <ul>
              {tries.map((v, i) => {
                  console.log(v)
                  return(                   
                      <Try  key={i} tryInfo={v} index={i} />
                      )        
              })}
          </ul>
       
      </>
    )
}

class NumberBaseball extends React.Component{
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    }
    onSubmitForm = (e) => {
        e.preventDefault();  
        console.log(this.state.value.length);
        if(this.state.value.length < 4){
            alert("4자리 수 입력");
            this.setState({
                value:'',

            })
            return;
        }
        if(this.state.value === this.state.answer.join('')){
                this.setState((prevState) => { 
                    return  {
                        result:'홈런',
                        tries: [...prevState.tries, {try: prevState.value, result:'홈런!'}],
    
                    }
                });
                alert('게임을 다시 시작합니다');
                this.setState({
                    value:'',
                    answer:getNumbers(),
                    tries:[],

                });
        }
        else{
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9){
                this.setState({
                    result:`10번 넘게 틀려서 실패 답은 ${answer.join('')} `, 
                });
                alert('게임을 다시 시작합니다');
                this.setState({
                    value:'',
                    answer:getNumbers(),
                    tries:[],

                });
            }
            else {
                for( let i = 0; i < 4; i += 1){
                    if(answerArray[i] === this.state.answer[i]){ 
                        strike += 1;
                    } else if( this.state.answer.includes(answerArray[i])){
                        ball += 1;
                    }
                }
            this.setState((prevState) => {
                return{
                    tries:[...tprevState.tries, {try: prevState.value, result: `${strike} 스트라이크 ${ball}볼입니다`}],
                    value:'',
                }
              
            });

            
        }
        }

        console.log(this.state.tries);


    } 
    
    onChangeInput = (e) => {
        this.setState({
            value: e.target.value,
        });

    }
 
    render() {
        const {result, value, tries} = this.state;
       return(
           <>
             <h1>{result}s</h1>
               <form onSubmit={this.onSubmitForm}>
                   <input 
                        maxLength={4}
                        value={value}
                        onChange={this.onChangeInput}
                        value={value}

                   />
               </form>
               <div>시도:{tries.length}</div>
               <ul>
                   {tries.map((v, i) => {
                       console.log(v)
                       return(
                        
                           <Try  key={i} tryInfo={v} index={i} />
                           )
                       
                       
                   })}
               </ul>
            
           </>
       );
        
    }
}

module.exports = NumberBaseball;
