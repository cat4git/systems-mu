import Layout from '../../components/layout'
import { getAllPostIds, getGraphInfo } from '../../lib/system'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({postData}) {
  return (
    <Layout>
      <Head>
        <title>yossi</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
       
      </article>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  console.log(params.id)
  const postData = await getGraphInfo(params.id)
  console.log(postData)
  return {
    props: {
      postData,
      ...params
    }
  }
}