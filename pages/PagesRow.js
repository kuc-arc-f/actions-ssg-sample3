import Link from 'next/link';

const PagesRow = props => (
  <span>
      <Link href={`${process.env.MY_BASE_PATH}/pages/${props.id}`} >
        <a className="btn btn-outline-dark ml-2 mb-2">
        {props.title}
        </a>
      </Link>        
  </span>
);
export default PagesRow;
