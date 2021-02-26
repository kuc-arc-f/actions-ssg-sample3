import React from 'react'
import Head from 'next/head';

import Layout from '../components/layout'
import TopHeadBox from '../components/TopHeadBox'
import PagingBox from '../components/PagingBox'
import LibCommon from '../libs/LibCommon'
import LibPagenate from '../libs/LibPagenate'
import IndexRow from './IndexRow';
import PagesRow from './PagesRow';
//
function Page(data) {
//    var category_items = data.category_items
//console.log( category_items )
    return (
    <Layout>
      <Head><title key="title">{data.site_name}</title></Head>      
      <TopHeadBox site_name={data.site_name} />
      <div className="body_main_wrap">
      </div>
    </Layout>
    )
  }
  export const getStaticProps = async context => {
// console.log( process.env.site_id )
  
    return {
      props : {
        site_name : process.env.MY_SITE_NAME,
      }
    };
  }
  export default Page
  