import Button from "./Button";
import styles from "../styles/CTA.module.css"
const CallToAction = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.overlay}></div>
            <div className={styles.above}>
                <h2>"Shape Your Future Now!"</h2>
                <Button variant="primary" >Enroll Now!</Button>
            </div>
        </div>
    )
}
export default CallToAction;