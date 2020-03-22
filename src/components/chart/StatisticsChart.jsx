import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { commonConfig } from './commonConfig';

const getOptions = statistics => {
  let data = {};
  let keys = [];
  let series = [];
  let dataZoom = [];
  
  for (let i = 0; i < statistics.length; i++) {
    const statistic = statistics[i];
    for (const key in statistic) {
      if (statistic.hasOwnProperty(key) && typeof statistic[key] === 'number') {
        if (!data[key]) {
          data[key] = [];
        }
        keys.push(key);
        data[key].push([new Date(statistic.Date), statistic[key]]);
      }
    }
  }

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    series.push({ type: 'line', name: key, data: data[key] });
  }

  if(keys.length < 30) {
    dataZoom = [{
      disable: true
    }]
  }

  return {
    ...commonConfig,
    legend: {
      show: true
    },
    dataZoom,
    series
  };
};

export const StatisticsChart = ({ statistics }) => (
  <>
    <ReactEcharts option={getOptions(statistics)} />
  </>
);
