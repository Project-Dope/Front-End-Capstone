import React from 'react';

var CharacteristicsBreakdown = (props) => {
  // console.log('metaData from char breakdown: ', props.metaData);

  var characteristicsData = props.metaData.characteristics
  var characteristicsArray = [];

  for (var key in characteristicsData) {
    characteristicsArray.push([key, characteristicsData[key]])
  }
  // console.log('characteristicsArray: ', characteristicsArray);
  var barStyle = {height: 10, width: '20%', backgroundColor: 'grey'};

  return (

    <div>
      {characteristicsArray.map((data, index) => {
        return (
          <div key={index}>
            {data[0]}
            <div style={barStyle}></ div>
          </div>
        )
      })}
      <h2></h2>
    </div>

  )

}

export default CharacteristicsBreakdown;