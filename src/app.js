"use strict";
import {applyMiddleware, createStore} from 'redux';

import reducers from './reducers/index'
import {addToCart} from './actions/cartActions';
import {updateBook, deleteBook, postBook} from './actions/booksActions';
import logger from 'redux-logger';


//arr:[...state.arr, action.newItem]

// Create Store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// store.subscribe(() =>{
//     console.log('Stores state ', store.getState());
// });



//Create dispatch and actions
store.dispatch(postBook(
    [{
        id: 1,
        title: 'what up title',
        description: " more infor about it yo",
        price: 33.420
    },
        {
            id: 2,
            title: 'what up title',
            description: " more infor about it yo",
            price: 33.69
        },
    ]

));


store.dispatch(deleteBook({id:1}));

store.dispatch(updateBook(
    {
        id: 2,
        title: 'DA new fuqqqqing title',
    }
));

// store.dispatch({type: "POST_BOOK", payload: [{
//     id: 1,
//     title: 'what up title',
//     description: " more infor about it yo",
//     price: 33.420
// },
//     {
//         id: 2,
//         title: 'what up title',
//         description: " more infor about it yo",
//         price: 33.69
//     },
//
//
// ]});


// store.dispatch({type: "DELETE_BOOK", payload: {
//     id: 3,
//
// }
//
//
// });


// store.dispatch({type: "UPDATE_BOOK", payload: {
//     id: 2,
//     title: 'new title',
//
//
// }
//
//
// });
// store.dispatch({type: "INCREMENT", payload: 1});
// store.dispatch({type: "INCREMENT", payload: 1});
// store.dispatch({type: "INCREMENT", payload: 1});
// store.dispatch({type: "DECREMENT", payload: 8});

// CART ACTIONS

//Add to cart

store.dispatch(addToCart([{id: 1}]));
