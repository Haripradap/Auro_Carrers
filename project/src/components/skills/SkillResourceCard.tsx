import React from 'react';
import { ExternalLink, Clock, DollarSign, Star } from 'lucide-react';
import { Resource, ResourceType } from '../../types';
import Card, { CardContent } from '../ui/Card';
import Button from '../ui/Button';

interface SkillResourceCardProps {
  resource: Resource;
  className?: string;
}

const resourceTypeIcons: Record<ResourceType, React.ReactNode> = {
  [ResourceType.COURSE]: <div className="p-2 rounded-full bg-primary-100 text-primary-600">📚</div>,
  [ResourceType.TUTORIAL]: <div className="p-2 rounded-full bg-secondary-100 text-secondary-600">🎓</div>,
  [ResourceType.ARTICLE]: <div className="p-2 rounded-full bg-success-100 text-success-600">📄</div>,
  [ResourceType.BOOK]: <div className="p-2 rounded-full bg-warning-100 text-warning-600">📘</div>,
  [ResourceType.VIDEO]: <div className="p-2 rounded-full bg-error-100 text-error-600">🎬</div>,
  [ResourceType.OTHER]: <div className="p-2 rounded-full bg-gray-100 text-gray-600">🔗</div>,
};

const SkillResourceCard: React.FC<SkillResourceCardProps> = ({ resource, className = '' }) => {
  const { title, type, description, duration, cost, rating, url } = resource;
  
  return (
    <Card className={`h-full ${className}`}>
      <CardContent className="p-5">
        <div className="flex items-start">
          {resourceTypeIcons[type]}
          <div className="ml-3 flex-1">
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-xs text-gray-500 mt-1">{type}</p>
            
            {description && (
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>
            )}
            
            <div className="mt-3 flex flex-wrap gap-3">
              {duration && (
                <div className="flex items-center text-xs text-gray-500">
                  <Clock size={14} className="mr-1" />
                  {duration}
                </div>
              )}
              
              {cost && (
                <div className="flex items-center text-xs text-gray-500">
                  <DollarSign size={14} className="mr-1" />
                  {cost}
                </div>
              )}
              
              {rating && (
                <div className="flex items-center text-xs text-gray-500">
                  <Star size={14} className="mr-1 text-warning-500 fill-warning-500" />
                  {rating.toFixed(1)}
                </div>
              )}
            </div>
            
            <div className="mt-4">
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                icon={<ExternalLink size={14} />}
                onClick={() => window.open(url, '_blank')}
              >
                Open Resource
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillResourceCard;