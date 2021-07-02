import { content } from '../../Content/Content'
import { ADD_CONTENT,FIND_ITEM, FLIPKART_FETCH,AMAZON_FETCH,PRODUCT_FETCH, LOADING, SHOW_LOADING, HIDE_LOADING } from '../constants'
const initialState = {
    items: [],
    flipkart: [],
    amazon:[],
    showloading:true,
    hideloading:false

}
export default function cardItems(state = initialState, action) {
    
    switch (action.type) {
       

        case FLIPKART_FETCH:
            return {
                ...state,
                flipkart: action.data
            }

            case AMAZON_FETCH:
                return{
                    ...state,
                    amazon:action.data


                }

            case PRODUCT_FETCH:
                return {
                    ...state,
                    items:action.data
                }    
            case SHOW_LOADING:
                return{
                    ...state,
                    showloading:action.data
                } 
                
            case HIDE_LOADING:
                return{
                   ...state,
                   hideloading:action.data
                }    
        

        default:
            return state;
    }


}
