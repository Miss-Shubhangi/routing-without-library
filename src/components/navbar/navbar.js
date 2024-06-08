
import "./navbar.css" 
function header() {
  return (
    <div className="nav-container">
        <a href="/" class="nav-item">Home</a>
        <a href="/internship" class="nav-item">Internship</a>
        <a href="/colleges" class="nav-item">Colleges</a>
        <a href="/spaceship"class="nav-item">Spaceship</a>
        <a href="/services" class="nav-item">Services</a>

    </div>
  )
}

export default header