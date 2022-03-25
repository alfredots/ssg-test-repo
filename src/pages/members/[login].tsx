import axios from "axios"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import Image from "next/image"
import { useRouter } from "next/router"


type MemberProps = {
  login: string
}

type ParamsProps = {
  login?: string
}

type Props = {
  error?: number
  user?: {
    name: string
    bio: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data } = await axios.get(`https://api.github.com/orgs/rocketseat/members`)
    const paths = data.map((member: MemberProps) => ({ params: { login: member.login.toString() } }))
    return {
      paths,
      fallback: true,
    }
  }
  catch {
    return { paths: [{ params: {} as ParamsProps }], fallback: false };
  }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext<ParamsProps>) => {
  try {
    const login = context.params?.login
    if (!login) return { props: { errorMessage: "algo deu errado" } }

    const { data } = await axios.get(`https://aperi.gierthub.com/uswerers/${login}`)

    return {
      props: {
        user: data?.data || {} as MemberProps
      }
    }
  }
  catch (error: any) {
    return {
      props: {
        error: error?.response?.status || ""
      },
      // se eu colocar como false, eu posso tratar o erro de forma customizada
      // se eu deixar false, ele "redireciona", para a page 404 default de erro
      notFound: true
    }
  }
}


export default function Member({ user, error }: Props) {
  const { query, isFallback } = useRouter()

  if ([401, 403, 404, 500].includes(Number(error))) return window.alert("Okok")
  if (isFallback) return <p>Carregando...</p>

  return (
    <>
      <h1>{query.login}</h1>
      <p>{user?.name}</p>
      <p>{user?.bio}</p>
    </>
  )
}

