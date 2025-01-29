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
        "https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mu~FgYgpFYa~prm878mRTDKEVASl7tfkrNnD49aVrrzK5WaQj4HFF0xjiDQ~OaDLuYiG556X6J9VRJ7Cq4sLQwNbiRjJh-~DKdYVgAkhFrNeNXvlka2T2CdPHtHrNv3R7Tu0L3t2dOqCaW3KyRHzIu14WrDDPDjpy6dQOvmK7Jn1x-9yz3Y-JNQ9eaU~Y~7uMB1flP21rhghBnJ0jhM~g3RTH92KjVVJ-LhFI1b-knWEaFTCLoZlGQLzmMylz6LGBd9zDXk~Uk92x-sho87~yjUXYc5~ASBMK0xp3sexBLdPJQgtS6Rdw29nfNCnq244SbIbCW46itxW1l~rNHghOQ__",
      categories: ["Tax & Audit", "Management"],
      timeToRead: "Today",
    },
    {
      id: 2,
      title: "Scale-Up Company Offer",
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      description: "Mental models are simple expressions of complex processes or relationships.",
      image: "https://s3-alpha-sig.figma.com/img/908f/6e6d/adefff9c6fad99774e0aa7808b2270ab?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Absa7a4y2vjrhyqxECO4-fWr4VqVyjIEplwJLbTPnNRN6molpidsJJHn2ETGsddoprZCbRL0ezIeslwMIPlFombBqk8aCVltLSXDX3Y2f0owQOc9iShzH5s4mH3JxpphLLEcLdA8~NDvG6tJ6rJ0E6XV-8lDmiSHgDUmCpy06gkV5EAYXhgM1e82tOvtvUHnjpjJbbYDhsXikKMLp-b3BOJvf05JW~AjPqDYt0u42-N3P0kikXqXRUx5fnl7qhygHkcpoYoNM8qhjITWFn8yUw5E9OQhGS4hJz~-u1zmNiHSaCsj-BU7jv8jQNURPYEyFUHp2jE-RHmznd1jjNZDwA__",
      categories: ["Tax", "Research", "Complience"],
    },
    {
      id: 3,
      title: "Growing Business Package",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image:
        "https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mu~FgYgpFYa~prm878mRTDKEVASl7tfkrNnD49aVrrzK5WaQj4HFF0xjiDQ~OaDLuYiG556X6J9VRJ7Cq4sLQwNbiRjJh-~DKdYVgAkhFrNeNXvlka2T2CdPHtHrNv3R7Tu0L3t2dOqCaW3KyRHzIu14WrDDPDjpy6dQOvmK7Jn1x-9yz3Y-JNQ9eaU~Y~7uMB1flP21rhghBnJ0jhM~g3RTH92KjVVJ-LhFI1b-knWEaFTCLoZlGQLzmMylz6LGBd9zDXk~Uk92x-sho87~yjUXYc5~ASBMK0xp3sexBLdPJQgtS6Rdw29nfNCnq244SbIbCW46itxW1l~rNHghOQ__",
      categories: ["Audit", "Money Back"],
    },
    {
      id: 4,
      title: "Scale-Up Company Offer",
      author: "Karan Kumar",
      date: "1 Jan 2023",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      image: "https://s3-alpha-sig.figma.com/img/950f/4305/76ceafadb9f758a56d19a086f7505a80?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mglb5bjs0cmrUQcJl6buQodQ3e1~rPMXbvxwKmOUapCmH7M3DdcRcTbA0VTv7GsOkbLWJvM6DGJu7pA0nXCGkO-650vbxH4SM4rpPfH45fmkF9coVdKVuOgIJXRZoRe0H4QLdTbDk~JOaiRKYToU1xKEHgqyMbXg7Kx2TEudbDn6eEXoU2E2iAMsEXBnjAH~~oHqhf6oKChpLBzGkAMeNqm7DiFy6UY~CPnCTtf6FkoBsdNelXzEKDfwNuFU2HTbP9ofEh7-ADJc~DJxjfvetZQ6wOt-RiGbBM0xkqAHgFPUMXtiYrX-aXUPJAm6qSrbGwUcdNeteygNQUfqzKJ-oQ__",
      categories: ["Money", "Management"],
    },
    {
      id: 5,
      title: "Scale-Up Company Offer",
      author: "Richa Singh",
      date: "1 Jan 2023",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: "https://s3-alpha-sig.figma.com/img/1155/4089/6b913ddf85158d3f3246fba7da982400?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZK7CAu6Ld7CRiDqUi0FNqkFuM-k1MCJg4S0mU0DlEZwsmwAjuRTHTGXhpo6KiejzKqILWY65zblTdtBQ9Fu7fJUNJZ5hwCDJlgm7u2zSzMl89c7kAtjZ8OaZMqaP06~AbIiDBD3qpfZarF~d3I-lPkPrrUZYG8yMGgHX1Yw1QTpjuCzN-zojNT8NzmOm7I5rGApwxtpD63ieDjUIwGpDw7mMZExxchMP0fT4y1QMRQjQuzByXEphOaEZXS2IErQxEEKvpRhpag0hx-QVr06G9vBRdc9j-6dyroylH5erfBhIEFsbl2YsG140MRFdimPOIAxZQaMQ~KQWG9HQeBR3DA__",
      categories: ["Tax Return", "News", "Audit"],
    },
    {
      id: 6,
      title: "Scale-Up Company Offer",
      author: "Miss Nora",
      date: "1 Jan 2023",
      description: "Starting a community doesn't need to be complicated, but how do you get started?",
      image: "https://s3-alpha-sig.figma.com/img/b86d/a4b5/ab8c0e971321e0daafdbc3bc3adffb48?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iTnFvX-TqNDe4ni77JzexeKJTGe-c9oP9gfm8dqX5psfXqwd~7EEnTQB2oetbrkWIawpSzt~OVvHwyQQHk9LOG~JvVucrJIr3i0x3y3k3olsBKnq0eVWn8xz-1y6r4jveYs0NTtr4G3gb9i~Nzjn0LRye33cx0DE4-bshzbBbDf63qDeve694l8g0y4M--ocTME19E7qweIPb0FRS3fAoZxywwbGVt-chA78kyYHkO~YsMMwOUVgvtNwf5bkR79bWgxd3XHkIJslSeXPbzvJBaDgIhIID3YDMxBOPfzMepeDAjCIPCrPfQFBGA~mMZhALKmRaEmmIYFFVQm6Ilcdmw__",
      categories: ["Private Limited Company", "Customer Success"],
    },
  ]
