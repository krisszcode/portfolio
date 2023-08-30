import Layout from "@components/DefaultLayout";

function Home() {
  return (
    <Layout>
      <section className="min-h-screen bg-base-200">
        <div className="p-0 flex sm:flex-row flex-col justify-center text-center align-middle items-center container mx-auto">
          <img src="/heroImage.jpg" className="max-w-xs rounded shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Krisztián Nagy | Full Stack Web Developer</h1>
            <p className="py-6">From the bustling streets of Vienna to the ever-evolving corridors of the web, I channel my passion for development into every project. My mission? To craft intuitive, meaningful experiences. With a multilingual palette and a knack for bridging ideas, I believe the best digital stories are yet to be told. Let's collaborate and write the next one.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
