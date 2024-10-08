import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.pathname)
  const [isMinimized, setIsMinimized] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleLinkClick = (path) => {
    setActiveLink(path)
  }

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized)
    if (!isMinimized) {
      setDropdownOpen(false)
    }
  }

  const toggleDropdown = (e) => {
    e.preventDefault()
    setDropdownOpen(!dropdownOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location.pathname])

  return (
    <>
      <div className={`d-flex flex-column flex-shrink-0 p-3 text-white bg-dark ${isMinimized ? 'sidebar-minimized' : ''}`} style={{ width: isMinimized ? '6%' : '16%', height: '100vh' }}>
        <div className="d-flex justify-content-center align-items-center">
          {!isMinimized && (
            <a href="/" className="d-flex align-items-center text-white text-decoration-none">
              <svg className="bi me-2" width="15" height="32"><use xlinkHref="#bootstrap"></use></svg>
              <span className="fs-4">Dashboard</span>
            </a>
          )}
          <button className={`btn btn-dark ${isMinimized ? 'm-auto' : ''}`} onClick={toggleSidebar}>
            <FontAwesomeIcon icon='fa fa-bars' />
          </button>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${activeLink === '/' ? 'active' : ''} text-white`}
              style={{background:`${activeLink === '/' ? '#4FB06D' : ''}`}}
              onClick={() => handleLinkClick('/')}
            >
              <FontAwesomeIcon icon='fa fa-home' /> {!isMinimized && 'Home'}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about2"
              className={`nav-link ${activeLink === '/about2' ? 'active' : ''} text-white`}
              style={{background:`${activeLink === '/about2' ? '#4FB06D' : ''}`}}
              onClick={() => handleLinkClick('/about2')}
            >
              <FontAwesomeIcon icon='fa fa-city' /> {!isMinimized && 'About'}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cats"
              className={`nav-link ${activeLink === '/cats' ? 'active' : ''} text-white`}
              style={{background:`${activeLink === '/cats' ? '#4FB06D' : ''}`}}
              onClick={() => handleLinkClick('/cats')}
            >
              <FontAwesomeIcon icon='fa-solid fa-cat' /> {!isMinimized && 'Cats'}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/patients"
              className={`nav-link ${activeLink === '/patients' ? 'active' : ''} text-white`}
              style={{background:`${activeLink === '/patients' ? '#4FB06D' : ''}`}}
              onClick={() => handleLinkClick('/patients')}
            >
              <FontAwesomeIcon icon='fa-solid fa-venus-mars' /> {!isMinimized && 'Patients'}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/genders"
              className={`nav-link ${activeLink === '/genders' ? 'active' : ''} text-white`}
              style={{background:`${activeLink === '/genders' ? '#4FB06D' : ''}`}}
              onClick={() => handleLinkClick('/genders')}
            >
              <FontAwesomeIcon icon='fa-solid fa-venus-mars' /> {!isMinimized && 'Genders'}
            </Link>
          </li>
          {/* Other menu items */}
        </ul>
        <hr />
        <div className={`dropup ${dropdownOpen && 'show'}`} ref={dropdownRef}>
          <a 
            href='#' 
            className={`d-flex align-items-center text-white text-decoration-none ${!isMinimized ? 'dropdown-toggle' : ''}`} 
            id="dropdownUser1" 
            onClick={isMinimized ? toggleDropdown : undefined}
            data-bs-toggle={!isMinimized ? 'dropdown' : undefined} 
            aria-expanded={dropdownOpen}
          >
            <img src="https://github.com/mdo.png" alt="User Icon" width="32" height="32" className={`rounded-circle ${isMinimized ? 'm-auto' : 'me-2'}`} style={{marginLeft: `${isMinimized ? '': '0.70rem'}`}} />
            {!isMinimized && <strong>mdo</strong>}
          </a>
          <ul className={`dropdown-menu dropdown-menu-dark text-small shadow ${dropdownOpen && 'show'}`} aria-labelledby="dropdownUser1" data-bs-popper={isMinimized ? 'static' : undefined}>
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
