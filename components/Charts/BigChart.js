import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-style';
import COLORS from '../constants';

const options = {
  aspectRatio: 4,
  responsive: true,
  legend: {
    display: false,
  },
  tooltips: {
    enabled: true,
    backgroundColor: 'rgba(0,0,0,0.0)',
    displayColors: false,
    height: 140,
    titleFontColor: COLORS.black,
    borderColor: COLORS.white,
    borderWidth: 0,
    xPadding: 20,
    yPadding: 40,
    _bodyAlign: 'center',
    _footerAlign: 'center',
    callbacks: {
      title() {
        return '';
      },
      label(tooltipItem) {
        return tooltipItem.label;
      },
      footer() {
        return '';
      },
    },
    titleMarginBottom: 40,
    bodyFontSize: 14,
    bodyFontStyle: 'normal',
    bodyFontColor: COLORS.black,
    bodySpacing: 0.25,
    footerMarginTop: 20,
    outerGlowWidth: 10,
    outerGlowColor: 'rgba(0, 0, 0, 0.3)',
  },
  elements: {
    point: {
      radius: 0,
    },
    line: {
      tension: 0.33,
    },
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        min: 0,
      },
    }],
  },
};

const StatisticsChart = () => {
  const labels = [1, 2, 3, 4, 5, 6, 7, 8];
  const values = [1, 1.7, 2.7, 3.8, 2.2, 3.8, 5.5, 7];

  const data = () => ({
    labels,
    datasets: [
      {
        backgroundColor: COLORS.orange1, // Put the gradient here as a fill color
        borderWidth: 3,
        pointColor: COLORS.orange2,
        pointStrokeColor: '#ff6c23',
        pointHighlightFill: '#fff',
        pointHighlightStroke: '#ff6c23',
        lineTension: 0.4,
        borderColor: COLORS.orange2,
        borderJoinStyle: 'round',
        pointBackgroundColor: COLORS.orange2,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: COLORS.orange2,
        pointHoverBorderColor: COLORS.orange2,
        pointRadius: 4,
        data: values,
      },
    ],
  });

  return (
    <div className="chart-container" style={{ position: 'relative', height: 'auto', width: '99%' }}>
      <Line data={data} options={options} height={null} width={null} />
    </div>
  );
};

StatisticsChart.propTypes = {

};

export default StatisticsChart;
