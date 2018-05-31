import React, { Component} from 'react';
import { Page } from '@shopify/polaris';
import { EmbeddedApp } from '@shopify/polaris/embedded';
import Chart from './components/Chart';
import Table from './components/Table';
import data from './data/tableData.json';

import RedhioTable from './components/RedhioTable';

import './App.css';

import ApiConsole from './components/ApiConsole'

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{},

    }
  }

  componentWillMount(){
    this.getChartData();

  }

    getChartData(){
        //Ajax xalls here
        this.setState({
          chartData:{
              labels: ['Boston', 'Worchester', 'Spring', 'Lowell', 'Cambridger', 'New York'],
              datasets:[
                {
                  label:'Population',
                  fill: false,
                  data:[
                    1175893,
                    1820589,
                    1503060,
                    1060519,
                    1061042,
                    950072
                  ],
                  backgroundColor:[
                    '#6666CC',
                    '#009933',
                    '#0000FF',
                    '#CC0066',
                    '#330033',
                    '#4A148C'
                  ]
                },
                {
                    label:'NewPopulation',
                    fill: false,
                    data:[
                      175893,
                      820589,
                      503060,
                      1060519,
                      4061042,
                      2950072
                    ],
                    backgroundColor:[
                      '#6666CC',
                      '#009933',
                      '#0000FF',
                      '#CC0066',
                      '#330033',
                      '#4A148C'
                    ]
                }
              ]
            }
        });
      }

  render() {
    const { apiKey, shopOrigin } = window;

    return (
      <EmbeddedApp shopOrigin={shopOrigin} apiKey={apiKey}>
        <Page
          title="My application"
          breadcrumbs={[{ content: 'Home', url: '/foo' }]}
          primaryAction={{ content: 'Add something' }}
        >
          <ApiConsole />
          <RedhioTable />
          <Chart chartData={this.state.chartData} />
          <Table data={data} />
        </Page>
      </EmbeddedApp>
    );


  }
}

export default App;
