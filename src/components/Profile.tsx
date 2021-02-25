import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://images.generated.photos/n3fNdBQ5v0_Pkb7bXdo0hRoEalwAIvdtsUaqod1hm-Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4MzY1NjQuanBn.jpg"
        alt="Rafael Goulart"
      />
      <div>
        <strong>Rafael Goulart</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}

export default Profile
