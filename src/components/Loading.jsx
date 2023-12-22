import { Spinner } from 'reactstrap';

const Loading = () => (
  <div className="text-center" style={{verticalAlign:'middle'}}>
    <h1>Loading...</h1>
    <Spinner color="primary" />
  </div>
);

export default Loading;