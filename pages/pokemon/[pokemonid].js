import Image from "next/image"
import styles from "/styles/Pokemon.module.css"

export const getStaticPaths = async() => {
    const maxPokemons = 251
    const api = "https://pokeapi.co/api/v2/pokemon/"
  
    const data = await fetch(`${api}/?limit=${maxPokemons}`)
      .then((res) => res.json())
      .catch((err) => console.log(err))

      //params
      const paths = data.results.map((pokemon, index)=>{
        return {
            params: {pokemonid: (index + 1).toString()},
        }
      })

      return {
        paths,
        fallback: false,
      }
}

export const getStaticProps = async(context) => {
    const id = context.params.pokemonid
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err))
    
    return {
        props: {pokemon: data},
    }
}

function pokemon({pokemon}) {
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} width="200" height="200" />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
            {pokemon.types.map((item, index)=>{
                return(
                    <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                )
            })}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
            <h4>Peso:</h4>
            <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}

export default pokemon
