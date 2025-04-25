import React, { useEffect, useState } from 'react';
import { BarChart2, PlusCircle } from 'lucide-react';
import { useSkillsStore } from '../store/skillsStore';
import SkillGapChart from '../components/dashboard/SkillGapChart';
import SkillResourceCard from '../components/skills/SkillResourceCard';
import Button from '../components/ui/Button';
import Card, { CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { SkillCategory } from '../types';

const SkillsGap: React.FC = () => {
  const { skillGaps, loading, loadSkillGaps, userSkills } = useSkillsStore();
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all');
  
  useEffect(() => {
    loadSkillGaps();
  }, [loadSkillGaps]);
  
  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-primary-200 mb-4" />
          <div className="h-4 w-48 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }
  
  // Filter user skills by category
  const filteredUserSkills = userSkills.filter(
    skill => selectedCategory === 'all' || skill.category === selectedCategory
  );
  
  // Filter skill gaps by category
  const filteredSkillGaps = skillGaps.filter(
    gap => selectedCategory === 'all' || gap.category === selectedCategory
  );
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Skills Analysis</h1>
        <p className="mt-1 text-sm text-gray-500">
          Analyze your skills, identify gaps, and find resources to improve
        </p>
      </div>
      
      {/* Skill categories filter */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === 'all' ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('all')}
        >
          All Skills
        </Button>
        {Object.values(SkillCategory).map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      {/* Skills overview */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Skills Gap Analysis</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  icon={<PlusCircle size={16} />}
                >
                  Add Skill
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {filteredSkillGaps.length > 0 ? (
                <div className="h-80">
                  <SkillGapChart data={filteredSkillGaps} />
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <BarChart2 size={24} className="text-gray-500" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No skill gaps found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {selectedCategory !== 'all' 
                      ? `No ${selectedCategory} skill gaps detected at this time` 
                      : 'Add more job applications to analyze skill requirements'}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredUserSkills.length > 0 ? (
                filteredUserSkills.map((skill) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">{skill.name}</p>
                      <p className="text-xs text-gray-500">{skill.category}</p>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800">
                      {skill.level}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-sm text-gray-500">No skills in this category</p>
                </div>
              )}
              
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-4"
                icon={<PlusCircle size={16} />}
              >
                Add New Skill
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recommendations section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Resources</h2>
        
        {skillGaps.length > 0 && skillGaps[0].resources.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGaps.slice(0, 3).map((gap) => 
              gap.resources.map((resource) => (
                <SkillResourceCard
                  key={resource.id}
                  resource={{
                    id: resource.id,
                    title: resource.title,
                    type: resource.type || 'Course',
                    url: resource.url,
                    skillId: gap.skillName,
                    description: 'Learn this in-demand skill to improve your chances of landing your desired job.',
                    duration: '8 hours',
                    cost: 'Free',
                    rating: 4.7,
                  }}
                />
              ))
            )}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <BarChart2 size={24} className="text-gray-500" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No resources found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {selectedCategory !== 'all' 
                ? `We don't have any ${selectedCategory} resources to recommend at this time` 
                : 'Add more job applications to get tailored resource recommendations'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsGap;