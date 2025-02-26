const features = [
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our advanced Matrix-inspired security protocols.",
      icon: "🔒",
    },
    {
      title: "AI Integration",
      description: "Harness the power of artificial intelligence to optimize your digital operations.",
      icon: "🧠",
    },
    {
      title: "Virtual Reality",
      description: "Immerse yourself in stunning virtual worlds powered by our Matrix technology.",
      icon: "🥽",
    },
    {
      title: "Quantum Computing",
      description: "Leverage quantum algorithms for unprecedented computational power.",
      icon: "💻",
    },
    {
      title: "Neural Interface",
      description: "Connect directly to the Matrix with our cutting-edge brain-computer interfaces.",
      icon: "🧬",
    },
    {
      title: "Data Manipulation",
      description: "Bend the rules of reality by manipulating the underlying code of the Matrix.",
      icon: "📊",
    },
  ]
  
  const Features = () => {
    return (
      <section className="relative z-10 py-16 bg-black bg-opacity-80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Matrix Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-green-500 rounded-lg p-6 hover:bg-green-500 hover:text-black transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Features
  
  