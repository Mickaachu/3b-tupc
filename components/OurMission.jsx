import styles from "../styles/OurMission.module.css";

export default function OurMission() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="undraw_educator_re_ju47.svg" />
      </div>
      <div className={styles.message}>
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          ornare augue, sed fermentum libero. In finibus felis non quam
          vulputate porta.
        </p>
      </div>
    </div>
  );
}
