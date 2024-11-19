// TODO: import useLocation from react-router-dom
import { useLocation } from 'react-router-dom';

function Search() {

  // TODO: create a variable to use the location hook
  const location = useLocation();
  // TODO: use URLSearchParams to get the query parameter from the URL
  const params = new URLSearchParams(location.search);
  // TODO: get the value of the query "q" parameter
  const query = params.get('q');

  const testing = params.get('oq')

  return (
    <div>
      <h1>Search Page</h1>
      {/* TODO: display the query parameter */}
      <h1>Search Results for: {query}</h1>
      <h2>Testing the second param: {testing}</h2>
    </div>
  );
}

export default Search;
