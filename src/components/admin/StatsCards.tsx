"use client";

import { memo } from "react";
import { 
  Users,
  BookOpen,
  DollarSign,
  MessageSquare
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

function StatCard({ title, value, description, icon, trend }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          
          {trend && (
            <div className="flex items-center mt-1">
              <span className={`text-xs ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">vs last month</span>
            </div>
          )}
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{description}</p>
        </div>
        <div className="flex items-center justify-center bg-primary/10 text-primary p-3 rounded-full h-12 w-12">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Users"
        value="12,345"
        description="Active platform users"
        icon={<Users className="h-5 w-5" />}
        trend={{ value: 12, isPositive: true }}
      />
      <StatCard
        title="Total Courses"
        value="248"
        description="Available courses"
        icon={<BookOpen className="h-5 w-5" />}
        trend={{ value: 8, isPositive: true }}
      />
      <StatCard
        title="Revenue"
        value="$52,389"
        description="Monthly revenue"
        icon={<DollarSign className="h-5 w-5" />}
        trend={{ value: 5, isPositive: true }}
      />
      <StatCard
        title="Support Tickets"
        value="18"
        description="Open support tickets"
        icon={<MessageSquare className="h-5 w-5" />}
        trend={{ value: 3, isPositive: false }}
      />
    </div>
  );
} 