
import React, { Component} from 'react';
import {FooterHelp, Link, Layout, Stack, Card, TextField, Button, DisplayText, TextContainer, Heading } from '@shopify/polaris';


class FooterGroup extends Component {
render(){
  return(
    <Layout.Section>
        <FooterHelp>
          Learn more about{' '}
          <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
            price optimization
          </Link>.
        </FooterHelp>
    </Layout.Section>
    );
  }
}


export default FooterGroup;
