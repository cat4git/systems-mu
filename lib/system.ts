type Post = {
    author: string
    content: string
  }
  
  export const getStaticProps = async () => {
    const res = await fetch('../mock/systems.json')
    const posts: Post[] = await res.json()
  
    return {
      props: {
        posts,
      },
    }
  }
  