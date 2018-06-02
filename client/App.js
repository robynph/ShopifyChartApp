import React, { Component} from 'react';
import { Page, Stack, Layout, Card,AppProvider } from '@shopify/polaris';
import { EmbeddedApp } from '@shopify/polaris/embedded';
import ApiConsole from './components/ApiConsole'

import Chart from './components/Chart';

import Table from './components/Table';
import data from './data/tableData.json';
import PricingPanel from './components/PricingPanel';
import NewList from './components/NewList';
import NewTable from './components/NewTable';
import HeaderGroup from './components/HeaderGroup';
import FooterGroup from './components/FooterGroup';



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
     <AppProvider
        shopOrigin={shopOrigin} apiKey={apiKey}>
              <Page
                title="Pricing Application"
                breadcrumbs={[{ content: 'Home', url: 'https://redhio.myshopify.com/admin/apps/testappiv/' }]}
                primaryAction={{ content: 'Contact' }}
                >
                  <HeaderGroup />
                  <NewTable />
                  <Chart />
                  <NewList />
                  <FooterGroup />

              </Page>
       </AppProvider>
    );


  }
}

export default App;
