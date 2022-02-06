const React = require('react');
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
    return(
        <>
        <li> 
         {tryInfo.try} - {tryInfo.result} 
         
           </li>
       
   </>
    )
});


module.exports = Try;