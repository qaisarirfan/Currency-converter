import {connect} from "react-redux"
import {logout} from "../../redux/reducers/authentication/actionCreators"

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)
