function PageLinks({ href, title, style }) {
  return (
    <li>
      <a href={href} className={style}>
        {title}
      </a>
    </li>
  )
}
export default PageLinks
