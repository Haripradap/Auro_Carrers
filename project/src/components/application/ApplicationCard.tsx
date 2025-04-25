import React from 'react';
import { format } from 'date-fns';
import { Application, ApplicationStatus } from '../../types';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';
import Badge from '../ui/Badge';
import { Calendar, Briefcase, MapPin, DollarSign, ClockIcon } from 'lucide-react';

interface ApplicationCardProps {
  application: Application;
  onClick?: (application: Application) => void;
}

const statusVariantMap: Record<ApplicationStatus, {
  variant: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  icon?: React.ReactNode;
}> = {
  [ApplicationStatus.SAVED]: { variant: 'default' },
  [ApplicationStatus.APPLIED]: { variant: 'primary' },
  [ApplicationStatus.INTERVIEW]: { variant: 'secondary' },
  [ApplicationStatus.OFFER]: { variant: 'success' },
  [ApplicationStatus.REJECTED]: { variant: 'error' },
  [ApplicationStatus.ACCEPTED]: { variant: 'success' },
};

const ApplicationCard: React.FC<ApplicationCardProps> = ({ application, onClick }) => {
  const { 
    companyName, 
    position, 
    location, 
    salary, 
    jobType, 
    status, 
    dateApplied, 
    deadline,
    interviewDate,
  } = application;
  
  const statusConfig = statusVariantMap[status];
  
  const handleClick = () => {
    if (onClick) {
      onClick(application);
    }
  };
  
  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return format(new Date(dateString), 'MMM d, yyyy');
  };
  
  return (
    <Card 
      hoverable 
      className="transition-all duration-200 h-full animate-fade-in"
      onClick={handleClick}
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="line-clamp-1">{position}</CardTitle>
          <p className="text-gray-700 font-medium mt-1">{companyName}</p>
        </div>
        <Badge variant={statusConfig.variant}>
          {status}
        </Badge>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {location && (
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm">{location}</span>
            </div>
          )}
          
          {jobType && (
            <div className="flex items-center text-gray-600">
              <Briefcase size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm">{jobType}</span>
            </div>
          )}
          
          {salary && (
            <div className="flex items-center text-gray-600">
              <DollarSign size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm">{salary}</span>
            </div>
          )}
        </div>
        
        <div className="pt-2 border-t border-gray-100 space-y-2">
          {dateApplied && (
            <div className="flex items-center text-gray-600">
              <Calendar size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm">Applied: {formatDate(dateApplied)}</span>
            </div>
          )}
          
          {deadline && (
            <div className="flex items-center text-gray-600">
              <ClockIcon size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm">Deadline: {formatDate(deadline)}</span>
            </div>
          )}
          
          {interviewDate && status === ApplicationStatus.INTERVIEW && (
            <div className="flex items-center text-secondary-600 font-medium">
              <Calendar size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm">Interview: {formatDate(interviewDate)}</span>
            </div>
          )}
        </div>
        
        {application.skills.length > 0 && (
          <div className="pt-2 border-t border-gray-100">
            <div className="flex flex-wrap gap-1 mt-1">
              {application.skills.slice(0, 3).map((skill) => (
                <span 
                  key={skill.id}
                  className={`text-xs px-2 py-1 rounded-full ${
                    skill.isUserSkill 
                      ? 'bg-success-100 text-success-800' 
                      : 'bg-error-100 text-error-800'
                  }`}
                >
                  {skill.name}
                </span>
              ))}
              {application.skills.length > 3 && (
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                  +{application.skills.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ApplicationCard;