import React, { useEffect } from 'react';
import '../assets/css/landingPage.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    // Functions (previously from <script>)
    const handleTaglineClick = () => {
        alert('Learn more about our lightning-fast, low-cost, and easy-to-use platform!');
    };

    const handleStartCreating = (e) => {
        const button = e.currentTarget.closest('.primary-button');
        const buttonText = button.querySelector('.button-text');

        buttonText.textContent = 'Loading...';
        button.style.pointerEvents = 'none';

        setTimeout(() => {
            buttonText.textContent = 'Start Now';
            button.style.pointerEvents = 'auto';
            alert('Redirecting to 3D Builder interface...');
        }, 1500);
    };

    const handleGuideClick = () => {
        alert('Opening comprehensive guide for 3D asset creation...');
    };

    const handleFeatureClick = (feature) => {
        const featureMessages = {
            'no-gpu': 'Our AI-powered platform runs entirely in the cloud - no expensive GPU hardware required!',
            'images-per-session': 'Generate up to 12 high-quality 3D images in a single session for maximum productivity.',
            'low-cost': 'Create professional 3D assets for less than $0.50 per image - incredibly affordable!',
        };
        alert(featureMessages[feature] || 'Learn more about this feature!');
    };

    // Effects (replacing DOMContentLoaded and dynamic CSS)
    useEffect(() => {
        const interactiveElements = document.querySelectorAll('.primary-button, .guide-button, .feature-card, .tagline-button');

        interactiveElements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = element.classList.contains('guide-button')
                    ? 'translateX(5px)'
                    : 'translateY(-2px)';
            });
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'none';
            });
        });

        // Dynamic mobile styles
        const mobileStyles = `
      @media (max-width: 480px) {
        .nav-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: rgba(14, 14, 15, 0.95);
          flex-direction: column;
          padding: 20px;
          border-radius: 0 0 20px 20px;
        }
        .nav-menu.mobile-open {
          display: flex;
        }
        .header-container {
          position: relative;
        }
      }
    `;
        const styleSheet = document.createElement('style');
        styleSheet.textContent = mobileStyles;
        document.head.appendChild(styleSheet);

        return () => {
            document.head.removeChild(styleSheet); // Cleanup
        };
    }, []);

    return (
        <div className="main-container">
            <div className="content-column">
                {/* Header Section */}
                <div className="header-container">
                    <img className='logo' src="./images/logo.png" alt=""/>     
                    <nav className="nav-menu" role="navigation" aria-label="Main navigation">
                        <Link to="/login"  className="nav-item" tabIndex="0">Join Now</Link>
                    </nav>
                </div>

                {/* Hero Section */}
                <div className="hero-section">
                    <div className="glow-effect"></div>

                    <div className="hero-content">


                        <h1 className="main-headline">Empower Your AI with Web3</h1>
                        <p className="description">
                            Harness the synergy of artificial intelligence and blockchain to train models
                            on secure, decentralized networks. Ensure transparency, trust, and verifiable integrity at every stage of the AI lifecycle.
                        </p>

                        <div className="cta-buttons">
                            <Link to="/login"  className="primary-button">
                                <div className="primary-button-inner">
                                    <span className="button-text">Start Now</span>
                                    <img src="/images/img_arrowright.svg" alt="Arrow right" className="arrow-icon" />
                                </div>
                            </Link>

                            <a href="#guide" className="guide-button" onClick={handleGuideClick}>
                                <span className="guide-text">Marketplace</span>
                                <img src="/images/img_arrowright.svg" alt="Arrow right" className="arrow-icon" />
                            </a>
                        </div>
                    </div>

                    <img
                        src="/images/img_pikasotexttoimage35mmfilmphotographyphotoafuturisticneonligh_3.png"
                        alt="Futuristic AI Robot"
                        className="hero-image"
                    />

                    <div className="feature-cards">
                        <button className="feature-card feature-card-1" onClick={() => handleFeatureClick('no-gpu')}>
                            <span className="feature-text">No GPU needed</span>
                        </button>
                        <button className="feature-card feature-card-2" onClick={() => handleFeatureClick('images-per-session')}>
                            <span className="feature-text">Up to 12 images per session</span>
                        </button>
                        <button className="feature-card feature-card-3" onClick={() => handleFeatureClick('low-cost')}>
                            <span className="feature-text">Super low-cost (&lt;$0.5 /image)</span>
                        </button>
                    </div>
                </div>
                {/* <!-- Bottom Border --> */}
                <div class="bottom-border">
                    <div class="border-line"></div>
                    <img src="/images/img_container.svg" alt="Container background" class="container-bg" />
                </div>
            </div>
        </div>
    );
}
