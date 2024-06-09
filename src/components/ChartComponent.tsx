import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

interface ChartComponentProps {
  providerA: string;
  planA: string;
  providerB: string;
  planB: string;
  dataA: any;
  dataB: any;
  showGraphs: boolean;
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  providerA,
  planA,
  providerB,
  planB,
  dataA,
  dataB,
  showGraphs,
}) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (showGraphs && providerA && providerB && planA && planB) {
      const ctx = document.getElementById('myChart') as HTMLCanvasElement;
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Electricity'],
          datasets: [
            {
              label: `${providerA} - ${planA}`,
              backgroundColor: '#00b49d',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              data: [dataA[providerA][planA].electricity],
            },
            {
              label: `${providerB} - ${planB}`,
              backgroundColor: '#d5eeea',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              data: [dataB[providerB][planB].electricity],
            },
          ],
        },
      });
    }
  }, [providerA, providerB, planA, planB, dataA, dataB, showGraphs]);

  return (
    <div>
      {showGraphs && <canvas id="myChart"></canvas>}
    </div>
  );
};

export default ChartComponent;
