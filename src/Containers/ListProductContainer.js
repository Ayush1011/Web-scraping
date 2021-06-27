import {connect} from 'react-redux'
import {addtoContent} from '../service/actions/actions'
import SearchBar from '../Component/SearchBar'
import LandingPage from '../Screens/LandingPage/LandingPage'
import ListProduct from '../Screens/ListProduct/ListProduct'
import {withRouter , BrowserRouter as Router} from 'react-router-dom';

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ListProduct))