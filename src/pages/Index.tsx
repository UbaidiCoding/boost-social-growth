
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, TrendingUp, Shield, Award, CheckCircle, Play, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const plans = [
    { id: 1, price: 500, name: 'Starter', features: ['1K Followers', '500 Views', '30 Days Active'] },
    { id: 2, price: 1500, name: 'Growth', features: ['5K Followers', '2.5K Views', '60 Days Active'], popular: true },
    { id: 3, price: 5000, name: 'Pro', features: ['20K Followers', '10K Views', '90 Days Active'] }
  ];

  const reviews = [
    { name: 'Ahmed Khan', rating: 5, text: 'Amazing service! Got 5000 real followers in just 2 days.' },
    { name: 'Sara Ali', rating: 5, text: 'Best investment for my business. Highly recommended!' },
    { name: 'Muhammad Hassan', rating: 4, text: 'Great results and excellent customer support.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">SocialBoost Pro</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:bg-white/10">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-white text-sm">#1 Growth Platform</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white text-sm">100% Safe & Secure</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-white text-sm">50K+ Happy Clients</span>
            </div>
          </div>

          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Boost Your Social Media
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> Growth</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get real followers, views, and engagement for Instagram, Facebook, YouTube, and TikTok. 
            Trusted by 50,000+ influencers and businesses worldwide.
          </p>

          {/* Star Rating */}
          <div className="flex justify-center items-center space-x-2 mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white text-lg font-semibold">4.9/5</span>
            <span className="text-gray-300">(2,450+ reviews)</span>
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-6">
                Start Growing Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-6">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <Instagram className="w-8 h-8 text-pink-400" />
            <Facebook className="w-8 h-8 text-blue-400" />
            <Youtube className="w-8 h-8 text-red-400" />
            <Twitter className="w-8 h-8 text-blue-300" />
          </div>
        </div>
      </section>

      {/* Demo Account Section */}
      <section className="px-4 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">See Real Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">10,000+</h3>
                <p className="text-gray-300">Real Followers</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <Play className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">5,000+</h3>
                <p className="text-gray-300">Video Views</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Choose Your Growth Plan</h2>
          <p className="text-gray-300 text-center mb-12">Start with any plan and upgrade as you grow</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.popular ? 'border-pink-500 border-2' : 'border-white/20'} bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">₨{plan.price}</span>
                    <span className="text-gray-300">/package</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/register">
                    <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-pink-500 to-purple-600' : 'bg-white/20'} hover:bg-white/30`}>
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="px-4 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{review.text}"</p>
                  <p className="text-white font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">SocialBoost Pro</span>
          </div>
          <p className="text-gray-300">© 2024 SocialBoost Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
