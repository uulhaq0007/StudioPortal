import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Plus, Search, Edit2, Trash2, Eye } from 'lucide-react';
import { Modal } from './ui/Modal';

const mockProjects = [
  { id: 1, name: 'Website Redesign', client: 'Acme Corp', status: 'In Progress', budget: '$15,000', deadline: '2026-02-15' },
  { id: 2, name: 'Mobile App', client: 'TechStart', status: 'In Progress', budget: '$25,000', deadline: '2026-03-20' },
  { id: 3, name: 'Brand Identity', client: 'Creative Co', status: 'Review', budget: '$8,000', deadline: '2026-01-30' },
  { id: 4, name: 'Marketing Campaign', client: 'Growth Inc', status: 'Planning', budget: '$12,000', deadline: '2026-04-10' },
  { id: 5, name: 'E-commerce Platform', client: 'Shop Plus', status: 'In Progress', budget: '$35,000', deadline: '2026-05-25' },
  { id: 6, name: 'Social Media Strategy', client: 'Viral Media', status: 'Completed', budget: '$6,500', deadline: '2026-01-05' },
];

export function Projects() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = mockProjects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = () => {
    // Mock delete action
    setDeleteModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div className="flex-1 max-w-md">
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search className="w-5 h-5 text-gray-400" />}
            />
          </div>
          <Button
            variant="primary"
            onClick={() => navigate('/projects/new')}
            icon={<Plus className="w-4 h-4" />}
          >
            Add Project
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm text-gray-600">Project Name</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Client</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Budget</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Deadline</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => (
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
                          : project.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{project.budget}</td>
                  <td className="py-4 px-4 text-gray-600">{project.deadline}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="View">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => navigate(`/projects/edit/${project.id}`)}
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4 text-blue-600" />
                      </button>
                      <button
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => {
                          setSelectedProject(project.id);
                          setDeleteModalOpen(true);
                        }}
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Modal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        title="Delete Project"
      >
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this project? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={() => setDeleteModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
}
