import { socialLinks, pageLinks, footer } from '../data'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map(({ href, title }, index) => (
          <PageLinks
            href={href}
            title={title}
            style={footer.linkStyle}
            key={index}
          />
        ))}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map(({ link, icon }, index) => (
          <SocialLinks
            link={link}
            icon={icon}
            style={footer.iconStyle}
            key={index}
          />
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
