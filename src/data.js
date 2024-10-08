import tourImg1 from './images/tour-1.jpeg'
import tourImg2 from './images/tour-2.jpeg'
import tourImg3 from './images/tour-3.jpeg'
import tourImg4 from './images/tour-4.jpeg'

export const socialLinks = [
  {
    link: 'https://www.twitter.com',
    icon: 'fab fa-facebook',
  },
  {
    link: 'https://www.twitter.com',
    icon: 'fab fa-twitter',
  },
  {
    link: 'https://www.twitter.com',
    icon: 'fab fa-squarespace',
  },
]

export const pageLinks = [
  { href: '#home', title: 'Home' },
  { href: '#about', title: 'About' },
  { href: '#services', title: 'Secvices' },
  { href: '#tours', title: 'Tours' },
]

export const servicesText = [
  {
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
]

export const tours = [
  {
    img: tourImg1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    parapgraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'china',
    days: '6 days',
    fee: 'from $2100',
  },
  {
    img: tourImg2,
    date: 'october 1th, 202',
    title: 'best of java',
    parapgraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'indonesia',
    days: '11 days',
    fee: 'from $1400',
  },
  {
    img: tourImg3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    parapgraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'hong kong',
    days: '8 days',
    fee: 'from $5000',
  },
  {
    img: tourImg4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    parapgraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'kenya',
    days: '20 days',
    fee: 'from $3300',
  },
]

export const footer = {
  iconStyle: 'footer-icon',
  linkStyle: 'footer-link',
}

export const nav = {
  iconStyle: 'nav-icon',
  linkStyle: 'nav-link',
}
