import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Plus, Search, Edit2, Trash2, Mail, Phone } from 'lucide-react';

const mockClients = [
  { id: 1, name: 'Acme Corp', contact: 'John Smith', email: 'john@acme.com', phone: '(555) 123-4567', projects: 3 },
  { id: 2, name: 'TechStart', contact: 'Sarah Johnson', email: 'sarah@techstart.com', phone: '(555) 234-5678', projects: 2 },
  { id: 3, name: 'Creative Co', contact: 'Mike Brown', email: 'mike@creative.co', phone: '(555) 345-6789', projects: 4 },
  { id: 4, name: 'Growth Inc', contact: 'Emily Davis', email: 'emily@growth.inc', phone: '(555) 456-7890', projects: 1 },
  { id: 5, name: 'Shop Plus', contact: 'David Wilson', email: 'david@shopplus.com', phone: '(555) 567-8901', projects: 2 },
  { id: 6, name: 'Viral Media', contact: 'Lisa Anderson', email: 'lisa@viral.media', phone: '(555) 678-9012', projects: 5 },
];

export function Clients() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = mockClients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div className="flex-1 max-w-md">
            <Input
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search className="w-5 h-5 text-gray-400" />}
            />
          </div>
          <Button
            variant="primary"
            onClick={() => navigate('/clients/new')}
            icon={<Plus className="w-4 h-4" />}
          >
            Add Client
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm text-gray-600">Company Name</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Contact Person</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Email</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Phone</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Projects</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">{client.name}</td>
                  <td className="py-4 px-4 text-gray-600">{client.contact}</td>
                  <td className="py-4 px-4">
                    <a href={`mailto:${client.email}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                      <Mail className="w-4 h-4" />
                      {client.email}
                    </a>
                  </td>
                  <td className="py-4 px-4">
                    <a href={`tel:${client.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-700">
                      <Phone className="w-4 h-4" />
                      {client.phone}
                    </a>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                      {client.projects} active
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => navigate(`/clients/edit/${client.id}`)}
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4 text-blue-600" />
                      </button>
                      <button
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
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
    </div>
  );
}
