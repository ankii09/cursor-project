import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  FileText, 
  Linkedin, 
  Brain, 
  CheckCircle, 
  ArrowRight,
  Download,
  Eye,
  Target,
  TrendingUp,
  Clock,
  Star
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const steps = [
    { id: 1, title: 'Upload Resume', description: 'Upload your resume or connect LinkedIn' },
    { id: 2, title: 'AI Analysis', description: 'Our AI analyzes your profile' },
    { id: 3, title: 'Get Results', description: 'Receive personalized recommendations' }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setCurrentStep(2);
    }
  };

  const handleLinkedInConnect = () => {
    setUploadedFile({ name: 'LinkedIn Profile', type: 'linkedin' });
    setCurrentStep(2);
  };

  const startAnalysis = () => {
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      setAnalysisComplete(true);
      setCurrentStep(3);
    }, 3000);
  };

  const mockAnalysisResults = {
    overallScore: 78,
    strengths: [
      'Strong technical background in software development',
      'Excellent problem-solving skills',
      'Good communication abilities',
      'Relevant project experience'
    ],
    improvements: [
      'Add more quantifiable achievements',
      'Include specific technologies and frameworks',
      'Expand on leadership experience',
      'Add industry-specific keywords'
    ],
    careerPaths: [
      {
        title: 'Senior Software Engineer',
        match: 85,
        timeline: '6-12 months',
        skills: ['React', 'Node.js', 'AWS', 'Leadership']
      },
      {
        title: 'Tech Lead',
        match: 72,
        timeline: '12-18 months',
        skills: ['Architecture', 'Team Management', 'System Design', 'Mentoring']
      },
      {
        title: 'Product Manager',
        match: 68,
        timeline: '18-24 months',
        skills: ['Product Strategy', 'User Research', 'Data Analysis', 'Stakeholder Management']
      }
    ],
    skillGaps: [
      { skill: 'Cloud Architecture', priority: 'High', effort: 'Medium' },
      { skill: 'Machine Learning', priority: 'Medium', effort: 'High' },
      { skill: 'DevOps', priority: 'High', effort: 'Low' },
      { skill: 'Leadership', priority: 'Medium', effort: 'Medium' }
    ]
  };

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
              Try Our AI Career Advisor
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Experience the power of AI-driven career guidance. Upload your resume or connect 
              your LinkedIn profile to get personalized insights and recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-8">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                      currentStep >= step.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step.id}
                    </div>
                    <div className="ml-4">
                      <div className={`font-semibold ${
                        currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'
                      }`}>
                        {step.title}
                      </div>
                      <div className="text-sm text-muted-foreground">{step.description}</div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-0.5 mx-4 ${
                        currentStep > step.id ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Step 1: Upload */}
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="upload"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="p-8">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-4">Upload Your Resume or Connect LinkedIn</CardTitle>
                    <p className="text-muted-foreground">
                      Choose how you'd like to provide your professional information
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Resume Upload */}
                      <div className="space-y-4">
                        <div className="text-center">
                          <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
                          <h3 className="text-xl font-semibold mb-2">Upload Resume</h3>
                          <p className="text-muted-foreground mb-4">
                            Upload your resume in PDF, DOC, or DOCX format
                          </p>
                        </div>
                        <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                          <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="resume-upload"
                          />
                          <label
                            htmlFor="resume-upload"
                            className="cursor-pointer"
                          >
                            <Button variant="outline" className="w-full">
                              Choose File
                            </Button>
                          </label>
                          <p className="text-sm text-muted-foreground mt-2">
                            PDF, DOC, or DOCX up to 10MB
                          </p>
                        </div>
                      </div>

                      {/* LinkedIn Connect */}
                      <div className="space-y-4">
                        <div className="text-center">
                          <Linkedin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                          <h3 className="text-xl font-semibold mb-2">Connect LinkedIn</h3>
                          <p className="text-muted-foreground mb-4">
                            Import your LinkedIn profile automatically
                          </p>
                        </div>
                        <Button
                          onClick={handleLinkedInConnect}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          Connect LinkedIn Profile
                        </Button>
                        <p className="text-sm text-muted-foreground text-center">
                          Secure OAuth connection - we only read your public profile
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 2: Processing */}
            {currentStep === 2 && (
              <motion.div
                key="processing"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="p-8">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-4">AI Analysis in Progress</CardTitle>
                    <p className="text-muted-foreground">
                      Our AI is analyzing your profile and generating personalized recommendations
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-8">
                      <div className="relative">
                        <Brain className="h-24 w-24 text-primary mx-auto animate-pulse" />
                        {isProcessing && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Analyzing your profile...</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Parsing resume content</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Extracting skills and experience</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {isProcessing ? (
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                            ) : (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            )}
                            <span className="text-sm">Generating career recommendations</span>
                          </div>
                        </div>
                      </div>

                      {!isProcessing && (
                        <Button onClick={startAnalysis} size="lg">
                          Start AI Analysis
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 3: Results */}
            {currentStep === 3 && analysisComplete && (
              <motion.div
                key="results"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto space-y-8"
              >
                {/* Overall Score */}
                <Card className="p-8">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-4">Analysis Complete!</CardTitle>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-6xl font-bold text-primary">{mockAnalysisResults.overallScore}</div>
                      <div className="text-left">
                        <div className="text-2xl font-semibold">Overall Score</div>
                        <div className="text-muted-foreground">out of 100</div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Strengths */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span>Strengths</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {mockAnalysisResults.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                            <span className="text-sm">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Improvements */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Target className="h-5 w-5 text-orange-600" />
                        <span>Areas for Improvement</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {mockAnalysisResults.improvements.map((improvement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2" />
                            <span className="text-sm">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Career Paths */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span>Recommended Career Paths</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {mockAnalysisResults.careerPaths.map((path, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold">{path.title}</h4>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <span className="text-sm font-medium">{path.match}%</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{path.timeline}</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {path.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Skill Gaps */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-purple-600" />
                      <span>Skill Gaps to Address</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockAnalysisResults.skillGaps.map((gap, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <div className="font-medium">{gap.skill}</div>
                            <div className="text-sm text-muted-foreground">
                              Priority: {gap.priority} • Effort: {gap.effort}
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Learn More
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    Download Full Report
                  </Button>
                  <Button variant="outline" size="lg">
                    <Eye className="mr-2 h-5 w-5" />
                    View Detailed Analysis
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Demo;
