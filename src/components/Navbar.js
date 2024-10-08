import img from '../images/logo.svg'
import { socialLinks, pageLinks, nav } from '../data'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

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
          {pageLinks.map(({ href, title }, index) => (
            <PageLinks
              href={href}
              title={title}
              key={index}
              style={nav.linkStyle}
            />
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map(({ link, icon }, index) => (
            <SocialLinks
              link={link}
              icon={icon}
              style={nav.iconStyle}
              key={index}
            />
          ))}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
