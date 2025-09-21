import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Lightbulb, 
  Code, 
  Heart, 
  Award,
  Github,
  Linkedin,
  Mail,
  Calendar,
  MapPin,
  Trophy
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import ContactForm from '../components/ContactForm';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'AI/ML Engineer',
      bio: 'Passionate about using machine learning to solve real-world problems. Specializes in NLP and recommendation systems.',
      skills: ['Python', 'TensorFlow', 'NLP', 'Data Science'],
      avatar: 'AC'
    },
    {
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      bio: 'UI/UX enthusiast with a love for creating beautiful, accessible interfaces that users love.',
      skills: ['React', 'TypeScript', 'Design Systems', 'Accessibility'],
      avatar: 'SJ'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Backend Engineer',
      bio: 'Full-stack developer focused on building scalable, secure backend systems and APIs.',
      skills: ['Node.js', 'Python', 'AWS', 'Database Design'],
      avatar: 'MR'
    },
    {
      name: 'Emily Zhang',
      role: 'Product Manager',
      bio: 'Strategic thinker who bridges the gap between technical possibilities and user needs.',
      skills: ['Product Strategy', 'User Research', 'Agile', 'Data Analysis'],
      avatar: 'EZ'
    }
  ];

  const hackathonInfo = {
    name: 'Tech Innovation Hackathon 2024',
    theme: 'AI for Social Good',
    duration: '48 hours',
    location: 'San Francisco, CA',
    participants: '500+',
    projects: '120+',
    prizes: '$50,000+'
  };

  const projectStats = [
    { number: '48', label: 'Hours of Development', icon: Clock },
    { number: '4', label: 'Team Members', icon: Users },
    { number: '6', label: 'Core Features', icon: Target },
    { number: '100%', label: 'Passion & Dedication', icon: Heart }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'AI/ML' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Figma', category: 'Design' }
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
              <Users className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Our Team
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We're a passionate team of developers, designers, and innovators who came together 
              during a 48-hour hackathon to build something that could change how people approach their careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hackathon Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built at Hackathon 2024</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This project was created during an intense 48-hour hackathon focused on using AI for social good.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(hackathonInfo).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-primary mb-2">{value}</div>
                    <div className="text-sm text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Statistics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's what we accomplished in just 48 hours of intense development.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four passionate individuals who came together to build something meaningful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <div className="text-primary font-medium mb-3">{member.role}</div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies We Used</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with modern technologies and best practices for a robust, scalable solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium">{tech.name}</div>
                    <div className="text-xs text-muted-foreground">{tech.category}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that everyone deserves access to personalized, intelligent career guidance. 
                Our mission is to democratize career development by making AI-powered career advice 
                accessible to students and professionals worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                During this hackathon, we set out to solve a real problem that affects millions of people: 
                the lack of personalized, data-driven career guidance. We're proud of what we've built 
                and excited about the potential impact it could have.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
                <Button variant="outline">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Hackathon Highlights</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Lightbulb className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Innovation</h4>
                      <p className="text-sm text-muted-foreground">
                        Combined AI, career guidance, and modern web technologies in a novel way
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Target className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        Addressed a real problem affecting millions of students and professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Award className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Excellence</h4>
                      <p className="text-sm text-muted-foreground">
                        Delivered a polished, production-ready solution in just 48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interested in our project? Want to collaborate or learn more? We'd love to hear from you!
            </p>
          </motion.div>
          
          <ContactForm />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
              <Button variant="outline" size="lg">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
