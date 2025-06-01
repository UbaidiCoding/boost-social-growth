
import React, { useState } from 'react';
import { TrendingUp, CheckCircle, XCircle, Users, Eye, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const AdminPanel = () => {
  const [pendingRequests] = useState([
    {
      id: 1,
      user: 'Ahmed Khan',
      email: 'ahmed@example.com',
      plan: 'Growth - ₨1500',
      accountUrl: 'https://instagram.com/ahmed_khan',
      paymentMethod: 'EasyPaisa',
      transactionId: 'EP123456789',
      amount: 1500,
      date: '2024-01-15',
      screenshot: 'payment_screenshot.jpg'
    },
    {
      id: 2,
      user: 'Sara Ali',
      email: 'sara@example.com',
      plan: 'Starter - ₨500',
      accountUrl: 'https://facebook.com/sara.ali',
      paymentMethod: 'JazzCash',
      transactionId: 'JC987654321',
      amount: 500,
      date: '2024-01-15',
      screenshot: 'payment_proof.jpg'
    }
  ]);

  const handleApprove = (requestId: number) => {
    toast.success(`Payment request #${requestId} approved! Plan activated.`);
    console.log('Approved request:', requestId);
  };

  const handleReject = (requestId: number) => {
    toast.error(`Payment request #${requestId} rejected.`);
    console.log('Rejected request:', requestId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
      {/* Header */}
      <header className="px-4 py-6 border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">SocialBoost Pro - Admin</span>
          </div>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10"
            onClick={() => window.location.href = '/dashboard'}
          >
            Back to Dashboard
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Admin Panel</h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Pending</p>
                  <p className="text-2xl font-bold text-white">{pendingRequests.length}</p>
                </div>
                <Calendar className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Total Users</p>
                  <p className="text-2xl font-bold text-white">156</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Active Plans</p>
                  <p className="text-2xl font-bold text-white">89</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300">Revenue</p>
                  <p className="text-2xl font-bold text-white">₨45,000</p>
                </div>
                <TrendingUp className="w-8 h-8 text-pink-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Payment Requests */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Pending Payment Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div key={request.id} className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="text-white font-semibold">{request.user}</h4>
                      <p className="text-gray-300 text-sm">{request.email}</p>
                      <p className="text-gray-400 text-sm">{request.date}</p>
                    </div>
                    <div>
                      <p className="text-white font-medium">{request.plan}</p>
                      <p className="text-gray-300 text-sm">Payment: {request.paymentMethod}</p>
                      <p className="text-gray-400 text-sm">ID: {request.transactionId}</p>
                    </div>
                    <div>
                      <p className="text-white text-sm mb-2">Account URL:</p>
                      <a 
                        href={request.accountUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View Account
                      </a>
                      <p className="text-gray-400 text-sm mt-2">Screenshot: {request.screenshot}</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button 
                        onClick={() => handleApprove(request.id)}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button 
                        onClick={() => handleReject(request.id)}
                        variant="outline"
                        className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
