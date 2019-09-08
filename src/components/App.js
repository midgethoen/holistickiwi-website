import React from 'react';
import logo from './icns/white/medical-notes.svg';
import icn from './icns/primary/medical-notes.svg';
import './App.scss';

function App() {
  return (
    <div>

      <nav className="topnav">
        <div className="topnav-left">
          <p>
            Holistic Kiwi - Skin & Massage
          </p>
        </div>
        <div className="topnav-right">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </nav>

      <div className="certifications">
        <p>international massage certification 1</p>
        <p>international massage certification 2</p>
      </div>

      <header className="header header-homepage">
        <div className="headercontent">
          <h3>
            Holistic Kiwi - Skin & Massage
          </h3>
          <h1>
            Red
          </h1>
          <button
            className="btn btn-primary"
            href="https://reactjs.org"
            type="button"
          >
          Book Now
          </button>
        </div>
      </header>

      <main>
        <div className="page-intro">
          <p>
            At Holistic Kiwi we customise our massages to suit your specific needs and concerns upon your consultation. This means we only need 2 massage distinctions;
          </p>
        </div>

        <div className="card-container">
          <div className="card">
            <img src={icn} className="icn" alt="logo" />
            <h5>
            Relaxation massages
            </h5>
            <p>
            Lighter techniques to help you relax and unwind.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            View Treatment
            </a>
          </div>
          <div className="card">
            <img src={icn} className="icn" alt="logo" />
            <h5>
            Relaxation massages
            </h5>
            <p>
            Lighter techniques to help you relax and unwind.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            View Treatment
            </a>
          </div>
          <div className="card">
            <img src={icn} className="icn" alt="logo" />
            <h5>
            Relaxation massages
            </h5>
            <p>
            Lighter techniques to help you relax and unwind.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            View Treatment
            </a>
          </div>
          <div className="card">
            <img src={icn} className="icn" alt="logo" />
            <h5>
            Relaxation massages
            </h5>
            <p>
            Lighter techniques to help you relax and unwind.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            View Treatment
            </a>
          </div>
          <div className="card">
            <img src={icn} className="icn" alt="logo" />
            <h5>
            Relaxation massages
            </h5>
            <p>
            Lighter techniques to help you relax and unwind.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            View Treatment
            </a>
          </div>
        </div>





          <footer className="footer-wrap">
            <div className="col-wrap">
              <div className="col">
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                About us
                </a>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Contact
                </a>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Treatment comparison
                </a>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Certificates
                </a>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Privacy Statement
                </a>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                View Results
                </a>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Organic Skincare Consultancy
                </a>
              </div>
              <div className="col">
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                About us
                </a>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Contact
                </a>
              </div>
              <div className="col">
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                About us
                </a>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Contact
                </a>
              </div>
              <div className="col">
                <p>
                Kruisstraat 39-41
                2611 ML Delft
                The Netherlands

                06 192 833 21
                contact@holistickiwi.com
                </p>
              </div>
            </div>
          </footer>












      </main>



















    </div>

  );
}

export default App;
