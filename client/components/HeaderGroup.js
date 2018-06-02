import React, { Component} from 'react';
import { Banner, Layout, Stack, Card, TextField, Button, DisplayText, TextContainer, Heading } from '@shopify/polaris';


class HeaderGroup extends Component {
render(){
  return(


    <Card>
      <div>
          <Banner
              title="Collection Pricing is Ready to be Applied"
              status="success"
              action={{content: 'Apply Pricing'}}
            />
        </div>
    </Card>

    
    );
  }
}


export default HeaderGroup;
