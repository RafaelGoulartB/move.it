import styles from "../styles/components/ExperiencesBar.module.css";

function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: "50%" }} />
        <span className={styles.currentExperience} style={{ left: "50%" }}>
          300xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}

export default ExperienceBar;
