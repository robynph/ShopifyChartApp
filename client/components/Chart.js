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
}

componentDidMount() {
  axios('https://api.myjson.com/bins/6w5vi')

    .then((response) => {

      const { keywordData } = response.data;
      //console.log(keywordData, response.data)
      keywordData[0].response_data.V[0].data
      keywordData[0].response_data.V[1].data
      console.log(keywordData[0].name   );
      const chartData = {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [
          {
            label: "Before Price Change",
            data: keywordData[0].response_data.V[0].data,
            fill: false,
            backgroundColor: 'red',
          },
          {
            label: "After Price Change",
            data: keywordData[0].response_data.V[1].data,
            fill: false,
            backgroundColor: 'blue',
          }
        ]
      }

      this.setState({ chartData });
      console.log(chartData);
    });
}

render(){

 return(

      <Card sectioned title='Projected Sales Over 10 Weeks' actions={[{content: 'Add Series'}]}>
        <div>
        <Line
          data={this.state.chartData}
          options={{
               legend:{
                display:true,
                position:'bottom'
              }
          }}
          />
        </div>
        </Card>

    );
  }
}

export default Chart;
