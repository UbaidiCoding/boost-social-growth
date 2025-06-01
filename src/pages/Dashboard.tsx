
import React, { useState } from 'react';
import { TrendingUp, Users, Play, CreditCard, Upload, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Dashboard = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);

  const plans = [
    { id: '1', name: 'Starter', price: 500, features: ['1K Followers', '500 Views', '30 Days Active'] },
    { id: '2', name: 'Growth', price: 1500, features: ['5K Followers', '2.5K Views', '60 Days Active'] },
    { id: '3', name: 'Pro', price: 5000, features: ['20K Followers', '10K Views', '90 Days Active'] }
  ];

  const paymentMethods = [
    { id: 'easypaisa', name: 'EasyPaisa', number: '+92 300 1234567' },
    { id: 'jazzcash', name: 'JazzCash', number: '+92 301 7654321' },
    { id: 'bank', name: 'Bank Transfer', number: 'ACC: 1234567890123' },
    { id: 'binance', name: 'Binance Pay', number: 'ID: user@email.com' }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setScreenshot(file);
      toast.success('Screenshot uploaded successfully!');
    }
  };

  const handleSubmitPayment = () => {
    if (!selectedPlan || !paymentMethod || !transactionId || !screenshot) {
      toast.error('Please fill all required fields');
      return;
    }
    toast.success('Payment submitted for verification. Status: Pending');
    console.log('Payment submission:', { selectedPlan, paymentMethod, transactionId, screenshot });
  };

  const selectedPlanData = plans.find(p => p.id === selectedPlan);
  const selectedPaymentData = paymentMethods.find(p => p.id === paymentMethod);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
      {/* Header */}
      <header className="px-4 py-6 border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">SocialBoost Pro</span>
          </div>
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Logout
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Demo Account Stats */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Demo Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-pink-400" />
                    <span className="text-gray-300">Followers</span>
                  </div>
                  <span className="text-white font-bold">10,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Play className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Views</span>
                  </div>
                  <span className="text-white font-bold">5,000</span>
                </div>
              </CardContent>
            </Card>

            {/* Current Plan Status */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Current Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <p className="text-gray-300">No active plan</p>
                  <p className="text-sm text-gray-400 mt-2">Purchase a plan to get started</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Purchase Plan */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="w-6 h-6 mr-2" />
                  Purchase Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Plan Selection */}
                <div>
                  <label className="block text-white font-medium mb-2">Select Plan</label>
                  <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Choose a plan" />
                    </SelectTrigger>
                    <SelectContent>
                      {plans.map(plan => (
                        <SelectItem key={plan.id} value={plan.id}>
                          {plan.name} - ₨{plan.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedPlanData && (
                    <div className="mt-3 p-4 bg-white/5 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">{selectedPlanData.name} Plan</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {selectedPlanData.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                      <p className="text-2xl font-bold text-white mt-3">₨{selectedPlanData.price}</p>
                    </div>
                  )}
                </div>

                {/* Payment Method Selection */}
                {selectedPlan && (
                  <div>
                    <label className="block text-white font-medium mb-2">Payment Method</label>
                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white">
                        <SelectValue placeholder="Choose payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        {paymentMethods.map(method => (
                          <SelectItem key={method.id} value={method.id}>
                            {method.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {selectedPaymentData && (
                      <div className="mt-3 p-4 bg-white/5 rounded-lg">
                        <h4 className="text-white font-semibold">{selectedPaymentData.name}</h4>
                        <p className="text-gray-300">{selectedPaymentData.number}</p>
                        <div className="flex items-center space-x-2 mt-3 p-3 bg-green-500/20 rounded-lg">
                          <MessageCircle className="w-5 h-5 text-green-400" />
                          <div>
                            <p className="text-white font-medium">WhatsApp Support</p>
                            <p className="text-green-400 text-sm">+92 300 1234567</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Payment Proof Upload */}
                {paymentMethod && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Transaction ID</label>
                      <Input
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        placeholder="Enter transaction ID"
                        className="bg-white/20 border-white/30 text-white placeholder-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Payment Screenshot</label>
                      <div className="border-2 border-dashed border-white/30 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-300 mb-2">Upload payment screenshot</p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="screenshot-upload"
                        />
                        <label htmlFor="screenshot-upload">
                          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                            <span>Choose File</span>
                          </Button>
                        </label>
                        {screenshot && (
                          <p className="text-green-400 mt-2">✓ {screenshot.name}</p>
                        )}
                      </div>
                    </div>
                    <Button 
                      onClick={handleSubmitPayment}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                    >
                      Submit Payment for Verification
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
