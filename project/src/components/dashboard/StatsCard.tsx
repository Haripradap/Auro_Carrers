import React from 'react';
import Card, { CardContent, CardTitle } from '../ui/Card';

interface StatsCardProps {
  title: string;
  value: string | number;
  caption?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  caption,
  icon,
  trend,
  className = '',
}) => {
  return (
    <Card className={`h-full ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
            <div className="flex items-baseline">
              <CardTitle className="text-2xl font-semibold">{value}</CardTitle>
              {trend && (
                <span 
                  className={`ml-2 text-sm font-medium ${
                    trend.isPositive ? 'text-success-600' : 'text-error-600'
                  }`}
                >
                  {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
                </span>
              )}
            </div>
            {caption && (
              <p className="mt-1 text-sm text-gray-500">{caption}</p>
            )}
          </div>
          
          {icon && (
            <div className="p-3 rounded-full bg-primary-100 text-primary-600">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;