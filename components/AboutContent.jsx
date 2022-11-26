import styles from "../styles/Content.module.css"
import Button from "./Button"
const AboutContent = () => {
    return(
        <div className={styles.container}>
            <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <div className={styles.content}>
                <h2>About us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel illum dolor possimus rerum numquam, nulla error molestias excepturi modi facilis placeat nihil suscipit eaque? Iste perspiciatis odit, ducimus, eius itaque eum quibusdam blanditiis at eos magni odio, eveniet minima voluptas doloremque?
                    Eligendi delectus totam quos nulla deserunt nesciunt? Numquam, ab?
                </p>
                <Button variant="primary" > Learn More </Button>
            </div>
        </div>
    )
}
export default AboutContent;