import './App.css';
import Footer from './components/Footer';
import Internship from './components/Internship';
import Navbar from './components/Navbar';
import Seekbar from './components/Seekbar';

// import background from "../public/assets/background.jpeg"

function App() {
  const googleFormLink = "https://docs.google.com/forms/d/1CFXcZ3sJ5t7ZwRMXeLDVg8YjxqBYKKlC4MtuGvvo8V8/edit?pli=1";

  const internshipsData = [
    {
      name: "Full Stack Web Development",
      description: "Become a versatile developer with skills in both front-end and back-end web development.",
      image: "/assets/fullstack.png",
      link: `${googleFormLink}`,
    },
    {
      name: "Frontend Web Development",
      description: "Craft user-friendly web interfaces using HTML, CSS, and JavaScript.",
      image: "/assets/frontend.png",
      link: `${googleFormLink}`,
    },
    {
      name: "Backend Web Development",
      description: "Build the server-side of web applications and databases to power dynamic sites.",
      image: "/assets/backend.png",
      link: `${googleFormLink}`,
    },
    {
      name: "Android App Development",
      description: "Create Android applications and bring your ideas to life on mobile devices.",
      image: "/assets/android.png",
      link: `${googleFormLink}`,
    },
    {
      name: "Data Science & Data Analytics",
      description: "Analyze data, gain insights, and make data-driven decisions.",
      image: "/assets/dataScience.png",
      link: `${googleFormLink}`,
    },
    {
      name: "Python & Data Structures",
      description: "Learn Python programming and fundamental data structures for software development.",
      image: "/assets/python.png",
      link: `${googleFormLink}`,
    },
    {
      name: "C & C++ Basic Programming",
      description: "Begin your journey in programming with C and C++ languages.",
      image: "/assets/c++.png",
      link: `${googleFormLink}`,
    },
    {
      name: "Java & Object-Oriented Programming",
      description: "Master Java and object-oriented programming principles for robust software development.",
      image: "/assets/java.png",
      link: `${googleFormLink}`,
    },
  ];

  return (
    <div className="App custom-scrollbar">
      <Navbar/>

      <div className='about'>
        <div className='aboutWithLogo'>
        <img className='MSME' src="/assets/MSME2.png" alt="" />
        <h2>About Us</h2>
        <img className='MSME' src="/assets/MSME2.png" alt="" />
        </div>
      
        <div className='aboutSeek'>
          <Seekbar speed={1.5} width="90px" color="blueviolet"/>
        </div>
        <div className='about-content'>
        <img  src="/assets/abutImg.png" alt="" />
        <p>Eduxcelerate is a forward-thinking startup dedicated to transforming the educational
          landscape for students and aspiring tech enthusiasts. As a privately-owned, small-scale 
          MSME firm, our unwavering passion is to facilitate the acquisition of knowledge and skills 
          that drive innovation and shape a brighter future for both businesses and individuals.At 
          Eduxcelerate, we offer a wide range of services, from comprehensive teachings and courses 
          on cutting-edge technologies to essential tech services. However, our standout feature is 
          our commitment to providing virtual online internships, which have proven to be invaluable 
          for students seeking hands-on experience in their chosen fields. Our mission is to accelerate 
          learning, ignite innovation, and empower the next generation of tech professionals.With a firm 
          belief in the potential of every individual and the transformative power of education, we work 
          tirelessly to provide resources and opportunities that will help our clients and students excel. 
          Join us on our journey as we work together to create a world where innovation and knowledge know 
          no bounds.</p>
          </div>
      </div>
      
      <div id="services" className='internship-section'>
    <h2>Internships That We Offer</h2>
    <div className='internSeek'>
          <Seekbar speed={1.5} width="90px" color="blueviolet"/>
    </div>
    <div className='internships'>
    {internshipsData.map(internship => (
      <Internship key={internship.name}
      name={internship.name}
      description={internship.description}
      imageLink={internship.image}
      link={internship.link} />
    ))}
    </div>
  </div>

      <div className='vip'>
  <h2>Virtual Internship Program</h2>
  <div className='internSeek'>
          <Seekbar speed={1.5} width="100px" color="blueviolet"/>
  </div>
  <p>
    Join our Virtual Internship Program and kickstart your career in technology.
    We offer a range of benefits and features to help you succeed.
  </p>
  <ul class="benefits-and-features">
    <li>Email Notifications - Stay informed about upcoming deadlines and changes to your schedule.</li>
    <li>Simple Interface - Our user-friendly interface ensures easy navigation.</li>
    <li>Large Community - Connect with like-minded interns and expand your network.</li>
    <li>Deadline Reminders - Receive reminders in advance via email and Telegram.</li>
    <li>Project Evaluation - Code and submit projects for evaluation and earn certificates and goodies.</li>
    <li>Job Assistance - Get assistance in finding job opportunities after successful completion.</li>
  </ul>
</div>
<br />

<div id="contact">
<Footer/>
        {/* ... (rest of your contact section) */}
</div>

      
    </div>
  );
}

export default App;
