import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import fetch from 'isomorphic-unfetch';
import data from '../mock/systems.json';
import List from '@material-ui/core/List';
import { listStyles } from './list.style'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  const classes = listStyles();

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
        <List className={classes.root} subheader={<li />}>
        {data["data"].map((parent) => (
          <li key={`item-${parent}`} className={classes.listSection}>
            <ul className={classes.ul}>
            <ListItemText  className={classes.parent}>
              <Link href="/posts/[id]" as={`/posts/${parent.type.name.toLowerCase}`}>
                <a>{`${parent.name} (${parent.type.name}) ${parent.status}`}</a>
              </Link>
              </ListItemText>
              {parent.children && parent.children.map((chuldren) => (
                <ListItem key={`item-${parent}-${chuldren}`}>
                  <ListItemText className={classes.chuldren} primary={`${chuldren.name} (${chuldren.type.name}) ${chuldren.status}`} />
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
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
