import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Popover, ActionList, Button } from '@shopify/polaris';
import { updateVerb } from '../actions';


class test extends Component {
  constructor(props) {
    super(props)

  }

    render() {

    return (
      <div className="test">
        "This is a test"
      </div>
    )
  }
}

export default connect()(test);
