import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const Home = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  return (
    <Layout isLoggedIn={isLoggedIn} onLogout={onLogout}>
      <div className="py-12 text-center">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
          Welcome to GLB.Connect
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          Connect with others through secure messaging, with options for anonymous communication. 
          Share ideas and build relationships in a safe environment.
        </p>
        
        {isLoggedIn ? (
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button 
              size="lg" 
              onClick={() => navigate('/messages')}
            >
              Go to Messages
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate('/profile')}
            >
              View Profile
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button 
              size="lg" 
              onClick={() => navigate('/register')}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
          </div>
        )}
      </div>
      
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <FeatureCard 
          title="Direct Messaging"
          description="Connect with others directly through private messaging."
          icon={
            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          }
        />
        <FeatureCard 
          title="Anonymous Messages"
          description="Send messages anonymously when you want to keep your identity private."
          icon={
            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        />
        <FeatureCard 
          title="Secure Communication"
          description="All messages are encrypted for your security and privacy."
          icon={
            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          }
        />
      </div>
    </Layout>
  );
};

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home; 