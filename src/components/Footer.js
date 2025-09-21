import React from 'react';
import { Brain, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">AI Career Advisor</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering students and professionals with AI-driven career guidance and skill development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/problem" className="text-muted-foreground hover:text-primary transition-colors">Problem</a></li>
              <li><a href="/solution" className="text-muted-foreground hover:text-primary transition-colors">Solution</a></li>
              <li><a href="/demo" className="text-muted-foreground hover:text-primary transition-colors">Demo</a></li>
            </ul>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold">Features</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Resume Analyzer</li>
              <li className="text-muted-foreground">Career Path Visualizer</li>
              <li className="text-muted-foreground">Skill Gap Detector</li>
              <li className="text-muted-foreground">Mock Interview Assistant</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold">Contact</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground"
        >
          <p>&copy; 2024 AI-Powered Career & Skills Advisor. Built for Hackathon 2024.</p>
          <p className="mt-2">Empowering the next generation of professionals with AI.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
