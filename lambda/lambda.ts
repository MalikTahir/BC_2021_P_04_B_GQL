import {getAuthor, getBook, getAllBooks, getUser, getOrder, addBook, addAuthor, 
    addUser, addOrder, updateBook, updateAuthor, updateUser, updateOrder,
     updateOrderStatus, deleteBook, deleteAuthor, deleteUser, deleteOrder} from "./functions"
 
import { Book, Author,User, Order} from "./Types" 


 type AppSyncEvent  ={
    info:{
        fieldName:string
    }
    arguments:{
        type:string,
        id:string,
        book:Book,
        author:Author
        user: User
        order:Order
        status:string
    }
}
exports.handler = async (event:AppSyncEvent)=>{
    const tName = process.env.TABLE_NAME;
    switch(event.info.fieldName){
        case "getBook" : { return await getBook(tName,event.arguments.id)}
        case "getAllBooks" : { return await getAllBooks(tName)}
        case "getAuthor" : { return await getAuthor(tName,event.arguments.id)}
        case "getUser" : { return await getUser(tName,event.arguments.id)}
        case "getOrder" : { return await getOrder(tName,event.arguments.id)}
        case "addBook" : { return await addBook(tName,event.arguments.book)}
        case "addAuthor" : { return await addAuthor(tName,event.arguments.author)}
        case "addUser" : { return await addUser(tName,event.arguments.user)}
        case "addOrder" : { return await addOrder(tName,event.arguments.order)}
        case "updateBook" : { return await updateBook(tName,event.arguments.book)}
        case "updateAuthor" : { return await updateAuthor(tName,event.arguments.author)}
        case "updateUser" : { return await updateUser(tName,event.arguments.user)}
        case "updateOrder" : { return await updateOrder(tName,event.arguments.order)}
        case "updateOrderStatus" : { return await updateOrderStatus(tName,event.arguments.id,event.arguments.status)}
        case "deleteBook" : { return await deleteBook(tName,event.arguments.id)}
        case "deleteAuthor" : { return await deleteAuthor(tName,event.arguments.id)}
        case "deleteUser" : { return await deleteUser(tName,event.arguments.id)}
        case "deleteOrder" : { return await deleteOrder(tName,event.arguments.id)}
    }
    
}

