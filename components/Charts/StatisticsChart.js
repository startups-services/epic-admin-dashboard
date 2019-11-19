import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import COLORS from '../constants';

const options = {
  maintainAspectRatio: true,
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
    xAxes: [
      {
        gridLines: false,
        ticks: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: false,
        scaleLabel: false,
        ticks: {
          display: false,
        },
      },
    ],
  },
};

const StatisticsChart = ({ labels, values }) => {
  const data = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 175);
    gradient.addColorStop(0, 'rgba(50, 220, 155, 0.245602)');
    gradient.addColorStop(1, 'rgba(50, 220, 155, 0.02)');

    return {
      labels,
      datasets: [
        {
          backgroundColor: gradient, // Put the gradient here as a fill color
          borderWidth: 2,
          pointColor: '#fff',
          pointStrokeColor: '#ff6c23',
          pointHighlightFill: '#fff',
          pointHighlightStroke: '#ff6c23',
          lineTension: 0.1,
          borderColor: '#32DC9B',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointHoverRadius: 8,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(255, 255, 255, 0.75)',
          pointHoverBorderWidth: 8,
          pointRadius: 0,
          pointHitRadius: 10,
          data: values,
          legend: {
            display: false,
          },
        },
      ],
    };
  };

  return (
    <Line data={data} options={options} />
  );
};

StatisticsChart.propTypes = {
  labels: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired,
};

export default StatisticsChart;
