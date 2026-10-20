import { Card } from './ui/AppCard';
import { TrendingUp, FolderKanban, Users, CheckCircle2 } from 'lucide-react';

const stats = [
  {
    label: 'Total Projects',
    value: '24',
    change: '+12%',
    trend: 'up',
    icon: FolderKanban,
    color: 'bg-blue-500',
  },
  {
    label: 'Active Clients',
    value: '18',
    change: '+8%',
    trend: 'up',
    icon: Users,
    color: 'bg-green-500',
  },
  {
    label: 'Completed Tasks',
    value: '156',
    change: '+23%',
    trend: 'up',
    icon: CheckCircle2,
    color: 'bg-purple-500',
  },
  {
    label: 'Revenue',
    value: '$45.2K',
    change: '+15%',
    trend: 'up',
    icon: TrendingUp,
    color: 'bg-orange-500',
  },
];

const recentProjects = [
  { id: 1, name: 'Website Redesign', client: 'Acme Corp', status: 'In Progress', progress: 65 },
  { id: 2, name: 'Mobile App', client: 'TechStart', status: 'In Progress', progress: 40 },
  { id: 3, name: 'Brand Identity', client: 'Creative Co', status: 'Review', progress: 90 },
  { id: 4, name: 'Marketing Campaign', client: 'Growth Inc', status: 'Planning', progress: 15 },
  { id: 5, name: 'E-commerce Platform', client: 'Shop Plus', status: 'In Progress', progress: 55 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl mb-2">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change} from last month</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card>
        <div className="mb-6">
          <h2 className="text-lg mb-1">Recent Projects</h2>
          <p className="text-sm text-gray-600">Overview of your active projects</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm text-gray-600">Project Name</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Client</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Progress</th>
              </tr>
            </thead>
            <tbody>
              {recentProjects.map((project) => (
                <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">{project.name}</td>
                  <td className="py-4 px-4 text-gray-600">{project.client}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs ${
                        project.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-700'
                          : project.status === 'Review'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12">{project.progress}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
