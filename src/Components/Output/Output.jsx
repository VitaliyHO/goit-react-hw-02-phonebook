// import React, { Component } from 'react';



export const Output = ({ arrayOfContacts }) => {
    return arrayOfContacts.map(({ id, name, number }) => {
                console.log('output: ', arrayOfContacts);
                return (<li key={id}>
                    {name}: {number}
                </li>)
            })
}


// class Output extends Component {

//     state = {
//     }

//     arrayOfContacts = this.props.arrayOfContacts



//     render() {
//         return (
//             <div>
//                 <ul>
//                     {this.arrayOfContacts.map(() => {
//                         return <li key={this.state.id}>
//                             {this.state.name}
//                         </li>
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }
// export default Output;
