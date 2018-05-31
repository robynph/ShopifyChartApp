import React, { Component} from 'react';
import { Layout, Stack, Card, TextField, Button, DisplayText } from '@shopify/polaris';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';


class PricingPanel extends Component {
  constructor(props){
    super(props);
      this.state={
         CPU_Time:'',
         Response_Time:''
      }

      this.getCPU = this.getCPU.bind(this);
      this.getResponseTime = this.getResponseTime.bind(this);


  }

getCPU() {
  axios.get('https://api.myjson.com/bins/a226m',{})
    .then(response=> this.setState({CPU_Time: response.data.cpucompute_time}))
}

getResponseTime() {
  axios.get('https://api.myjson.com/bins/a226m',{})
    .then(response=> this.setState({Response_Time: response.data.response_time}))
}


componentDidMount() {
    this.getCPU();
    this.getResponseTime();
}


render(){
  return(
    <Layout.Section>
      <Card>
        <DisplayText element="h2" size="medium">Model Results</DisplayText>
        <DisplayText element="h3" size="small">CPU Time: {this.state.CPU_Time}</DisplayText>
        <DisplayText element="h3" size="small">Response Time: {this.state.Response_Time}</DisplayText>
      </Card>
    </Layout.Section>
    );
  }
}


export default PricingPanel;
