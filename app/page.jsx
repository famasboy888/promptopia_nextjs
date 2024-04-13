import Feed from "@/components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and Share
            <br/>
            <span className="orange_gradient text-center">AI-powered Prompts</span>
            <p className="desc text-center">This is a Next.js project for learning the basic fundamentals of developing and deploying in Next.js</p>
            <Feed/>
        </h1>
    </section>
  )
}

export default Home