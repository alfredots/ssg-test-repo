import axios from 'axios'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'


export default function Movies({ movies }: any) {
  return (
    <>
      {movies.map((movie: any) => (
        <div key={movie.id}>
          <Link href={`/movies/${movie.id}`}>
            <h4 style={{cursor: 'pointer'}}>{movie.title}</h4>
          </Link>
          <Image
                src={movie.image}
                alt="teste"
                width={200}
                height={300}
                quality={75}
              />
        </div>
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await axios.get("https://ghibliapi.herokuapp.com/films/")
    const movies = data.data

    return {
      props: {
        movies
      },
      revalidate: 7
    }
  } catch (err: any) {
    // if ([401, 403, 404, 500].includes(err)) {
    //   return {
    //     notFound: true
    //   }
    // }
    return {
      notFound: true
    }
  }
}