import { Link } from 'react-router-dom'

const PageNotFound = () => (
  <div className="error-box position-static">
    <div className="error-body text-center">
      <h1 className="error-title text-danger">404</h1>
      <h3 className="text-uppercase error-subtitle">NOT FOUND</h3>
      {/*<Link to={'/'} className="*/}
      {/*  btn btn-danger btn-rounded*/}
      {/*  waves-effect waves-light*/}
      {/*  m-b-40*/}
      {/*  text-white*/}
      {/*">목록으로</Link>*/}
    </div>
  </div>
)

export default PageNotFound
