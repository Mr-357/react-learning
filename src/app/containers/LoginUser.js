import { connect } from 'react-redux';
import LoginButton from '../components/Buttons/LoginButton';
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

export default connect(mapStateToProps,mapDispatchToProps)(LoginButton);