import Image from "next/image"

import styles from "/styles/About.module.css"

function about() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est ultricies. Quis vel eros donec ac odio. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Sapien eget mi proin sed libero enim sed faucibus. Tortor vitae purus faucibus ornare suspendisse. Vulputate mi sit amet mauris commodo quis. Habitant morbi tristique senectus et. Massa ultricies mi quis hendrerit dolor magna eget.</p>
      <Image src="/images/charizard.png" height="300" width="300" alt="pokemon" />
    </div>
  )
}

export default about
