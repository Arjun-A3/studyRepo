import React from 'react'
import './csbs.css'

function Department() {
    var des ="";
    var dept="";
    const url = window.location.href;
    // if(url==="http://localhost:3000/main/csbs")
    // {
    //      dept="CSBS"
    //      des = "The CSBS program is an interdisciplinary field that combines computer science and business management principles.It focuses on the use of technology to improve business operations and solve business problems. Students in a B.Tech CSBS program will learn about computer programming, data analytics, information systems, software engineering, and business management.Graduates with a B.Tech CSBS degree can pursue careers as software developers, data analysts, business analysts, project managers, or IT consultants in various industries such as finance, healthcare, e-commerce, and more."
    // }
    // else if(url === "http://localhost:3000/main/aids")
    // {
    //      dept="A I & D S"
    //     des="The Department of Artificial Intelligence and Data Science is a unique centre of MEC established in 2020. This Department offers a 4 year B.Tech (Artificial Intelligence and Data Science) Programme. Which is essential for the present digital world that incorporates the training and profound expertise on most recent innovative methodologies. The objective of this course is to equip students in creating workable solutions for issues faced by society through Service-Learning Modules. The program encompasses students to get expertise in critical skills such as Artificial Intelligence, Machine learning, Data Science, Advanced Analytics and Mathematical modelling."
    // }
    // eslint-disable-next-line default-case
    switch(url){
        case "http://localhost:3000/main/csbs":
            dept="C S B S"
            des = "The CSBS program is an interdisciplinary field that combines computer science and business management principles.It focuses on the use of technology to improve business operations and solve business problems. Students in a B.Tech CSBS program will learn about computer programming, data analytics, information systems, software engineering, and business management.Graduates with a B.Tech CSBS degree can pursue careers as software developers, data analysts, business analysts, project managers, or IT consultants in various industries such as finance, healthcare, e-commerce, and more.";
            break;
        case "http://localhost:3000/main/aids":
            dept="A I D S"
            des = "The Department of Artificial Intelligence and Data Science is a unique centre of MEC established in 2020. This Department offers a 4 year B.Tech (Artificial Intelligence and Data Science) Programme. Which is essential for the present digital world that incorporates the training and profound expertise on most recent innovative methodologies. The objective of this course is to equip students in creating workable solutions for issues faced by society through Service-Learning Modules. The program encompasses students to get expertise in critical skills such as Artificial Intelligence, Machine learning, Data Science, Advanced Analytics and Mathematical modelling.";
            break;
         case "http://localhost:3000/main/cse":
            dept="C S E"
            des = "Students in the CSE department have the opportunity to learn programming languages, gain proficiency in various software development tools and techniques, and explore advanced topics in computer science. They may engage in hands-on projects, collaborate on research endeavors, and participate in internships or co-op programs to gain real-world experience.";
            break;
        case "http://localhost:3000/main/eee":
            dept="E E E"
            des = "The field of EEE encompasses a wide range of subjects, including electrical circuits, power systems, control systems, electronics, digital systems, communication systems, signal processing, robotics, and more. EEE engineers work with various technologies and equipment, such as generators, motors, transformers, integrated circuits, microprocessors, sensors, and electronic communication devices.";
            break;
        case "http://localhost:3000/main/ece":
            dept="E C E"
            des = "Students in the ECE department have the opportunity to learn about the design, analysis, and implementation of electronic circuits, systems, and devices. They may explore topics such as circuit theory, semiconductor devices, digital logic design, computer architecture, wireless communication, embedded systems, robotics, and power distribution.";
            break;
        case "http://localhost:3000/main/aero":
            dept="A E R O"
            des = "Aeronautical engineering is a branch of aerospace engineering that specifically focuses on the design, development, testing, and production of aircraft. It involves applying engineering principles and scientific knowledge to design and build aircraft that are safe, efficient, and capable of meeting various performance requirements.";
            break;
        case "http://localhost:3000/main/agri":
            dept="A G R I"
            des = "Agricultural engineers work to improve the efficiency, productivity, and sustainability of agricultural practices. They apply engineering principles to solve challenges related to crop production, livestock management, irrigation, soil conservation, post-harvest processing, and agricultural infrastructure.";
            break;
        case "http://localhost:3000/main/mech":
            dept="M E C H A N I C A L"
            des = "In a mechanical engineering program, students learn about core concepts such as mechanics, thermodynamics, fluid dynamics, materials science, and manufacturing processes. They acquire skills in computer-aided design (CAD), computer-aided engineering (CAE), and computer-aided manufacturing (CAM) software to design and analyze mechanical systems. Additionally, students may specialize in areas such as automotive engineering, aerospace engineering, energy systems, mechatronics, or robotics.";
            break;
        case "http://localhost:3000/main/mba":
            dept="M B A"
            des = "MBA programs are designed to equip students with a broad set of business knowledge and skills, enabling them to analyze complex business problems, make strategic decisions, and lead teams and organizations effectively. The curriculum typically covers subjects such as accounting, economics, organizational behavior, business ethics, data analysis, marketing management, financial management, operations management, and business strategy.";
            break;
        case "http://localhost:3000/main/mca":
            dept="M C A"
            des = "Students of the MCA post-graduate program stand out in the ground as this program provides a stable and prosperous future. MCA graduates can work with the top IT industry, which is anticipated to rise by 2.3 percent in 2021. India is the world's leading provider of IT solutions and outsourcing place. This means India will always have a steady supply of job possibilities for MCA graduates soon.";
            break;
        case "http://localhost:3000/main/bme":
            dept="B M E"
            des = "Biomedical engineering is a highly interdisciplinary area of research involving cross disciplinary knowledge from engineering and other quantitative sciences for unraveling the complexities of biological systems and provides cost-effective solutions for improved quality of life. With a priority to study emerging diseases, to manipulate/engineer genomes, develop transgenic systems and develop genome-based diagnostics, the department significantly contributes towards biomedical engineering field for development of affordable devices, diagnostics, bio composites, tissue engineering, biosensors etc.";
            break;
        case "http://localhost:3000/main/biotech":
            dept="B I O T E C H"
            des = "Biotechnology has had a significant impact on many areas of society, from medicine to agriculture to environmental science. One of the key techniques used in biotechnology is genetic engineering, which allows scientists to modify the genetic makeup of organisms to achieve desired outcomes. This can involve inserting genes from one organism into another, creating new traits or modifying existing ones.";
            break;
            

                                
                                        

        

    }
  return (
    <div style={{backgroundColor:"rgb(25,25,112)",height:"100vh"}}>
        <center>
            <h1 id='Q'> {dept}</h1>
            <div style={{maxHeight:"50%"}}>
            
            <p id="PF">{des}</p>
           </div>
           <h2 id="F">STUDY MATERIAL</h2>
           
        </center>
        <div>
            <div id="outer"> 
            <a href="/main/csbs/sem1"><div class="button_slide slide_down">SEMESTER -1 </div></a>
            <a href="//"><div class="button_slide slide_down">SEMESTER -2</div></a>
            </div>
        </div> 
        <div>
            <div id="outer"> 
            <a href="//"><div class="button_slide slide_down">SEMESTER -3 </div></a>
            <a href="//"><div class="button_slide slide_down">SEMESTER -4</div></a>
            </div>
        </div> 
        <div>
            <div id="outer"> 
            <a href="//"><div class="button_slide slide_down">SEMESTER -5 </div></a>
            <a href="//"><div class="button_slide slide_down">SEMESTER -6</div></a>
            </div>
        </div> 
        <div>
            <div id="outer"> 
            <a href="//"><div class="button_slide slide_down">SEMESTER -7 </div></a>
            <a href="//"><div class="button_slide slide_down">SEMESTER -8</div></a>
            </div>
        </div> 
       
    </div>
  )
}

export default Department