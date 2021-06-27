
import {connect} from 'react-redux'
import {addtoContent} from '../service/actions/actions'
import SearchBar from '../Component/SearchBar'
import LandingPage from '../Screens/LandingPage/LandingPage'
import {withRouter , BrowserRouter as Router} from 'react-router-dom';

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addtoContent(data))

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LandingPage))