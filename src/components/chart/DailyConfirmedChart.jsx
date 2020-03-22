import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { commonConfig } from './commonConfig';

const getTotalChartOptions = (totalData, predictData) => {
  return {
    ...commonConfig,
    legend: {
      show: true,
      selected: {
        total: true,
        'predicted total': false
      }
    },
    series: [
      {
        type: 'line',
        name: 'total',
        data: totalData,
        itemStyle: {
          normal: {
            label: {
              show: true
            }
          }
        }
      },
      {
        type: 'line',
        name: 'predicted total',
        data: predictData,
        smooth: false,
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'right',
              formatter: ({value, dataIndex}) => {
                if (dataIndex > predictData.length - 11) {
                  return value[2]
                }
                return ''
              }
            },
            lineStyle: {
              width: 2,
              type: 'dotted' //'dotted'虚线 'solid'实线
            }
          }
        }
      }
    ]
  };
};

const getTodayChartOptions = todayData => {
  return {
    ...commonConfig,
    series: [
      {
        type: 'bar',
        name: 'new cases',
        data: todayData,
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'top'
            }
          }
        }
      }
    ]
  };
};

export const DailyConfirmedChart = ({ dailyHistorys, predicts }) => {
  let todayData = dailyHistorys.map(({ date, todayNewNumber }) => [
    new Date(date),
    todayNewNumber
  ]);
  let totalData = dailyHistorys.map(({ date, totalConfirmedNumber }) => [
    new Date(date),
    totalConfirmedNumber
  ]);
  let predictData = predicts.map(({ date, predictedTotalConfirmedNumber }) => [
    new Date(date),
    predictedTotalConfirmedNumber
  ]);
  return (
    <>
      <ReactEcharts option={getTotalChartOptions(totalData, predictData)} />
      <ReactEcharts option={getTodayChartOptions(todayData)} />
    </>
  );
};
