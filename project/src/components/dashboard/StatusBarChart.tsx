import React from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend 
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ApplicationStatus } from '../../types';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface StatusBarChartProps {
  data: Record<ApplicationStatus, number>;
  className?: string;
}

const StatusBarChart: React.FC<StatusBarChartProps> = ({ data, className = '' }) => {
  const statusColors = {
    [ApplicationStatus.SAVED]: '#9CA3AF', // gray-400
    [ApplicationStatus.APPLIED]: '#3B82F6', // blue-500
    [ApplicationStatus.INTERVIEW]: '#8B5CF6', // purple-500
    [ApplicationStatus.OFFER]: '#10B981', // green-500
    [ApplicationStatus.REJECTED]: '#EF4444', // red-500
    [ApplicationStatus.ACCEPTED]: '#10B981', // green-500
  };
  
  const labels = Object.keys(data);
  const values = Object.values(data);
  
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Applications',
        data: values,
        backgroundColor: labels.map(label => statusColors[label as ApplicationStatus]),
        borderWidth: 0,
        borderRadius: 4,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.parsed.y} application${context.parsed.y !== 1 ? 's' : ''}`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };
  
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Applications by Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <Bar data={chartData} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusBarChart;