const steps = [
    {
      title: "Connect",
      description: "Plug into our secure Matrix access point to begin your journey.",
    },
    {
      title: "Train",
      description: "Undergo intensive training programs to master Matrix navigation and manipulation.",
    },
    {
      title: "Explore",
      description: "Dive deep into the digital realm, uncovering its secrets and potential.",
    },
    {
      title: "Manipulate",
      description: "Learn to bend the rules of the Matrix, reshaping reality to your will.",
    },
  ]
  
  const HowItWorks = () => {
    return (
      <section className="relative z-10 py-16 bg-green-500 bg-opacity-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-start">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 mb-8 md:mb-0 text-center">
                <div className="w-16 h-16 bg-green-500 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default HowItWorks
  
  