import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Table extends Component{
  constructor(props){
    super(props);
    this.state = {
      tableData:props.tableData
    }

}

render(){
      return(
        <div className="table">
           <BootstrapTable data={this.state.tableData}>
               <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
               <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
               <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
             </BootstrapTable>
          </div>
      )
  }
}

export default Table;
