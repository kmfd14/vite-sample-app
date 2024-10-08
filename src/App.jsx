// import Message from './Message'
// import ListGroup from './components/ListGroup'
// import AlertButton from './components/AlertButton'
// import AlertMessage from './components/AlertMessage'
// import NavBar from './components/NavBar'
// import { useState } from 'react'

// const App = () => {
//   const [alertVisible, setAlertVisibility] = useState(false)
//   return (
//     <>
//       <NavBar />
//       { alertVisible && 
//         <AlertMessage onClose={()=> setAlertVisibility(false)}>
//           This is a primary alert—check it out!
//         </AlertMessage>
//       }
//       <AlertButton color="primary" onClick={() => setAlertVisibility(true)}/>
//       <Message />
//       <ListGroup />
//     </>
//   )
// }

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About2'
import Sidebar from './components/Sidebar'
import Navbar from './components/NavBar'
import CityDetail from './views/City'
import Cats from './Cats'
import CatBreedDetails from './views/CatBreedDetails'
import Patients from './Patients'
import PatientDetails from './views/PatientDetails'
import Genders from './Genders'
import GenderDetails from './views/GenderDetails'

// #4FB06D MASTER COLOR

const Layout = () => (
  <>
    {/* <div className="d-flex flex-row" style={{background: "url('./background.jpg') repeat center center rgba(255, 255, 255, 0.5)", backgroundSize: "200px 200px"}}> */}
    <div className="d-flex flex-row">
      <Sidebar />
      {/* <NavBar /> */}
      <div className='w-100' >
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about2" element={<About />} />
        <Route path="/city" element={<CityDetail />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/cat" element={<CatBreedDetails />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patient" element={<PatientDetails />} />
        <Route path="/genders" element={<Genders />} />
        <Route path="/gender" element={<GenderDetails />} />
      </Routes>
      </div>
    </div>
  </>
)

const App = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<Layout />} />
    </Routes>
  </Router>
)

export default App
