import React, { useEffect, useState } from 'react';
import { BrowserProvider } from 'ethers';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/login.css';
import Alert from '../assets/toolpits/Alert';

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [isConnecting, setIsConnecting] = useState(false);
  const [role, setRole] = useState(null);
  const [access, setAccess] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [addrs, setAddrs] = useState('');
  const [isNewUser, setIsNewUser] = useState();

  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const Connect = async () => {
    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWallet(address);
      setAddrs(address.toString().slice(0, 6) + '...' + address.toString().slice(-4));

      console.log("Attempting to get nonce for address:", address);

      const nonceRes = await axios.post(
        "http://localhost:8000/api/nonce/",
        { wallet: address }
      );

      console.log("Nonce response:", nonceRes.data);
      setIsNewUser(nonceRes.data.is_new_user);



      const nonce = String(nonceRes.data.nonce);
      const signature = await signer.signMessage(nonce);

      const response = await axios.post(
        "http://localhost:8000/api/verify-signature/",
        {
          wallet: address,
          signature: signature,
        }
      );

      localStorage.setItem('token', response.data.access);
      console.log("Wallet connected successfully");
      if (!nonceRes.data.is_new_user) {
        Alert("Login Successful", "success")
        navigate('/dashboard');
      }

    } catch (error) {
      console.error("Detailed error:", error);
      alert(`Failed to connect wallet: ${error.message}`);
    }
  }

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateRes = await axios.post(
        "http://localhost:8000/api/update-user/", { wallet: wallet, name: profileData.name, email: profileData.email, role: role })
      Alert("Sign Up Successful", "success")
      navigate('/dashboard');
    } catch (error) {
      console.log(error)
    }

  };

  useEffect(() => {
    const redirectIfAuthenticated = async () => {
      const token = localStorage.getItem('token');
      if (token && location.pathname === '/login') {  // Only redirect if on login page
        try {
          const res = await axios.get('http://localhost:8000/api/check-authentication/', {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.status === 200) {
            navigate('/dashboard');
          }
          console.log(res.status)
        } catch (err) {
          console.log("Token invalid or expired");
          localStorage.removeItem('token');
          navigate('/login', { state: { from: location } });
        }
      }
    };

    redirectIfAuthenticated();
  }, [navigate, location]);




  return (
    <div className="login-page">
      <div class="login-container">
        <div class="logo-login">
          <img src="/images/logo.png" alt="" />
          <p>"Sign In to Shape the Future of Intelligence"</p>
        </div>

        {!wallet &&
          <div class="wallet-connect">
            <button class="wallet-btn" onClick={Connect}>
              <i>🦊</i> Connect with MetaMask
            </button>
            <div class="divider">or</div>
            <button class="wallet-btn" onClick={Connect}>
              <i>🔗</i> Connect with WalletConnect
            </button>
          </div>
        }

        {isNewUser && <form onSubmit={handleProfileSubmit}>
          <div class="form-group">
            <label for="name">👤 Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" value={profileData.name || ''} onChange={(e) => setProfileData({ ...profileData, name: e.target.value })} required />
          </div>

          <div class="form-group">
            <label for="email">✉️ Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" value={profileData.email || ''} onChange={(e) => setProfileData({ ...profileData, email: e.target.value })} required />
          </div>

          <div class="checkbox-group">
            <label>🔘 Select your role:</label>

            <div class="checkbox-option">
              <input type="checkbox" id="data-owner" name="role" value="data_owner" checked={role === 'data_owner'} onChange={(e) => setRole(e.target.value)} />
              <label for="data-owner">📊 Data Owner</label>
            </div>

            <div class="checkbox-option">
              <input type="checkbox" id="ai-developer" name="role" value="ai_developer" checked={role === 'ai_developer'} onChange={(e) => setRole(e.target.value)} />
              <label for="ai-developer">🤖 AI Developer</label>
            </div>
          </div>

          <button type="submit" class="submit-btn">🚀 Sign Up</button>
        </form>}
      </div>

    </div>
  );
};

export default Login;
