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
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface SkillGapChartProps {
  data: {
    skillName: string;
    frequency: number;
  }[];
  className?: string;
}

const SkillGapChart: React.FC<SkillGapChartProps> = ({ data, className = '' }) => {
  const chartData = {
    labels: data.map(item => item.skillName),
    datasets: [
      {
        label: 'Frequency in Job Listings',
        data: data.map(item => item.frequency),
        backgroundColor: '#8B5CF6', // purple-500
        borderWidth: 0,
        borderRadius: 4,
      },
    ],
  };
  
  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Found in ${context.parsed.x} job listings`;
          }
        }
      },
    },
    scales: {
      x: {
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
        <CardTitle>Top Skill Gaps</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <Bar data={chartData} options={options} />
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>These skills are most frequently requested in job listings that match your profile.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillGapChart;