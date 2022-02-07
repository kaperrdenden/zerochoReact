const React = require('react');
const { useState } = require('react/cjs/react.development');
const {PureComponent, memo} = React;

// class Try extends PureComponent{

//     render(){
        
//         const {tryInfo} = this.props;
//         return(
//             <>
//             <li> 
//              {tryInfo.try} - {tryInfo.result} 
             
//                </li>
           
//        </>
//         );
//     }
// }

const Try = memo(({tryInfo}) => {
    const {result, setResult} = useState(tryInfo.result);

    const onClick = () => {
        setResult('1');
    };
    return(
        <>
        <li> 
            {tryInfo.try} 
            <div onClick={onClick}> {result} </div>
        -
         
           </li>
       
   </>
    )
});


module.exports = Try;