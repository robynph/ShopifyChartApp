import React, { Component} from 'react';
import { Page } from '@shopify/polaris';
import { EmbeddedApp } from '@shopify/polaris/embedded';
import ApiConsole from './components/ApiConsole'

import Chart from './components/Chart';
import Table from './components/Table';
import data from './data/tableData.json';
import PricingPanel from './components/PricingPanel';

import './App.css';


class App extends Component {
  constructor(){
    super();
  }

  componentWillMount(){
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
          <PricingPanel />
          <Chart />
          <Table data={data} />
        </Page>
      </EmbeddedApp>
    );


  }
}

export default App;
