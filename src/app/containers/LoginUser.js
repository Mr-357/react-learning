import { connect } from 'react-redux';
import Login from '../components/Buttons/Login';
import { logout } from '../actions/userActions';

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            localStorage.clear();
            dispatch(logout());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);