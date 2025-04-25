import React, { useEffect } from 'react';
import { BarChart2, Calendar, Users, Briefcase, Clock, TrendingUp } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';
import StatusBarChart from '../components/dashboard/StatusBarChart';
import SkillGapChart from '../components/dashboard/SkillGapChart';
import UpcomingCard from '../components/dashboard/UpcomingCard';
import { useDashboardStore } from '../store/dashboardStore';
import { useApplicationsStore } from '../store/applicationsStore';
import { ApplicationStatus } from '../types';

const Dashboard: React.FC = () => {
  const { stats, loading, loadDashboardStats } = useDashboardStore();
  const { applications } = useApplicationsStore();
  
  useEffect(() => {
    loadDashboardStats();
  }, [loadDashboardStats]);
  
  if (loading || !stats) {
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
  
  // Count applications by status
  const getStatusCount = (status: ApplicationStatus) => {
    return stats.applicationsByStatus[status] || 0;
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Track your job applications, upcoming deadlines, and skills progress.
        </p>
      </div>
      
      {/* Stats overview */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Applications"
          value={stats.totalApplications}
          icon={<Briefcase size={20} />}
        />
        <StatsCard
          title="Active Applications"
          value={getStatusCount(ApplicationStatus.APPLIED) + getStatusCount(ApplicationStatus.INTERVIEW)}
          caption="Applied or in interview stage"
          icon={<Users size={20} />}
        />
        <StatsCard
          title="Interviews"
          value={getStatusCount(ApplicationStatus.INTERVIEW)}
          caption="Scheduled interviews"
          icon={<Calendar size={20} />}
        />
        <StatsCard
          title="Success Rate"
          value={`${Math.round((getStatusCount(ApplicationStatus.OFFER) / stats.totalApplications) * 100)}%`}
          caption="Applications resulting in offers"
          icon={<TrendingUp size={20} />}
          trend={{ value: 8, isPositive: true }}
        />
      </div>
      
      {/* Charts section */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <StatusBarChart data={stats.applicationsByStatus} />
        <SkillGapChart data={stats.skillGaps} />
      </div>
      
      {/* Upcoming activities section */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <UpcomingCard
          title="Upcoming Deadlines"
          applications={stats.upcomingDeadlines}
          dateField="deadline"
          emptyMessage="No upcoming deadlines"
          icon={<Clock size={20} className="text-warning-500" />}
        />
        <UpcomingCard
          title="Upcoming Interviews"
          applications={stats.upcomingInterviews}
          dateField="interviewDate"
          emptyMessage="No upcoming interviews"
          icon={<Calendar size={20} className="text-primary-500" />}
        />
      </div>
      
      <div className="border-t border-gray-200 pt-5">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recommended Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <TrendingUp size={20} className="text-success-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Improve Docker skills</h3>
                <p className="mt-1 text-xs text-gray-500">
                  This skill appears in 9 of your saved job postings
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <Calendar size={20} className="text-primary-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Follow up on applications</h3>
                <p className="mt-1 text-xs text-gray-500">
                  3 applications have been in Applied status for over 2 weeks
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <BarChart2 size={20} className="text-warning-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Update your skills profile</h3>
                <p className="mt-1 text-xs text-gray-500">
                  Your skills list was last updated 30 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;