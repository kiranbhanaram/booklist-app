import logo from '../../assets/images/logo.png';
import './Header.css';

export function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <h2>Book List Application</h2>
    </div>
  );
}
