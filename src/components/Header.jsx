const navLinks = [
  { url: "/", text: "Home" },
  { url: "/about", text: "About" },
  { url: "/contact", text: "Contact" },
  { url: "/cart", text: "Cart" },
  { url: "/login", text: "Login" },
];

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <img
            className="logo"
            src="https://marketplace.canva.com/EAFowsrK6x8/1/0/1600w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-rYbQJ_qtaz8.jpg"
            alt=""
          />
        </div>
        <ul>
          {navLinks.map((link, id) => {
            return (
              <li key={id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
