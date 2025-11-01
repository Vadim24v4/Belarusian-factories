import './Header.scss'

export default (props) => {
  const links = [
    {
      href: '/',
      title: 'Главная',
    },
    {
      href: 'belaz',
      title: 'БелАЗ',
    },
    {
      href: 'mtz',
      title: 'МТЗ',
    },
    {
      href: 'bmz',
      title: 'БМЗ',
    },
  ]

  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__menu">
          <ul className="header__menu-list">
            {links.map(({ title, href }, index) => (
              <li className="header__menu-item" key={index}>
                <a className="header__menu-link" href={href}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
