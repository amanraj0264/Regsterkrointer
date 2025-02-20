export const Blogs=()=>{
    return(
        <>
       <div className="mx-auto max-w-[1330px] px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-orange-500 font-medium mb-2">EXPLORE OUR BLOGS</p>
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Accelerate Digital Transformation</h1>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="flex flex-col bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={blog.image || "/placeholder.svg"}
                alt={`Illustration for ${blog.title}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{blog.author}</span>
                <span className="mx-2">•</span>
                <span>{blog.date}</span>
                {blog.timeToRead && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{blog.timeToRead}</span>
                  </>
                )}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3 group">
                <a href="#" className="hover:text-orange-500 transition-colors flex items-center">
                  {blog.title}
                 
                </a>
              </h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <div className="flex flex-wrap gap-2">
                {blog.categories.map((category, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                      ${index % 3 === 0 ? "text-purple-700 bg-purple-100" : ""}
                      ${index % 3 === 1 ? "text-blue-700 bg-blue-100" : ""}
                      ${index % 3 === 2 ? "text-red-700 bg-red-100" : ""}
                    `}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-12">
        <button className="py-2 px-4 bg-primary text-white rounded">
        Show more blogs
        </button>
      </div>
    </div>
        </>
    );
}




const blogs = [
    {
      id: 1,
      title: "Small business & Startup",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image:
        "/img/blog1.jpeg",
      categories: ["Tax & Audit", "Management"],
      timeToRead: "Today",
    },
    {
      id: 2,
      title: "Scale-Up Company Offer",
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      description: "Mental models are simple expressions of complex processes or relationships.",
      image: "/img/blog2.jpeg",
      categories: ["Tax", "Research", "Complience"],
    },
    {
      id: 3,
      title: "Growing Business Package",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image:
        "/img/blog3.jpeg",
      categories: ["Audit", "Money Back"],
    },
    {
      id: 4,
      title: "Scale-Up Company Offer",
      author: "Karan Kumar",
      date: "1 Jan 2023",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      image: "/img/blog4.jpeg",
      categories: ["Money", "Management"],
    },
    {
      id: 5,
      title: "Scale-Up Company Offer",
      author: "Richa Singh",
      date: "1 Jan 2023",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: "/img/blog5.jpeg",
      categories: ["Tax Return", "News", "Audit"],
    },
    {
      id: 6,
      title: "Scale-Up Company Offer",
      author: "Miss Nora",
      date: "1 Jan 2023",
      description: "Starting a community doesn't need to be complicated, but how do you get started?",
      image: "/img/blog6.jpeg",
      categories: ["Private Limited Company", "Customer Success"],
    },
  ]
