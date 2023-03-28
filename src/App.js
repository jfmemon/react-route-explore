import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import Main from './Layout/Main';
import Friends from './Components/Friends/Friends';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>, children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/products", element: <Products></Products> },
        { path: "/contact", element: <Contact></Contact> },
        {
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          path: "/friends",
          element: <Friends></Friends>
        },
        { path: "*", element: <div>Sorry, this page is not found.</div> },
        {
          path: "/friend/:friendId",
          loader: async ({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path:"/posts",
          loader: async() => {
            return fetch('https://jsonplaceholder.typicode.com/posts');
          },
          element: <Posts></Posts>
        },
        {
          path:"/post/:postId",
          loader: async({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
