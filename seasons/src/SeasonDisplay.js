import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Lets hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr! Chilly it is!',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (2 < month && month < 9)
    return lat > 0 ? 'summer' : 'winter';
  else
    return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`${season} season-display`}>
      <i className={`icon-left massive icon ${iconName}`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive icon ${iconName}`}></i>
    </div>
  );
};

export default SeasonDisplay;