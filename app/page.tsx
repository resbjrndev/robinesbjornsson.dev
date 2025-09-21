export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Robin Esbjörnsson
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-4">
            Frontend Developer & UX Designer
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Robin.Esbjornsson@hotmail.com • +46 721 92 33 58 • Gothenburg, Sweden
          </p>
        </header>

        {/* About */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">About</h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Frontend Developer & UX Designer with 3+ years shipping React/TypeScript SPAs 
            and reusable design-system components. Strong on accessibility (WCAG/RGAA), 
            testing, and performance hygiene in two-week sprints. Comfortable in multilingual, 
            regulated environments. UX-capable for tight design & build loops.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div className="space-y-8">
            <div className="border-l-4 border-teal-400 pl-6">
              <h4 className="text-xl font-semibold">Frontend Developer • Osstell</h4>
              <p className="text-gray-600 mb-2">April 2025 - Present</p>
              <p className="text-gray-700">Built and shipped web/mobile features in React/TypeScript and React Native. Maintained shared component library/design system. Developed REST APIs with secure authentication.</p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="text-xl font-semibold">Frontend Developer • Ebbot</h4>
              <p className="text-gray-600 mb-2">April 2024 - April 2025</p>
              <p className="text-gray-700">Led development of core web platform using TypeScript, React and Node.js. Designed UX improvements based on user research. Spearheaded platform modernization.</p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-6">
              <h4 className="text-xl font-semibold">Frontend Developer • HiQ</h4>
              <p className="text-gray-600 mb-2">June 2022 - May 2024</p>
              <p className="text-gray-700">Built enterprise React/TypeScript applications for Ericsson and Renault Trucks. Implemented WCAG 2.1 accessibility features. Collaborated in agile teams.</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind', 'Accessibility', 'Figma', 'Jest'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          <a 
            href="mailto:Robin.Esbjornsson@hotmail.com"
            className="inline-block px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            Say Hello
          </a>
        </section>
      </main>
    </div>
  );
}