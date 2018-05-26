import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }

}

render(){
      return(
        <div className="chart">
          <Bar
            data={this.state.chartData}
            options={{
              title:{
                display:true,
                text:'Largest City in Mass',
                fontSize:25
              },
                legend:{
                  display:true,
                  position:'right'
                }
            }}
            />

          <Line
           data={this.state.chartData}
           options={{
             title:{
               display:true,
               text:'Largest Cities In Mass',
               fontSize:25
             },
             legend:{
               display:true,
               position:'right'
             }
           }}
          />

        <Pie
           data={this.state.chartData}
           options={{
             title:{
               display:true,
               text:'Largest Cities In Mass',
               fontSize:25
             },
             legend:{
               display:true,
               position:'right'
             }
           }}
        />
        </div>
      )
  }
}

export default Chart;
