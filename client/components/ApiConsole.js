import React, { Component} from 'react';
import { connect } from 'react-redux';

import { Layout, Stack, Card, TextField, Button, DisplayText } from '@shopify/polaris';
import ObjectInspector from 'react-object-inspector';
import { updatePath, updateParams, sendRequest } from '../actions';

import {Doughnut} from 'react-chartjs-2';

import VerbPicker from './VerbPicker';
import test from './test';

class ApiConsole extends Component {
  render() {
    return (
      <Layout sectioned>
        { this.renderText() }
        { this.renderChart() }
        { this.renderForm() }
        { this.renderResponse() }
      </Layout>
    )
  }

  renderText() {
    return(
      <div>
        <Layout.Section>
          <DisplayText element="h3" size="small">Good evening, Dominic.</DisplayText>
        </Layout.Section>
      </div>
    )
  }

  renderChart() {
    const data = {
          	labels: [
          		'Red',
          		'Green',
          		'Yellow'
          	],
          	datasets: [{
          		data: [300, 50, 100],
          		backgroundColor: [
          		'#FF6384',
          		'#36A2EB',
          		'#FFCE56'
          		],
          		hoverBackgroundColor: [
          		'#FF6384',
          		'#36A2EB',
          		'#FFCE56'
          		]
          	}]
          };

    return (
      <div>
        <Layout.Section>
          <DisplayText element="h2" size="small">Doughnut Example</DisplayText>
          <Doughnut data={data} />
        </Layout.Section>
      </div>
    )
  }

  renderForm() {
    const { dispatch, requestFields } = this.props;

    return (
      <div>
        <Layout.Section>
          <Stack>
            <VerbPicker verb={requestFields.verb} />
            <TextField
              value={requestFields.path}
              onChange={path => dispatch(updatePath(path))}
            />
            <Button primary onClick={() => dispatch(sendRequest(requestFields))}>
              Send
            </Button>
        </Stack>

        </Layout.Section>

        {this.renderParams()}
      </div>
    )
  }

  renderParams() {
    const { dispatch, requestFields } = this.props;

    if (requestFields.verb === 'GET') {
      return null;
    } else {
      return (
        <Layout.Section>
          <TextField
            label="Request Params"
            value={requestFields.params}
            onChange={params => dispatch(updateParams(params))}
            multiline={12}
          />
        </Layout.Section>
      );
    }
  }

  renderResponse() {
    const { requestInProgress, requestError, responseBody } = this.props;

    if (responseBody === '') {
      return null;
    }

    if (requestInProgress) {
      return (
        <Layout.Section>
          'requesting...';
        </Layout.Section>
      )
    }

    const data = JSON.parse(responseBody)

    return (
      <Layout.Section>
        <Card>
          <div style={{margin: '15px 15px'}}>
            <ObjectInspector data={data} initialExpandedPaths={['root', 'root.*']}/>
          </div>
        </Card>
      </Layout.Section>
    )
  }
}

function mapStateToProps({
  requestFields,
  requestInProgress,
  requestError,
  responseBody,
}) {
  return {
    requestFields,
    requestInProgress,
    requestError,
    responseBody,
  };
}

export default connect(mapStateToProps)(ApiConsole);
