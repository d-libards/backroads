import { socialLinks, pageLinks } from '../data'

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map(({ href, title }, index) => {
          return (
            <li key={index}>
              <a href={href} className="footer-link">
                {title}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map(({ link, icon }, index) => {
          return (
            <li key={index}>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>nore
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
