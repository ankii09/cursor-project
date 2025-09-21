import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Users, Target, TrendingDown, Clock, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Problem = () => {
  const challenges = [
    {
      icon: Target,
      title: 'Unclear Career Direction',
      description: 'Students often struggle to identify their true passions and align them with viable career paths, leading to confusion and poor career choices.',
      stats: '73% of students change their major at least once'
    },
    {
      icon: BookOpen,
      title: 'Skill Gap Awareness',
      description: 'Many students graduate without understanding which skills are actually in demand in their chosen field, creating a mismatch between education and industry needs.',
      stats: '60% of graduates feel unprepared for their first job'
    },
    {
      icon: TrendingDown,
      title: 'Outdated Career Guidance',
      description: 'Traditional career counseling relies on static information and personal experience, failing to keep up with rapidly changing job markets and emerging roles.',
      stats: 'Job market changes 40% faster than career guidance updates'
    },
    {
      icon: Users,
      title: 'Limited Personalization',
      description: 'One-size-fits-all career advice doesn\'t account for individual strengths, interests, and unique circumstances, leading to generic and ineffective guidance.',
      stats: '85% of students receive generic career advice'
    },
    {
      icon: Clock,
      title: 'Time-Intensive Process',
      description: 'Students spend countless hours researching careers, skills, and opportunities without a structured approach, leading to inefficient use of time and energy.',
      stats: 'Average student spends 200+ hours on career research'
    },
    {
      icon: AlertTriangle,
      title: 'Lack of Real-Time Insights',
      description: 'Career guidance often relies on outdated information, missing current market trends, salary data, and emerging opportunities in the job market.',
      stats: '70% of career advice is based on outdated information'
    }
  ];

  const impactStats = [
    { number: '2.5M', label: 'Students graduate annually with unclear career paths' },
    { number: '40%', label: 'Of graduates work in fields unrelated to their degree' },
    { number: '$50K', label: 'Average cost of career misalignment over 10 years' },
    { number: '18 months', label: 'Average time to find a suitable career path' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-destructive/5 to-orange-500/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <AlertTriangle className="h-16 w-16 text-destructive" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Career Guidance Crisis
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Students and young professionals face unprecedented challenges in navigating their career paths, 
              leading to wasted potential, misaligned choices, and lost opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Numbers Don't Lie</h2>
            <p className="text-lg text-muted-foreground">Current career guidance systems are failing students nationwide</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Challenges */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Challenges Students Face</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The traditional approach to career guidance is fundamentally broken. Here are the critical issues 
              that prevent students from making informed career decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <challenge.icon className="h-8 w-8 text-destructive" />
                      <CardTitle className="text-xl">{challenge.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {challenge.description}
                    </p>
                    <div className="bg-destructive/10 text-destructive text-sm font-medium px-3 py-2 rounded-md">
                      {challenge.stats}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              It's Time for a Solution
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              The current system is failing students. We need an intelligent, personalized, and data-driven approach 
              to career guidance that adapts to the modern job market and individual needs.
            </p>
            <div className="bg-background/50 backdrop-blur-sm border rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">The Solution is Clear</h3>
              <p className="text-lg text-muted-foreground">
                We need an AI-powered platform that provides personalized career guidance, real-time market insights, 
                and adaptive learning paths tailored to each individual's unique profile and aspirations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Problem;
