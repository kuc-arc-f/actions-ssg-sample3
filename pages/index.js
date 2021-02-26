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
  var items = data.blogs
  var page_items = data.page_items
  var category_items = data.category_items
  var paginateDisp = data.display
// console.log( category_items )
  return (
  <Layout>
    <Head><title key="title">{data.site_name}</title></Head>      
    <TopHeadBox site_name={data.site_name} />
    <div className="body_main_wrap">
      <div className="container">
        <div className="btn_disp_ara_wrap mt-0">
        <div className="pages_wrap">
          <div className="row conte mt-0 mb-2">
            <div className="col-sm-12">
              <h2 className="h4_td_title mt-2" >Pages</h2>
              <div className="page_btn_wrap mb-0">
              {page_items.map((item, index) => {
//  console.log(item )
              return (<PagesRow id={item.id} key={index} 
                title={item.title} />
              )
              })}                  
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="body_wrap">
          <div id="post_items_box" className="row conte mt-2 mb-4">
            <div className="col-sm-12">
              <div id="div_news">
                <h2 className="h4_td_title mt-2 mb-2" >Post</h2>
              </div>
            </div>
            {items.map((item, index) => {
// console.log(item.id ,item.category.name )
              var category_name = item.category.name
              return (<IndexRow key={index}
                id={item.id} title={item.title}
                date={item.created_at} category_name={category_name} />       
              )
            })}
            <hr />
            <PagingBox page="1" paginateDisp={paginateDisp} />
          </div>
        </div>          
      </div>
    </div>
  </Layout>
  )
}
export const getStaticProps = async context => {
// console.log( process.env.site_id )
  var content = "posts"
  var site_id = process.env.MY_SITE_ID
  var url = process.env.BASE_URL+`/api/get/find?content=${content}&site_id=${site_id}`
  url += `&skip=0&limit=10`
  const res = await fetch( url );
  var blogs = await res.json();
//console.log(blogs.length )
  blogs = LibCommon.convert_items(blogs)  
  var  url_pages = process.env.BASE_URL + `/api/get/find?content=pages&site_id=${site_id}`
  const resPages = await fetch(url_pages );
  const jsonPages = await resPages.json();
  var  url_category = process.env.BASE_URL + `/api/get/find?content=category&site_id=${site_id}`
  const resCategory = await fetch(url_category );
  const jsonCategory = await resCategory.json();
//console.log(jsonCategory )
  LibPagenate.init()
  var display = LibPagenate.is_paging_display(blogs.length)    
  return {
    props : {
      blogs: blogs,
      page_items: jsonPages,
      category_items: jsonCategory,
      site_name : process.env.MY_SITE_NAME,
      display: display
    }
  };
}  
export default Page
  