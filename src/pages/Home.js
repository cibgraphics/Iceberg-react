import withAuthentication from './../components/withAuthentication';

const Home = () => {
  return <h1>Home</h1>;
};

export default withAuthentication(Home)