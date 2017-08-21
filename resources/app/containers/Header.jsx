import React from 'react'
import {connect} from 'react-redux';

const Header = ({name}) => (
  <div>
    <h1>{name}</h1>
  </div>
);

const mapStateToProps = state => ({
  name: state.name
});

export default connect(
  mapStateToProps
)(Header)
