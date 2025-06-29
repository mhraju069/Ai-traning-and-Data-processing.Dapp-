import axios from 'axios'
import '../assets/css/dashboard.css'
import Alert from '../assets/toolpits/Alert';
import React, { useState, useEffect } from 'react'
import ProfileDropdown from '../assets/toolpits/profileDropdown'
import { useAuthCheck } from '../assets/toolpits/useAuthCheck';

export default function Dashboard() {
    const { isAuthenticated } = useAuthCheck();
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        role: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/profile/", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setProfileData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (isAuthenticated === false) {
            Alert("Your are not logged in.", "notAuthenticated");
        }
        console.log('isAuthenticated:',isAuthenticated)

    }, [isAuthenticated]);


    return (
        <div className="dashboard-container">
            <aside className="sidebar-dash">
                <div className="logo-dash">
                    Chain<span>Agent</span>
                </div>
                <ul className="nav-menu-dash">
                    <li className="nav-item-dash">
                        <a href="#" className="nav-link-dash active">
                            <i className="bi bi-speedometer2"></i>
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item-dash">
                        <a href="#" className="nav-link-dash">
                            <i className="bi bi-list-ul"></i>
                            Project List
                        </a>
                    </li>
                    <li className="nav-item-dash">
                        <a href="#" className="nav-link-dash">
                            <i className="bi bi-graph-up-arrow"></i>
                            Top ROI
                        </a>
                    </li>
                    <li className="nav-item-dash">
                        <a href="#" className="nav-link-dash">
                            <i className="bi bi-fire"></i>
                            Trending
                        </a>
                    </li>

                    <li className="nav-subheading">Analytics</li>

                    <li className="nav-item-dash">
                        <a href="#" className="nav-link-dash">
                            <i className="bi bi-bar-chart-line"></i>
                            Market Insights
                        </a>
                    </li>
                    <li className="nav-item-dash">
                        <a href="#" className="nav-link-dash">
                            <i className="bi bi-wallet2"></i>
                            Portfolios
                        </a>
                    </li>
                    <li className="nav-item-dash">
                        <a href="#" className="nav-link-dash active">
                            <i className="bi bi-people"></i>
                            Social Trends
                        </a>
                    </li>
                </ul>
                <div className="sidebar-footer">
                    <a href="#" className="nav-link-dash">
                        <i className="bi bi-gear"></i>
                        Settings
                    </a>
                </div>
            </aside>
            <div className="main-content-dash">
                {/* Top Navigation */}
                <nav className="top-nav-dash d-flex flex-wrap justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <button className="toggle-btn btn me-3 d-none">
                            <i className="bi bi-list"></i>
                        </button>
                        <div className="page-title">
                            <h1>Dashboard</h1>
                            <p className='fs-4'> <span className='fs-3 fw-bolder'>Hi {profileData.name} !</span> Welcome to Lab.Ai</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="search-bar">
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder="Search projects..." />
                        </div>
                        <div className="nav-actions me-3">
                            <button className="btn">
                                <i className="bi bi-arrow-clockwise"></i>
                            </button>
                            <button className="btn position-relative">
                                <i className="bi bi-bell"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    3
                                </span>
                            </button>
                        </div>
                        <ProfileDropdown />
                    </div>
                </nav>

                {/* Main Content Area */}
                <div className="container-fluid p-4" style={{ marginTop: '110px' }} >
                    {/* Stats Cards */}
                    <div className="row g-4 mb-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <div className="d-flex">
                                    <div>
                                        <div className="card-title">Market Cap</div>
                                        <div className="card-value">$2475.39B</div>
                                        <div className="card-subtitle up">
                                            <i className="bi bi-arrow-up"></i> ↑ 2.3% vs yesterday
                                        </div>
                                    </div>
                                    <div className="card-icon">
                                        <i className="bi bi-graph-up"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <div className="d-flex">
                                    <div>
                                        <div className="card-title">Bitcoin Price</div>
                                        <div className="card-value">$61284.23</div>
                                        <div className="card-subtitle up">
                                            <i className="bi bi-arrow-up"></i> ↑ 4.2% vs yesterday
                                        </div>
                                    </div>
                                    <div className="card-icon">
                                        <i className="bi bi-currency-bitcoin"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <div className="d-flex">
                                    <div>
                                        <div className="card-title">Total Value Locked</div>
                                        <div className="card-value">$46.89B</div>
                                        <div className="card-subtitle up">
                                            <i className="bi bi-arrow-up"></i> ↑ 10.2% vs yesterday
                                        </div>
                                    </div>
                                    <div className="card-icon">
                                        <i className="bi bi-currency-dollar"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card">
                                <div className="d-flex">
                                    <div>
                                        <div className="card-title">24h Trading Volume</div>
                                        <div className="card-value">$87.29B</div>
                                        <div className="card-subtitle down">
                                            <i className="bi bi-arrow-down"></i> ↓ 2.8% vs yesterday
                                        </div>
                                    </div>
                                    <div className="card-icon">
                                        <i className="bi bi-bar-chart-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TVL and Fear & Greed Index */}
                    <div className="row g-4 mb-4">
                        <div className="col-lg-8">
                            <div className="card tvl-card">
                                <div className="card-title">Total Value Locked</div>
                                <div className="tvl-value">$46.89B</div>
                                <div className="tvl-stats">
                                    <div className="tvl-stat up">
                                        <i className="bi bi-arrow-up"></i> Daily: ↑ 10.2%
                                    </div>
                                    <div className="tvl-stat up">
                                        <i className="bi bi-arrow-up"></i> Weekly: ↑ 68.7%
                                    </div>
                                </div>
                                {/* Chart placeholder */}
                                <div style={{ height: '200px', marginTop: '20px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card h-100">
                                <div className="card-title">Fear & Greed Index</div>
                                <div className="gauge-container">
                                    <div className="gauge">
                                        <div className="gauge-value">72</div>
                                    </div>
                                    <div className="gauge-label">Greed</div>
                                    <div className="gauge-change">
                                        <i className="bi bi-arrow-up me-2"></i> Yesterday: 65 ↑ 7
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trending Section */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-title">Trending</div>
                                <div className="trending-tabs">
                                    <div className="trending-tab active">All</div>
                                    <div className="trending-tab">Projects</div>
                                    <div className="trending-tab">Platforms</div>
                                    <div className="trending-tab">Funds</div>
                                </div>
                                {/* Trending content placeholder */}
                                <div style={{ height: '200px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> )
}
