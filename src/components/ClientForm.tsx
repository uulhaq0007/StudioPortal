import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from './ui/AppCard';
import { Button } from './ui/AppButton';
import { Input } from './ui/AppInput';
import { ArrowLeft } from 'lucide-react';

export function ClientForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    name: isEdit ? 'Acme Corp' : '',
    contact: isEdit ? 'John Smith' : '',
    email: isEdit ? 'john@acme.com' : '',
    phone: isEdit ? '(555) 123-4567' : '',
    address: isEdit ? '123 Business St, Suite 100' : '',
    city: isEdit ? 'New York' : '',
    state: isEdit ? 'NY' : '',
    zip: isEdit ? '10001' : '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock save action
    navigate('/clients');
  };

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate('/clients')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Clients
      </button>

      <Card>
        <h2 className="text-xl mb-6">{isEdit ? 'Edit Client' : 'Add New Client'}</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                Company Name *
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter company name"
                required
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-sm mb-2 text-gray-700">
                Contact Person *
              </label>
              <Input
                id="contact"
                type="text"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                placeholder="Enter contact name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                Phone *
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(555) 123-4567"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm mb-2 text-gray-700">
                Address
              </label>
              <Input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Street address"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm mb-2 text-gray-700">
                City
              </label>
              <Input
                id="city"
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="City"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="state" className="block text-sm mb-2 text-gray-700">
                  State
                </label>
                <Input
                  id="state"
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  placeholder="ST"
                />
              </div>

              <div>
                <label htmlFor="zip" className="block text-sm mb-2 text-gray-700">
                  ZIP
                </label>
                <Input
                  id="zip"
                  type="text"
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  placeholder="12345"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/clients')}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {isEdit ? 'Update Client' : 'Add Client'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
