import React, { Component} from 'react';
import { Layout, Stack, Card, TextField, Button, DisplayText } from '@shopify/polaris';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';


class RedhioTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      tableData: {},
    }

}

componentDidMount(){

     axios.get('https://api.myjson.com/bins/l5pw3')
           .then(response => {

             const {keywordData} = response.data;

             const tableData = {
               labels: keywordData.map(k => k.category),
               datasets: [
                 {
                   label: 'spectra',
                   fill: false,
                   data: keywordData.map(d => d.noOfSpectra),
                   backgroundColor:'#4A148C',
                 }
               ]
             }

             this.setState({ tableData });
             console.log(this.state.tableData);
           });
            }


render(){

 return(

      <div className="testchart">
        <Bar
          data={this.state.tableData}
          options={{
            title:{
              display:true,
              text:'Transactions per minute',
              fontSize:25
            },
              legend:{
                display:true,
                position:'right'
              }
          }}
          />
        </div>

    );
  }
}


export default RedhioTable;
