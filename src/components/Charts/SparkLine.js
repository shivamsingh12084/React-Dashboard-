import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.Component {
  render() {
    const {id, height, width, color, data, type, currentColor } = this.props

    return (

      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        dataSource={data}
        border={{color: "blue" , width: 2}}
        xName="x"
        yName='yval'
        type={type}
        markerSettings={{ visible: ['All'], size: 4.5, fill: currentColor }}
        tooltipSettings = {{
          visible: true,
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true
          }

        }}
        
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    )
  }
}



export default SparkLine
