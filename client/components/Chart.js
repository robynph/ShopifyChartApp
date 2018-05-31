import React, { Component} from 'react';
import { Layout, Stack, Card, TextField, Button, DisplayText } from '@shopify/polaris';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';


class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {},
    }

this.getResult = this.getResult.bind(this);


}

getResult() {
  axios('https://api.myjson.com/bins/a226m')

    .then((response) => {

      const { keywordData } = response.data;
      //console.log(keywordData, response.data)
      keywordData[0].response_data.V[0].data.reverse()
      keywordData[0].response_data.V[1].data.reverse()
      keywordData[0].response_data.V[2].data.reverse()
      console.log(keywordData[0].name   );
      const chartData = {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [
          {
            label: keywordData.map(k => k.response_data.V[0].label),
            data: keywordData[0].response_data.V[0].data,
            fill: false,
            backgroundColor: 'red',
          },
          {
            label: keywordData.map(k => k.response_data.V[1].label),
            data: keywordData[0].response_data.V[1].data,
            fill: false,
            backgroundColor: 'green',
          },            {
            label: keywordData.map(k => k.response_data.V[2].label),
            fill: false,
            data: keywordData[0].response_data.V[2].data,
            backgroundColor: 'blue',
          }
        ]
      }

      this.setState({ chartData });
      console.log(chartData);
    });
}

componentDidMount() {
  this.getResult();
}


render(){

 return(

      <div className="testchart">
        <Line
          data={this.state.chartData}
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

export default Chart;
