import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`

export default function Home() {
  return (
    <div className={styles.container}>
      1111
      <Title>2222</Title>
    </div>
  )
}
