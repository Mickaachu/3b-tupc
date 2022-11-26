import styles from "../styles/Footer.module.css"
const Footer = () => {
    return(
        <div>
            <div className={styles.container}>
                <div>
                    <img src="tupclogo.png" alt="" />
                    <h4>Technological University of the Philippines</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla magnam voluptatibus doloribus perferendis, iste explicabo iusto delectus commodi adipisci. Sequi.
                    </p>
                    <ul  className={styles.icon}>
                        <li >
                            <img src="facebook.png" alt="" />
                        </li>
                        <li>
                            <img src="instagram.png" alt="" />
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Contacts</h5>
                    <p>Phone Number: 091234567890</p>
                    <p>Landline: (01)123098</p>
                    <p>Email: email.dummy@email.com</p> 
                
                </div>
            </div>
            <div className={styles.bottom}>
                <h6>Design by EJEC</h6>
            </div>
        </div>
        
    )
}
export default Footer;