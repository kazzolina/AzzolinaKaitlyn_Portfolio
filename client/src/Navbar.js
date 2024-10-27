import "./Navbar.css";

export default function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "white" }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <div
            class="navbar-logo"
            style={{
              width: "30px",
              height: "30px",
            }}
          ></div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/education">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/technical-skills">
                Technical Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/professional-experience">
                Professional Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/leadership-and-development">
                Leadership & Development
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
