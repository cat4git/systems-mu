import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getSystemInfo } from '../lib/system';
import utilStyles from '../styles/utils.module.css';




export default function Home({
  allPostsData}) {
  

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Systems</h2>
        {/* <ul className={utilStyles.list}>
          {data["data"].map(({ id,name, type, status }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{name}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
               
              </small>
            </li>
          ))}
        </ul> */}
        <List  subheader={<li />}>
        {allPostsData.map((parent) => (
          <li key={`item-${parent}`} >
            <ul>
            <ListItemText  >
              <Link href="/posts/[id]" as={`/posts/${parent.type.name.toLowerCase().replace(" ","-")}`}>
                <a >{`${parent.name} (${parent.type.name}) ${parent.status}`}</a>
              </Link>
              </ListItemText>
              {parent.children && parent.children.map((chuldren) => (
                <ListItem key={`item-${parent}-${chuldren}`}>
                  <ListItemText >
                    <Link href="/posts/[id]" as={`/posts/${parent.type.name.toLowerCase().replace(" ","-")}`}>
                      <a >{`${chuldren.name} (${chuldren.type.name}) ${chuldren.status}`}</a>
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSystemInfo()
  return {
    props: {
      allPostsData
    }
  }
}
