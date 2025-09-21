import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Brain, 
  Cloud, 
  Smartphone, 
  Server, 
  Shield, 
  Zap, 
  Layers,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Architecture = () => {
  const layers = [
    {
      name: 'Presentation Layer',
      icon: Smartphone,
      description: 'React-based responsive web application with modern UI/UX',
      components: ['React Frontend', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      color: 'bg-blue-500'
    },
    {
      name: 'API Gateway',
      icon: Layers,
      description: 'Centralized entry point for all client requests and authentication',
      components: ['REST API', 'Authentication', 'Rate Limiting', 'Request Routing'],
      color: 'bg-green-500'
    },
    {
      name: 'AI Processing Engine',
      icon: Brain,
      description: 'Core AI/ML services for career analysis and recommendations',
      components: ['NLP Models', 'Career Analysis', 'Skill Matching', 'Recommendation Engine'],
      color: 'bg-purple-500'
    },
    {
      name: 'Data Processing',
      icon: Zap,
      description: 'Real-time data processing and job market analysis',
      components: ['Data Pipeline', 'Market Analysis', 'Trend Detection', 'Real-time Updates'],
      color: 'bg-orange-500'
    },
    {
      name: 'Data Storage',
      icon: Database,
      description: 'Secure storage for user profiles, job data, and analytics',
      components: ['User Profiles', 'Job Database', 'Analytics Data', 'Backup Systems'],
      color: 'bg-red-500'
    },
    {
      name: 'External Services',
      icon: Cloud,
      description: 'Integration with external APIs and third-party services',
      components: ['LinkedIn API', 'Job Boards', 'Salary Data', 'Learning Platforms'],
      color: 'bg-indigo-500'
    }
  ];

  const techStack = [
    {
      category: 'Frontend',
      technologies: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'React Router']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs']
    },
    {
      category: 'AI/ML',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI GPT', 'Hugging Face', 'scikit-learn']
    },
    {
      category: 'Database',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Vector DB']
    },
    {
      category: 'Infrastructure',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Nginx', 'CloudFront']
    },
    {
      category: 'Security',
      technologies: ['JWT', 'OAuth 2.0', 'HTTPS', 'Data Encryption', 'GDPR Compliance']
    }
  ];

  const features = [
    {
      title: 'Scalable Architecture',
      description: 'Microservices-based design that scales horizontally to handle growing user demand',
      icon: Server
    },
    {
      title: 'Real-time Processing',
      description: 'Stream processing capabilities for instant analysis and recommendations',
      icon: Zap
    },
    {
      title: 'Data Security',
      description: 'End-to-end encryption and compliance with data protection regulations',
      icon: Shield
    },
    {
      title: 'AI Integration',
      description: 'Seamless integration of multiple AI models for comprehensive analysis',
      icon: Brain
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
              <Layers className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              System Architecture
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Built on a robust, scalable architecture that combines modern web technologies 
              with cutting-edge AI to deliver personalized career guidance at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">System Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform is built on a modern, cloud-native architecture designed for scalability, 
              reliability, and performance.
            </p>
          </motion.div>

          {/* Architecture Diagram Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-background to-muted/50 rounded-2xl p-8 border-2 border-dashed border-primary/30">
              <div className="text-center mb-8">
                <Layers className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Architecture Diagram</h3>
                <p className="text-muted-foreground">
                  Interactive system architecture visualization would be displayed here
                </p>
              </div>
              
              {/* Simplified Architecture Visualization */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {layers.map((layer, index) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${layer.color}`} />
                          <CardTitle className="text-lg">{layer.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{layer.description}</p>
                        <div className="space-y-1">
                          {layer.components.map((component, compIndex) => (
                            <div key={compIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              <span className="text-xs text-muted-foreground">{component}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Connection Arrow */}
                    {index < layers.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-primary/50" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with modern, industry-standard technologies to ensure reliability, 
              performance, and maintainability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{tech}</span>
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

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Architecture Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our architecture is designed to provide maximum performance, scalability, and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <feature.icon className="h-8 w-8 text-primary mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Data Flow & Processing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding how data flows through our system to deliver personalized career insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Processing Pipeline</h3>
                  <p className="text-muted-foreground">
                    From data ingestion to personalized recommendations
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {[
                    'Data Ingestion',
                    'Preprocessing',
                    'AI Analysis',
                    'Recommendation',
                    'Delivery'
                  ].map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                        {index + 1}
                      </div>
                      <div className="text-sm font-medium">{step}</div>
                      {index < 4 && (
                        <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-primary/30 transform translate-x-2" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Architecture;
