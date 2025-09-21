import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Network, 
  Target, 
  Map, 
  Mic, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Solution = () => {
  const features = [
    {
      icon: FileText,
      title: 'Resume Analyzer',
      description: 'AI-powered analysis of your resume with detailed feedback on formatting, content, and ATS optimization.',
      benefits: ['ATS Score Improvement', 'Content Optimization', 'Format Enhancement', 'Keyword Analysis'],
      color: 'text-blue-600'
    },
    {
      icon: Network,
      title: 'Career Path Visualizer',
      description: 'Interactive career roadmap showing progression paths, required skills, and timeline to reach your goals.',
      benefits: ['Visual Roadmaps', 'Skill Progression', 'Timeline Planning', 'Multiple Paths'],
      color: 'text-green-600'
    },
    {
      icon: Target,
      title: 'Skill Gap Detector',
      description: 'Identifies missing skills for your target role and provides personalized learning recommendations.',
      benefits: ['Gap Analysis', 'Learning Paths', 'Skill Assessment', 'Progress Tracking'],
      color: 'text-purple-600'
    },
    {
      icon: Map,
      title: 'Roadmap Generator',
      description: 'Creates detailed, personalized career roadmaps with milestones, deadlines, and actionable steps.',
      benefits: ['Personalized Plans', 'Milestone Tracking', 'Deadline Management', 'Action Items'],
      color: 'text-orange-600'
    },
    {
      icon: Mic,
      title: 'Mock Interview Assistant',
      description: 'AI-powered interview preparation with practice questions, feedback, and performance analytics.',
      benefits: ['Practice Sessions', 'Real-time Feedback', 'Performance Analytics', 'Question Bank'],
      color: 'text-red-600'
    },
    {
      icon: TrendingUp,
      title: 'Job Market Insights',
      description: 'Real-time data on salary trends, job availability, and emerging skills in your field.',
      benefits: ['Salary Data', 'Market Trends', 'Job Availability', 'Skill Demand'],
      color: 'text-indigo-600'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Profile Analysis',
      description: 'Upload your resume or connect LinkedIn for comprehensive profile analysis'
    },
    {
      step: '02',
      title: 'AI Processing',
      description: 'Advanced algorithms analyze your skills, experience, and career goals'
    },
    {
      step: '03',
      title: 'Personalized Insights',
      description: 'Receive detailed recommendations and personalized career guidance'
    },
    {
      step: '04',
      title: 'Action Plan',
      description: 'Get a clear roadmap with actionable steps to achieve your career goals'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <Brain className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our AI-Powered Solution
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Transform your career journey with intelligent guidance, personalized roadmaps, 
              and real-time insights powered by cutting-edge artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform uses advanced AI to provide personalized career guidance in just four simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/30 transform translate-x-4" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI-powered tools designed to guide every aspect of your career development journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Our AI Solution Works
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform combines the power of artificial intelligence with human expertise 
                to provide personalized, data-driven career guidance that adapts to your unique needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Real-Time Adaptation</h3>
                    <p className="text-muted-foreground">Our AI continuously learns and adapts to market changes and your progress.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Brain className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Personalized Insights</h3>
                    <p className="text-muted-foreground">Every recommendation is tailored to your specific profile and career goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Actionable Guidance</h3>
                    <p className="text-muted-foreground">Get clear, step-by-step instructions to achieve your career objectives.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Success Metrics</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">95%</div>
                    <div className="text-muted-foreground">User Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">3x</div>
                    <div className="text-muted-foreground">Faster Career Progression</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">87%</div>
                    <div className="text-muted-foreground">Goal Achievement Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the power of AI-driven career guidance. Start your journey today and discover 
              your true potential with personalized insights and actionable roadmaps.
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="/demo">
                Try Our Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
