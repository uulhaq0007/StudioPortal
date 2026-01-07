import { useState } from 'react';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Search, CheckCircle2, Circle, Clock } from 'lucide-react';

const mockTasks = [
  { id: 1, title: 'Design homepage mockup', project: 'Website Redesign', priority: 'High', status: 'In Progress', dueDate: '2026-01-10' },
  { id: 2, title: 'Client meeting preparation', project: 'Mobile App', priority: 'Medium', status: 'To Do', dueDate: '2026-01-08' },
  { id: 3, title: 'Review brand guidelines', project: 'Brand Identity', priority: 'Low', status: 'Completed', dueDate: '2026-01-05' },
  { id: 4, title: 'Create social media assets', project: 'Marketing Campaign', priority: 'High', status: 'In Progress', dueDate: '2026-01-12' },
  { id: 5, title: 'Database schema design', project: 'E-commerce Platform', priority: 'High', status: 'To Do', dueDate: '2026-01-15' },
  { id: 6, title: 'User testing session', project: 'Mobile App', priority: 'Medium', status: 'In Progress', dueDate: '2026-01-09' },
  { id: 7, title: 'Final deliverables', project: 'Brand Identity', priority: 'High', status: 'Completed', dueDate: '2026-01-04' },
];

export function Tasks() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'todo' | 'inprogress' | 'completed'>('all');

  const filteredTasks = mockTasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.project.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'todo') return matchesSearch && task.status === 'To Do';
    if (filter === 'inprogress') return matchesSearch && task.status === 'In Progress';
    if (filter === 'completed') return matchesSearch && task.status === 'Completed';
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div className="flex-1 max-w-md">
            <Input
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search className="w-5 h-5 text-gray-400" />}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('todo')}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                filter === 'todo' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              To Do
            </button>
            <button
              onClick={() => setFilter('inprogress')}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                filter === 'inprogress' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <button className="flex-shrink-0">
                {task.status === 'Completed' ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                ) : task.status === 'In Progress' ? (
                  <Clock className="w-6 h-6 text-blue-600" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-400" />
                )}
              </button>
              
              <div className="flex-1">
                <h3 className={`mb-1 ${task.status === 'Completed' ? 'line-through text-gray-500' : ''}`}>
                  {task.title}
                </h3>
                <p className="text-sm text-gray-600">{task.project}</p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    task.priority === 'High'
                      ? 'bg-red-100 text-red-700'
                      : task.priority === 'Medium'
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {task.priority}
                </span>
                <span className="text-sm text-gray-600">{task.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
