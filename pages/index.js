import styles from 'styles/index.module.css'
import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'

export default function Home() {
  return (
  <Container>
  <Meta />
  <Hero title="CUBE" subtitle="Top page" imageOn/>
  </Container>
  )
}