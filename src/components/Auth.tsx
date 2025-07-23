import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from 'lucide-react';

interface AuthProps {
  onAuthComplete: (userData: {name: string, email: string}) => void;
  onBack: () => void;
}

export const Auth: React.FC<AuthProps> = ({ onAuthComplete, onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [users, setUsers] = useState<{[email: string]: {name: string, password: string}}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Name validation (signup only)
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation (signup only)
    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    // Login-specific validation
    if (isLogin && formData.email && !users[formData.email]) {
      newErrors.email = 'No account found with this email';
    }

    if (isLogin && formData.email && users[formData.email] && formData.password && users[formData.email].password !== formData.password) {
      newErrors.password = 'Incorrect password';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      if (isLogin) {
        // Login logic
        const userData = users[formData.email];
        console.log('Logging in user:', formData.email);
        onAuthComplete({
          name: userData.name,
          email: formData.email
        });
      } else {
        // Signup logic - store user data
        const newUsers = {
          ...users,
          [formData.email]: {
            name: formData.name,
            password: formData.password
          }
        };
        setUsers(newUsers);
        console.log('User registered:', formData.name, formData.email);
        onAuthComplete({
          name: formData.name,
          email: formData.email
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    console.log(`Logging in with ${provider}`);
    
    // Simulate social login
    setTimeout(() => {
      setIsLoading(false);
      // For social login, we'll use a default name
      onAuthComplete({
        name: `${provider} User`,
        email: `user@${provider.toLowerCase()}.com`
      });
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <button
          onClick={onBack}
          disabled={isLoading}
          className="p-2 rounded-lg bg-[#1E1E1E] border border-gray-800 hover:border-gray-700 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-[#E0E0E0]" />
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#0ABFBC] rounded-lg flex items-center justify-center text-[#121212] font-bold text-sm">
            SM
          </div>
          <span className="text-white font-semibold">SignMate</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-white mb-3">
              {isLogin ? 'Welcome back to SignMate' : 'Join SignMate'}
            </h1>
            <p className="text-[#E0E0E0] text-lg">
              {isLogin 
                ? 'Continue your ISL learning journey' 
                : 'Start your ISL learning adventure'
              }
            </p>
          </div>

          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field (Signup only) */}
            {!isLogin && (
              <div>
                <label className="block text-[#E0E0E0] font-medium mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#E0E0E0]" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full bg-[#1E1E1E] border rounded-xl pl-12 pr-4 py-4 text-white placeholder-[#E0E0E0] focus:border-[#0ABFBC] focus:ring-1 focus:ring-[#0ABFBC] focus:outline-none transition-all duration-200 ${
                      errors.name ? 'border-[#EF4444]' : 'border-gray-800'
                    }`}
                    required
                    disabled={isLoading}
                  />
                </div>
                {errors.name && (
                  <p className="text-[#EF4444] text-sm mt-1">{errors.name}</p>
                )}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-[#E0E0E0] font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#E0E0E0]" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`w-full bg-[#1E1E1E] border rounded-xl pl-12 pr-4 py-4 text-white placeholder-[#E0E0E0] focus:border-[#0ABFBC] focus:ring-1 focus:ring-[#0ABFBC] focus:outline-none transition-all duration-200 ${
                    errors.email ? 'border-[#EF4444]' : 'border-gray-800'
                  }`}
                  required
                  disabled={isLoading}
                />
              </div>
              {errors.email && (
                <p className="text-[#EF4444] text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[#E0E0E0] font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#E0E0E0]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className={`w-full bg-[#1E1E1E] border rounded-xl pl-12 pr-12 py-4 text-white placeholder-[#E0E0E0] focus:border-[#0ABFBC] focus:ring-1 focus:ring-[#0ABFBC] focus:outline-none transition-all duration-200 ${
                    errors.password ? 'border-[#EF4444]' : 'border-gray-800'
                  }`}
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#E0E0E0] hover:text-white transition-colors duration-200"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-[#EF4444] text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field (Signup only) */}
            {!isLogin && (
              <div>
                <label className="block text-[#E0E0E0] font-medium mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#E0E0E0]" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className={`w-full bg-[#1E1E1E] border rounded-xl pl-12 pr-12 py-4 text-white placeholder-[#E0E0E0] focus:border-[#0ABFBC] focus:ring-1 focus:ring-[#0ABFBC] focus:outline-none transition-all duration-200 ${
                      errors.confirmPassword ? 'border-[#EF4444]' : 'border-gray-800'
                    }`}
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#E0E0E0] hover:text-white transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-[#EF4444] text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            {/* Forgot Password (Login only) */}
            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-[#0ABFBC] hover:text-[#0ABFBC]/80 font-medium transition-colors duration-200"
                  disabled={isLoading}
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#0ABFBC] text-[#121212] py-4 rounded-xl font-semibold text-lg hover:bg-[#0ABFBC]/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-[#121212] border-t-transparent rounded-full animate-spin"></div>
              ) : (
                isLogin ? 'Sign In to SignMate' : 'Create SignMate Account'
              )}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#121212] text-[#E0E0E0]">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleSocialLogin('Google')}
                disabled={isLoading}
                className="flex items-center justify-center px-4 py-3 border border-gray-800 rounded-xl bg-[#1E1E1E] hover:border-gray-700 transition-colors duration-200 disabled:opacity-50"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-white font-medium">Google</span>
              </button>

              <button 
                onClick={() => handleSocialLogin('Facebook')}
                disabled={isLoading}
                className="flex items-center justify-center px-4 py-3 border border-gray-800 rounded-xl bg-[#1E1E1E] hover:border-gray-700 transition-colors duration-200 disabled:opacity-50"
              >
                <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-white font-medium">Facebook</span>
              </button>
            </div>
          </div>

          {/* Toggle Auth Mode */}
          <div className="mt-8 text-center">
            <p className="text-[#E0E0E0]">
              {isLogin ? "Don't have a SignMate account?" : "Already have a SignMate account?"}
              <button
                onClick={toggleAuthMode}
                disabled={isLoading}
                className="ml-2 text-[#0ABFBC] hover:text-[#0ABFBC]/80 font-semibold transition-colors duration-200"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>

          {/* Terms and Privacy (Signup only) */}
          {!isLogin && (
            <div className="mt-6 text-center">
              <p className="text-[#E0E0E0] text-sm">
                By creating an account, you agree to SignMate's{' '}
                <button className="text-[#0ABFBC] hover:text-[#0ABFBC]/80 transition-colors duration-200">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button className="text-[#0ABFBC] hover:text-[#0ABFBC]/80 transition-colors duration-200">
                  Privacy Policy
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};