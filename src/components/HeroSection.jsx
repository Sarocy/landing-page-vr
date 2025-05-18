const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR construindo ferramentas
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          para desenvolvedores
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Dê asas à sua criatividade e dê vida às suas ideias de aplicativos de RV com nossas ferramentas de desenvolvimento 
        intuitivas. Comece hoje mesmo e transforme sua imaginação em realidade imersiva!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Comece agora
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentação
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2x1Y29xbjZ3eTF5cnRubnJ6MTV4Z3ZtcXpxbzZiMnQyOWwwZThleSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DduCXvR0xgjgou2E39/giphy.gif"
          alt="demonstração 1"
          className="rounded-lg w-[40vw] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDN3Y3E0OWUxd3Z6OW4yNjE3bTMwa3BiY2RuNzJxNm1oZ3Rqb3kyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/059fSnjd5jdbLdNDgC/giphy.gif"
          alt="demonstração 2"
          className="rounded-lg w-[40vw] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />
      </div>
    </div>
  );
};

export default HeroSection;
