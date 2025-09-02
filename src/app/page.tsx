export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        {/* Main Hello World Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Hello World
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Welcome Message */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
            Welcome to your new Next.js application
          </p>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            This is a simple Hello World page built with Next.js, TypeScript, and Tailwind CSS. 
            Ready to start building something amazing?
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="pt-8">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="pt-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Getting Started
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Edit This Page</h3>
              <p className="text-gray-600 text-sm">
                Start by editing <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/app/page.tsx</code> to customize this page.
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Learn More</h3>
              <p className="text-gray-600 text-sm">
                Explore Next.js features like routing, API routes, and more to build your application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}