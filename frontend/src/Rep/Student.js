import './Rep.css';
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";
import { FaRegNewspaper} from "react-icons/fa";
import { FaSchool,} from "react-icons/fa";

export function Student(){
    return(
        <><nav>
            <a href="#first">< FaHome /></a>
            <a href="#second"><  FaRegNewspaper/></a>
            <a href="#third">< FaSchool/></a>
         
        </nav>
        
        <div class='container'>
       
                <section id='first'>
                <h1>Representative APPLICATION</h1>
                    <h1>First</h1>
                </section>

                <section id='second'>
                <h1>Representative APPLICATION</h1>
                    <h1>Second</h1>
                </section>

                <section id='third'>
                <h1>Representative APPLICATION</h1>
                    <h1>Third</h1>
                </section>

                
            </div></>
    );
}
