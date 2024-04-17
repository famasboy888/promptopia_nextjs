import Feed from "@/components/Feed"
import Image from "next/image";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br />
        <span className="orange_gradient text-center">AI-powered and Common Prompts</span>
        <br />
        <span className="orange_gradient text-center">+</span>
        <br />
        <Image
          src='/assets/images/nextjs.svg'
          alt='nextjs_logo'
          width={180}
          height={180}
          className='mx-auto'
        />
        <div className="flex items-center justify-center">
          <span className="desc align-middle">This is a Next.js project for learning the basic fundamentals of developing and deploying in Next.js</span>
        </div>
        <Feed />
      </h1>
    </section>
  )
}

export default Home