import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  const features = [
    {
      icon: '🔒',
      title: 'Privacy-First',
      description: 'Advanced encryption and zero-knowledge proofs protect your data throughout the training process.'
    },
    {
      icon: '⚡',
      title: 'Fast & Secure',
      description: 'Blockchain-based transactions with instant settlement and cryptographic security guarantees.'
    },
    {
      icon: '💰',
      title: 'Tokenized Economy',
      description: 'Fair compensation for data owners and transparent pricing for AI developers.'
    },
    {
      icon: '🌐',
      title: 'Decentralized',
      description: 'No single point of failure. Distributed architecture ensures maximum uptime and reliability.'
    },
    {
      icon: '🔍',
      title: 'Transparent',
      description: 'Full audit trail of all training activities with immutable blockchain records.'
    },
    {
      icon: '🚀',
      title: 'Scalable',
      description: 'Enterprise-grade infrastructure that grows with your AI training needs.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Connect Your Wallet',
      description: 'Link your Web3 wallet and choose your role: Data Owner or AI Developer.'
    },
    {
      number: '02',
      title: 'Browse or Upload',
      description: 'Data owners upload datasets, AI developers browse available training data.'
    },
    {
      number: '03',
      title: 'Train & Earn',
      description: 'Execute privacy-preserving AI training and earn tokens for your contributions.'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Director',
      company: 'TechCorp Labs',
      content: 'This platform revolutionized how we access training data while maintaining the highest privacy standards.',
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Johnson',
      role: 'Data Scientist',
      company: 'DataFlow Inc',
      content: 'Finally, a marketplace where I can monetize my datasets without compromising sensitive information.',
      avatar: '👨‍💻'
    },
    {
      name: 'Elena Rodriguez',
      role: 'CTO',
      company: 'Neural Networks Co',
      content: 'The transparency and security features make this our go-to platform for all AI training projects.',
      avatar: '👩‍🔬'
    }
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="container py-lg-7" style={{ marginTop: '7rem' }}>
        <div className="mx-auto px-3 px-sm-4 px-lg-5" style={{ maxWidth: '112rem' /* ~7xl */ }}>
          <div className="text-center animate__animated animate__fadeInUp">
            <h1 className="display-4 display-sm-3 display-lg-1 fw-bold text-black mb-4 lh-tight">
              The Future of
              <span className="d-block">AI Training & Data Privacy</span>
            </h1>
            <p className="fs-5 text-secondary mb-5 mx-auto" style={{ maxWidth: '48rem' /* ~3xl */ }}>
              A premium marketplace where data owners and AI developers collaborate securely.
              Trade datasets, train models, and earn tokens—all while maintaining complete privacy.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <Link to="/login" className="btn btn-primary btn-lg px-4 py-2">
                Get Started Now
              </Link>
              <Link to="/marketplace" className="btn btn-outline-primary btn-lg px-4 py-2">
                Explore Marketplace
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-5 bg-white" style={{ marginTop: '9rem' }}>
        <div className="container px-3 px-sm-4 px-lg-5" style={{ maxWidth: '112rem' }}>
          <div className="text-center mb-5">
            <h2 className="h2 h-sm-1 fw-bold text-black mb-3">How It Works</h2>
            <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '42rem' }}>
              Three simple steps to start trading data and training AI models securely
            </p>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="col text-center animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="bg-black text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{ width: '4rem', height: '4rem', fontSize: '1.25rem', fontWeight: '700' }}
                >
                  {step.number}
                </div>
                <h3 className="h5 fw-semibold text-black mb-3">{step.title}</h3>
                <p className="text-secondary lh-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-5 bg-light" style={{ marginTop: '5rem' }}>
        <div className="container px-3 px-sm-4 px-lg-5" style={{ maxWidth: '112rem' }}>
          <div className="text-center mb-5">
            <h2 className="h2 fw-bold text-dark mb-3">Enterprise-Grade Features</h2>
            <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '42rem' }}>
              Built for the most demanding AI training workflows with uncompromising security
            </p>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="col animate__animated animate__zoomIn"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="p-4 h-100 shadow-sm border rounded bg-white text-center">
                  <div className="fs-2 mb-3">{feature.icon}</div>
                  <h3 className="h5 fw-semibold text-dark mb-2">{feature.title}</h3>
                  <p className="text-secondary">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-5 bg-white" style={{ marginTop: '5rem' }}>
        <div className="container px-3 px-sm-4 px-lg-5" style={{ maxWidth: '112rem' }}>
          <div className="text-center mb-5">
            <h2 className="h2 fw-bold text-dark mb-3">Trusted by Industry Leaders</h2>
            <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '42rem' }}>
              See what our users are saying about their experience
            </p>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="col animate__animated animate__fadeInRight"
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
              >
                <div className="p-4 h-100 border rounded shadow-sm bg-light">
                  <div className="d-flex align-items-center mb-3">
                    <div className="fs-2 me-3">{testimonial.avatar}</div>
                    <div>
                      <h4 className="fw-semibold text-dark mb-0">{testimonial.name}</h4>
                      <small className="text-muted d-block">{testimonial.role}</small>
                      <small className="text-muted">{testimonial.company}</small>
                    </div>
                  </div>
                  <p className="fst-italic text-secondary lh-base">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container" style={{ maxWidth: '64rem' }}>
          <h2 className="h2 fw-bold mb-4">Ready to Transform Your AI Workflow?</h2>
          <p className="fs-5 text-light mb-4">
            Join thousands of data owners and AI developers building the future of privacy-preserving machine learning.
          </p>
          <Link
            to="/login"
            className="btn btn-light btn-lg px-5 py-3 fw-medium text-dark"
          >
            Start Trading Today
          </Link>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-white border-top py-5">
        <div className="container px-3 px-sm-4 px-lg-5" style={{ maxWidth: '112rem' }}>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div>
              <div className="d-flex align-items-center mb-3">
                <div className="d-flex align-items-center justify-content-center bg-dark text-white rounded" style={{ width: '2rem', height: '2rem' }}>
                  <span className="fw-bold small">AI</span>
                </div>
                <span className="ms-2 h5 fw-bold text-dark mb-0">Lab.Ai</span>
              </div>
              <p className="text-secondary">
                The premier platform for secure AI training and data trading.
              </p>
            </div>

            <div>
              <h5 className="fw-semibold text-dark mb-3">Platform</h5>
              <ul className="list-unstyled text-secondary">
                <li><Link to="/marketplace" className="text-decoration-none text-secondary hover-link">Marketplace</Link></li>
                <li><Link to="/login" className="text-decoration-none text-secondary hover-link">Dashboard</Link></li>
                <li><a href="#" className="text-decoration-none text-secondary hover-link">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h5 className="fw-semibold text-dark mb-3">Resources</h5>
              <ul className="list-unstyled text-secondary">
                <li><a href="#" className="text-decoration-none text-secondary hover-link">Documentation</a></li>
                <li><a href="#" className="text-decoration-none text-secondary hover-link">Tutorials</a></li>
                <li><a href="#" className="text-decoration-none text-secondary hover-link">Community</a></li>
              </ul>
            </div>

            <div>
              <h5 className="fw-semibold text-dark mb-3">Company</h5>
              <ul className="list-unstyled text-secondary">
                <li><a href="#" className="text-decoration-none text-secondary hover-link">About</a></li>
                <li><a href="#" className="text-decoration-none text-secondary hover-link">Privacy</a></li>
                <li><a href="#" className="text-decoration-none text-secondary hover-link">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-top mt-5 pt-4 d-flex flex-column flex-sm-row justify-content-center align-items-center">
            <p className="text-secondary mb-2 mb-sm-0">© 2024 AI Marketplace. All rights reserved.</p>

          </div>
        </div>
      </footer>


    </>
  )
}
