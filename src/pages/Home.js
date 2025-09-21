import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Target, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your profile and provide personalized insights.'
    },
    {
      icon: Target,
      title: 'Career Path Planning',
      description: 'Get clear, actionable roadmaps tailored to your goals and current skill set.'
    },
    {
      icon: Zap,
      title: 'Real-time Insights',
      description: 'Stay updated with the latest job market trends and skill requirements.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                AI-Powered Career & Skills Advisor
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transform your career journey with intelligent guidance, personalized roadmaps, and real-time market insights powered by cutting-edge AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/demo">
                    Try Demo Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/solution">
                    Learn More
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
        />
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our AI Advisor?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines advanced AI technology with human expertise to provide you with the most comprehensive career guidance available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <feature.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals who have already discovered their ideal career path with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/demo">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/about">
                  Learn About Our Team
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
