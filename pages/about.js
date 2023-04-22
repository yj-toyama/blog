import styles from 'styles/index.module.css'
import Hero from 'components/hero'
import Container from 'components/container'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn,TwoColumnMain,TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'
import Meta from 'components/meta'

export default function About() {
  return ( 
  <Container>
      <Meta
        pageTitle="アバウト"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
  <TwoColumn>

  <TwoColumnMain>
  <PostBody>
  <Hero  title="About" subtitle="About Development Activity" />

  <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>

  <p>
    Our Company has great knowledge about IT Architect
  </p>
  <h2> Our Policy</h2>
  <p>
    Know best , Do best, Just do it.
  </p>
  <h3>
    IT Architect is great job
  </h3>
  <p> 
    Desing best, Do best, Just do it.
  </p>
  </PostBody>
  </TwoColumnMain>

  <TwoColumnSidebar>
  <Contact />
  </TwoColumnSidebar>
  
  </TwoColumn>
  </Container>
  )
}