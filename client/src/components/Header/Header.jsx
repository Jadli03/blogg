import './header.css'

const Header = () => {
    return (
      <header className="header">
      <div className="header-title">
        <span className="header-sm-heading">GG BLOG</span>
        {/* <span className="header-lg-heading">Blog</span> */}
      </div>
      <img
        className="header-img"
        src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
        // src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      </header>
    );
}
export default Header;