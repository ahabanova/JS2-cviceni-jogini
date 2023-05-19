export const Header = (props) => {
  return `
    <header>
      <h1 class="site-title">${props.title}</h1>
      <nav>
        ${props.links.map((link) => `<a href="#">${link}</a>`).join('')}
      </nav>
    </header>`
}