"use strict";

//BOOK ACTIONS

// POST BOOK

export const postBook=(book) =>{
    return {type: "POST_BOOK", payload: book}
};

//DELETE BOOK


export const deleteBook=(id)=>{
    return {type: "DELETE_BOOK", payload: id}

};

//UPDATE BOOK

export const updateBook=(book)=>{
    return {type: "UPDATE_BOOK", payload: book}

};