import Link from 'next/link';
import Head from 'next/head';
//
function Page(){
  return (
  <div id="div_navigate_index">
    <div id="div_head" className="cover">
      <div className="container">
          <div className="row">
              <div className="col-sm-4">
                <Link href={`${process.env.MY_BASE_PATH}/`} >
                  <a className="home_link"><p><i className="fas fa-home"></i></p></a>
                </Link>                      
              </div>
              <div className="col-sm-8">
              </div>
          </div>
      </div>
    </div>
  </div>
  );
}
export default Page
