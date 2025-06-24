import React, { useState } from 'react';
import { BrowserProvider } from 'ethers';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [wallet, setWallet] = useState(false); // 'wallet', 'role', 'profile'
  const [isConnecting, setIsConnecting] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    organization: ''
  });




  const connect = async () => {
    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = signer.getAddress();
      setWallet(address);

    } catch (error) {
      console.error("Error connecting to wallet:", error);
      alert("Failed to connect wallet. Please try again.");
    }
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // if (role && profileData.name && profileData.email) {
    //   login({
    //     name: profileData.name,
    //     email: profileData.email,
    //     role: selectedRole,
    //     walletAddress: '0x' + Math.random().toString(16).substr(2, 40),
    //     organization: profileData.organization || undefined
    //   });
    // }
    navigate('/dashboard');
  };




  return (
    <>
      <div className="container rounded mx-auto flex items-center justify-center py-12 px-4 " style={{ width: '40%' }}>
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center d-flex justify-content-center align-items-center flex-column" style={{ marginTop: '5rem' }}>
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
              {/* <span className="fs-3 text-white fw-bold p-2 rounded bg-dark">Lab.Ai</span> */}

            </div>
            <h2 className="fw-bold text-black mb-2">Join AI Marketplace</h2>
            <p className="text-gray-600">Connect your wallet to get started</p>
          </div>

          {/* Wallet Connection Step */}
          {!wallet && (
            <div className=" d-flex justify-content-between align-items-center flex-column p-3 mt-5  rounded shadow-lg gap-3"  >
              <h5 className="text-center ">Connect Your Wallet</h5>
              <button
                onClick={connect}
                disabled={isConnecting}
                className="btn bg-black text-white py-3 flex items-center justify-center gap-4" style={{ padding: '0 7rem' }}
              >
                {wallet ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Connected</span>
                  </>
                ) : (
                  <>
                    <span  className='fs-5'>🦊</span>
                    <span className='fs-5'> MetaMask</span>
                  </>
                )}
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm opacity-0.1">
                  Don't have MetaMask? <a href="#" className="text-black hover:underline">Install it here</a>
                </p>
              </div>
            </div>
          )}

          {/* Role Selection Step */}
          {wallet && (
            < form className='mt-5 p-3 rounded d-flex flex-column gap-3 ' onSubmit={handleProfileSubmit}>
              <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Name*</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" required/>
                </div>
              </div>
              <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email*</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" required />
                </div>
              </div>

              <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Role*</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input  border-secondary"
                      type="checkbox"
                      name="gridRadios"
                      id="gridRadios1"
                      value="data_owner"
                      checked={role === 'data_owner'}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Data Owner
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input  border-secondary	"
                      type="checkbox"
                      name="gridRadios"
                      id="gridRadios2"
                      value="ai_developer"
                      checked={role === 'ai_developer'}
                      onChange={(e) => setRole(e.target.value)}
                      
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      AI Developer
                    </label>
                  </div>
                </div>
              </fieldset>
              <button type="submit" class="btn btn-primary">Join</button>
            </form>
          )}

          {/* Back to Home */}
          <div className="text-center mt-6" style={{ marginTop: '2rem' }}>
            <a href="/" className="outline-none text-black">
              ← Back to home
            </a>
          </div>
        </div>
      </div >
    </>
  );
};

export default Login;
