const React = require('react');
const { useState, useRef } = React;



const WordRelay =  ()=> {
    const [word,setWord] = useState('동재');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        // console.log(this.state.word[this.state.word.length-1]);
        e.preventDefault();
        if (word[word.length-1] === value[0]){
            setResult('딩동댕');
            setWord(value);
            setValue('');
         
            inputRef.current.focus();
        } else{
            setResult('떙');
            setValue('');

            inputRef.current.focus();
        }
    }
    const onChangeInput = (e) =>{
        setValue(e.target.value)
    };
   
        return(
            <>
                <div>{word}</div>
                <form onSubmit={onSubmitForm}>

                    <input
                     ref={inputRef}
                      
                     value={value}
                     onChange={onChangeInput}
                      />
                      <label htmlFor="wordInput">글자를 입력하세요!</label>
                      <button id='wordInput' className='wordInput'> 입력</button>
                      <div>{result}</div>
                </form>
            </>
        )
    
}

module.exports = WordRelay;