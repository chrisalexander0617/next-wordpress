import styles from '../styles/Home.module.css';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import BlogCard from '../components/BlogCard';

export default function Home({ launches }) {
  console.log(launches)

  const blogCards = launches.map(post => <BlogCard key={post.node.id} title={post.node.title} />)
  return (
    <div className={styles.container}>
      { blogCards }
    </div>
  );
};

/* Allows pre-rendering of data before component mounts */
export async function getStaticProps(){
  const client = new ApolloClient({
    uri:'http://demo.local/graphql/',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query:gql`
      query MyQuery {
        posts {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `
  });
  
  return {
    props:{
      launches:data.posts.edges
    }
  }
}