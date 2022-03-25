import axios from 'axios'
import { GetStaticProps } from 'next'
import Error from './404'

export default function Estatico({ user }: any) {
  return (
    <>
      <h1>{user.name}</h1>
      <h5>{user.bio}</h5>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await axios.get("https://api.github.com/orgs/rocketseat/members")
    const user = data.data

    return {
      props: {
        user
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