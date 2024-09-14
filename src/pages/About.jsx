import '../App.css'
import {Link} from 'react-router-dom'

function About () {
  return (
    <>
      <div>About</div>
      <button>
      <Link to="/" replace> Home</Link>
      </button>
    </>
  )
}

export default About
