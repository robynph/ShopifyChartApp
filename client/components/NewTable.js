import React, { Component} from 'react';
import {
Page,
Card,
DataTable,
 } from '@shopify/polaris';
import axios from 'axios';


class NewTable extends React.Component {
  constructor(props) {
  		super(props);
  	}
render(){
    const rows = [
       ['Gold Bezel Diamond Ring','$23,579', '$17,500', '-26%', '$1,387', '$1,750', '26%', '17', '10', '-70%'],
       ['Gold Butterfly Diamond Ring','$10,132', '$49,000', '384%', '$2,533', '$2,450', '-3%', '4', '20', '80%'],
       ['Gold Weave Diamond Ring','$56,250', '$38,525', '-32%', '$1,250', '$1,675', '34%', '45', '23', '-96%'],
     ];

     return (

           <Card title="Pricing Model Results"
           primaryFooterAction={{content: 'Change Data'}}
           >
            <div>
              <DataTable
                 columnContentTypes={[
                   'text',
                   'numeric',
                   'numeric',
                   'numeric',
                   'numeric',
                   'numeric',
                   'numeric',
                   'numeric',
                   'numeric',
                   'numeric'
                 ]}
                 headings={[
                   'Product',
                   'Old Sales',
                   'New Sales',
                   'Sales % Change',
                   'Old Price',
                   'New Price',
                   'Price % Change',
                   'Old Volume',
                   'New Volume',
                   'Volume % Change'
                 ]}
                 rows={rows}
                 totals={['','$89,961','$105,025','17%','','','',66,53,'-24%']}
                 footerContent={`Showing ${rows.length} of ${rows.length} products`}
               />
              </div>
             </Card>

    );
  }
}

export default NewTable;
