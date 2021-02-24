import styles from '../styles/components/CompletedChallenges.module.css'

const CompletedChallenges: React.FC = () => {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos:</span>
      <span>5</span>
    </div>
  )
}

export default CompletedChallenges
