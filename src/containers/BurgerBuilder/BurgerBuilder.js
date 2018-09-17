import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
    state = {
        ingredients: {
            salad: 3,
            bacon: 1,
            cheese: 2,
            meat: 1
        }        
    }

 render() {
     return (
        <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <div>Build Controls</div>
        </Aux>
     );
 }
}

export default BurgerBuilder;