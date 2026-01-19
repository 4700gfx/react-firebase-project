import Dropdown from "../common/Dropdown"
import SearchForm from "../common/SearchForm"
import Navlinks from "../common/Navlinks"


function Navbar() {
  return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      ⚡ Firestock
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Navlinks></Navlinks>
      <SearchForm></SearchForm>
      <Dropdown></Dropdown>
    </div>
  </div>
  </nav>)
}
export default Navbar