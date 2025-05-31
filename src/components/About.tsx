  const About = () => {
      return (
        <section id="about" className="py-20 bg-gray-100">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 md:mb-0">
              <img src="./perso.png" alt="À propos de moi" className=" h-90 md:h-150 rounded-full mx-auto mb-2" />
            </div>
            <div className="lg:w-1/2 md:pl-8 p-5" >
              <h2 className="text-3xl font-bold mb-4">About me</h2>
              <p className="text-lg mb-4">I'm a passionate developer specializing in technologies like React, Node.js, and Express, with expertise in building high-performance web applications. At the same time, I'm also an expert in AI automation.
              </p>
            </div>
          </div>
        </section>
      );
    };
    export default About;   