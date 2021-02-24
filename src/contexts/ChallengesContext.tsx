import { createContext, ReactNode, useState } from 'react'

export const ChallengesContext = createContext({})

interface ChallengesProviderProps {
  children: ReactNode
}

export function ChallengesProvider({
  children
}: ChallengesProviderProps): React.ReactElement {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  function levelUp() {
    setLevel(+level)
  }

  return (
    <ChallengesContext.Provider
      value={{ level, currentExperience, challengesCompleted, levelUp }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
