import axios from 'axios'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link';
import Image from 'next/image'

export default function Place({ movie }: any) {
  const router = useRouter()

  if (router.isFallback) return null

  return <>
    <Link href="/movies">
      <button>voltar</button>
    </Link>
    <h1>{movie.title}</h1>
    <Image
      src={movie.image}
      alt="teste"
      width={400}
      height={600}
      quality={75}
    />
    <p>{movie.description}</p>
    <ul>
      <li>director: {movie.director}</li>
      <li>producer: {movie.producer}</li>
      <li>original title: {movie.original_title}</li>
    </ul>
  </>
}

export async function getStaticPaths() {
  const movies  = [
    {id: "2baf70d1-42bb-4437-b551-e5fed5a87abe"},
    {id: "4e236f34-b981-41c3-8c65-f8c9000b94e7"},
    {id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49"}
  ]

  const paths = movies.map(({ id }) => ({
    params: { id }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await axios.get(`https://ghibliapi.herokuapp.com/films/${params?.id}`)

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      movie: data?.data
    }
  }
}
