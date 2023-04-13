import { useEffect, useState } from 'react'
import { SkillProps } from './skills.types'

export const Skills = (props: SkillProps) => {
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const {skills} = props

    useEffect(() => {
      setTimeout(() => {
        setisLoggedIn(true)
      }, 1000);
    },[])

  return (
    <>
    <ul>
        {skills.map((skill)=>{
            return <li key={skill}>{skill}</li>
        })}

        {isLoggedIn ? (
            <button>Start Learning</button>
        ) :(
            <button onClick={()=>setisLoggedIn(!isLoggedIn)}>Login</button>
        )}
    </ul>
    </>
  )
}
