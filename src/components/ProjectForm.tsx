import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from './ui/AppCard';
import { Button } from './ui/AppButton';
import { Input } from './ui/AppInput';
import { ArrowLeft } from 'lucide-react';

export function ProjectForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    name: isEdit ? 'Website Redesign' : '',
    client: isEdit ? 'Acme Corp' : '',
    status: isEdit ? 'In Progress' : 'Planning',
    budget: isEdit ? '15000' : '',
    deadline: isEdit ? '2026-02-15' : '',
    description: isEdit ? 'Complete redesign of the company website with modern UI/UX principles.' : '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock save action
    navigate('/projects');
  };

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate('/projects')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </button>

      <Card>
        <h2 className="text-xl mb-6">{isEdit ? 'Edit Project' : 'Create New Project'}</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                Project Name *
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter project name"
                required
              />
            </div>

            <div>
              <label htmlFor="client" className="block text-sm mb-2 text-gray-700">
                Client *
              </label>
              <Input
                id="client"
                type="text"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                placeholder="Enter client name"
                required
              />
            </div>

            <div>
              <label htmlFor="status" className="block text-sm mb-2 text-gray-700">
                Status *
              </label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="Planning">Planning</option>
                <option value="In Progress">In Progress</option>
                <option value="Review">Review</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm mb-2 text-gray-700">
                Budget *
              </label>
              <Input
                id="budget"
                type="number"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                placeholder="0"
                required
              />
            </div>

            <div>
              <label htmlFor="deadline" className="block text-sm mb-2 text-gray-700">
                Deadline *
              </label>
              <Input
                id="deadline"
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm mb-2 text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter project description"
              rows={4}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/projects')}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {isEdit ? 'Update Project' : 'Create Project'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
