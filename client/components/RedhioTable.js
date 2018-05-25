import React, { Component} from 'react';
import { Layout, Stack, Card, TextField, Button, DisplayText } from '@shopify/polaris';

class RedhioTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      tableData: props.tableData
    }

}

render(){

  console.log(this.props.tableData);

 return(

      <div className="test">
        <TextField
          label="This is my data"
          value={this.props.tableData}
        />

      </div>

    )
  }
}


export default RedhioTable;
