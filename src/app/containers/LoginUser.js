import { connect } from 'react-redux';
import Login from '../components/Buttons/Login';

const mapStateToProps = state => {
    console.log('map',state.user);
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login);