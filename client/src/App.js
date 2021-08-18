import BookList from './Components/BookList.js'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
 
} from "@apollo/client";
import AddBook from './Components/AddBook.js';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div>
      <h1>Nathan's Reading List</h1>
      <BookList />
      <AddBook />
      
    </div>
    </ApolloProvider>
  );
}

export default App;
