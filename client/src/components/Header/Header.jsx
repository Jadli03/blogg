import './header.css'

const Header = () => {
    return (
      <header className="header">
      <div className="header-title">
        <span className="header-sm-heading">React & Node</span>
        <span className="header-lg-heading">BLOG</span>
      </div>
      <img
        className="header-img"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      </header>
    );
}
export default Header;