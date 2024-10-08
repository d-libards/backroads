import img from '../images/logo.svg'
import { hrefs, links } from '../data'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={img} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {hrefs.map(({ href, title }) => {
            return (
              <li>
                <a href={href} className="nav-link">
                  {' '}
                  {title}{' '}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          {links.map(({ link, icon }) => {
            return (
              <li>
                <a href={link} target="_blank" className="nav-icon">
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
