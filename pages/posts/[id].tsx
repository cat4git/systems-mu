import Layout from '../../components/layout'
import { getAllPostIds, getGraphInfo } from '../../lib/system'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

import React from 'react'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'



export default function Post({postData}) {
  
  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
  }

  const options = {
    title: {
      text: postData[0].name
    },
    // series: [{
    //   type:postData[1].type,
    //   data: postData[1].data
    // }],
    series:[postData[0]],
    chartOptions:{fromDate:postData[0].fromDate,}
  }
  return (
    <Layout>
      <Head>
        <title>{postData[0].id}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData[0].id.replace("-"," ").toUpperCase()}</h1>
        <HighchartsReact
        highcharts={Highcharts}
        options={options}
      
        />
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
  console.log(postData[0].data)
  return {
    props: {
      postData,
      ...params
    }
  }
}