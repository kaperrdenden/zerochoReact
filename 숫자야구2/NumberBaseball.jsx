const React = require('react');
const {Component} = React;


function getNumbers() {

}
class NumberBaseball extends React.Component{
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    }
    onSubmitForm = () => {

    }
    onChangeInput = () => {

    }
    fruits = [
        {fruit:'사과', taste:'맛없다'}
    ]
    render(){
       return(
           <>
               <h1>{this.state.result}</h1>
               <form onSubmit={this.onSubmitForm}>
                   <input 
                        maxLength={4}
                        value={this.state.value}
                        onChange={this.onChangeInput}

                   />
               </form>
               <div>시도:{this.state.tries}</div>
               <ul>
                {this.fruits.map((v,i) => {
                    return(
                        <li key={i}>{v.fruit} - {v.taste}</li>
                    )
                })}  
               </ul>
           </>
       )
        
    }
}

module.exports = NumberBaseball;