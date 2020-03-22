const DEFAULT_DAYS = 30;
export const commonConfig = {
  tooltip: {
    show: true
  },
  xAxis: {
    type: 'time',
    formatter: (value, idx) => {
      var date = new Date(value);
      var texts = [date.getMonth() + 1, date.getDate()];
      if (idx === 0) {
        texts.unshift(date.getYear());
      }
      return texts.join('/');
    },
    axisLabel: {
      rotate: 45
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: value => {
        if (value >= 1000) {
          return `${value / 1000}k`;
        }
        return value;
      }
    }
  },
  dataZoom: [
    {
      disabled: false,
      startValue: new Date(Date.now() - DEFAULT_DAYS * 24 * 60 * 60 * 1000)
    }
  ]
};
