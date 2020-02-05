
import { userAdd, userDelete, userUpdate } from '../Actions/UserAction';
import axios from 'axios';
const initialState = {
    users: []
};

const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case userAdd:

            // let user = {};

            // axios.get('https://localhost:44390/api/users').then(resp => {
            //     console.log(resp.data);

            //     resp.data.forEach(item => initialState.users.push(
            //         user = {
            //             id: item.id,
            //             name: item.name,
            //             lastname: 'cındık'
            //         }
            //     ))

            //     return (
            //         initialState.users
            //     );
            // });

            let user = {};

            axios.post('https://localhost:44390/api/users', {
                name: action.user.name,
                lastname: action.user.lastname
            })
                .then(resp => {
                    console.log(resp.data);
                });

            return (
                initialState.users
            );
            
        case userDelete:
            // code block
            break;
        case userUpdate:
            // code block
            break;
        default:
        // code block
    }

    return state;


}

export default UserReducer;