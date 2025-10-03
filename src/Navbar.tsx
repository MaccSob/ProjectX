  import './Navbar.css'

  const Navbar = () => {     
     return (  
           <nav className="mainnav">       
               
                  <ul>            
                         <li>Home</li>           
                        <li>Games</li>            
                             <li>Top 100</li>            
                             <li>Your Lists</li>          
                           </ul> 

                          <div className="search_box">          

                               <input type="text" name="search" id="NavScroll" />   
                                     </div>      

                                   </nav>   
                                 )  
                        
                         }  
                         
                         export default Navbar;