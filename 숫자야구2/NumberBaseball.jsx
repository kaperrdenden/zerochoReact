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
                {['사과','바나나','복숭아'].map((v) => {
                    return(
                        <li>{v}</li>
                    )
                })}  
               </ul>
           </>
       )
        
    }
}

module.exports = NumberBaseball;