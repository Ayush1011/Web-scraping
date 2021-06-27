import {ADD_CONTENT,AMAZON_FETCH,FIND_ITEM, FLIPKART_FETCH,PRODUCT_FETCH} from '../constants';
import DATA from '../data';
import axios from "axios";


// type:ADD_CONTENT,
//         data:DATA

export const addtoContent =(productName)=>{

  console.log(productName)
    return dispatch =>{
        axios
        .post("http://localhost:8000/", {
          product: productName
        })
        .then((res) => {
         dispatch({
             type: PRODUCT_FETCH,
             data: res.data
         })
        })
        .catch((err) => {
          console.log(err);
        });
        
    }
}

export const findItemFlipkart = (link, company) => {
    return dispatch => {
        axios
        .post("http://localhost:8000/" + company + "/", {
          product: link,
        })
        .then((res) => {
         dispatch({
             type: FLIPKART_FETCH,
             data: res.data
         })
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  export  const findItemAmazon = (link, company) => {

    return dispatch=>{
    axios
      .post("http://localhost:8000/" + company + "/", {
        product: link,
      })
      .then((res) => {

        dispatch({
            type:AMAZON_FETCH,
            data:res.data
        })

      })
 
      .catch((err) => {
        console.log(err);
      });
    }
  };


  

