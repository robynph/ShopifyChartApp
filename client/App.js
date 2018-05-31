import React, { Component} from 'react';
import { Page, Layout, Card } from '@shopify/polaris';
import { EmbeddedApp } from '@shopify/polaris/embedded';
import ApiConsole from './components/ApiConsole'

import Chart from './components/Chart';
import Table from './components/Table';
import data from './data/tableData.json';
import PricingPanel from './components/PricingPanel';
{/* import NewList from './components/NewList';*/}
{/* import NewTable from './components/NewTable';*/}


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
          title="Pricing Application"
          breadcrumbs={[{ content: 'Home', url: '/foo' }]}
          primaryAction={{ content: 'Contact Us' }}
        >
              <ApiConsole />

                {/* <NewList /> */}
                {/* <NewTable /> */}

                <PricingPanel />
               <Chart />

              <Layout.Section>
                <Card>
                  <Table data={data} />
                </Card>
              </Layout.Section>
        
        </Page>
      </EmbeddedApp>
    );


  }
}

export default App;
