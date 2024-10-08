function SocialLinks({ link, icon, style }) {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer" className={style}>
        <i className={icon}></i>
      </a>
    </li>
  )
}
export default SocialLinks
