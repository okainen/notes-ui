import {connect} from 'react-redux';
import {signOut} from '../../../data/redux/user/actions';
import Navbar from './Navbar';

const mapStateToProps = null;

const mapDispatchToProps = {
  signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
