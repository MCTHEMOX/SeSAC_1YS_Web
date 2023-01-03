// function MainHeader() {
//     return (
//         <h1>Hello, Conponent world</h1>
//     )
// }
// //외부에서 불러서 사용가능하게함
// export default MainHeader;

import React, {Component} from 'react';

class MainHeader extends Component {
    render() {
        return (
            <h1>Hello,Class Conponent world</h1>
        );
    }
}


export default MainHeader;