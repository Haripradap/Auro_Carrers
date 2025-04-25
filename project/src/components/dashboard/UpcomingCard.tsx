import React from 'react';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';
import { Application } from '../../types';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';

interface UpcomingCardProps {
  title: string;
  applications: Application[];
  dateField: 'deadline' | 'interviewDate' | 'followUpDate';
  emptyMessage: string;
  icon: React.ReactNode;
  className?: string;
}

const UpcomingCard: React.FC<UpcomingCardProps> = ({
  title,
  applications,
  dateField,
  emptyMessage,
  icon,
  className = '',
}) => {
  // Format date with relative time (today, tomorrow, etc.)
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return format(date, 'MMM d, yyyy');
    }
  };
  
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center space-x-2">
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {applications.length > 0 ? (
          <div className="space-y-4">
            {applications.map(app => (
              <div key={app.id} className="flex items-start">
                <div className="p-2 rounded-full bg-primary-100 text-primary-600 mr-3">
                  {dateField === 'interviewDate' ? (
                    <Calendar size={16} />
                  ) : (
                    <Clock size={16} />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{app.companyName}</p>
                  <p className="text-xs text-gray-500">{app.position}</p>
                  <p className="mt-1 text-xs font-medium text-primary-600">
                    {formatDate(app[dateField])}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-gray-500 text-sm">{emptyMessage}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UpcomingCard;