import BlogCard from "../../components/commen/BlogCard/BlogCard"
import BlogImg from "../../assets/images/blog.png";
const BlogSection = () => {
  return (
    <section className="py-8   flex justify-center flex-col items-center gap-4">
    <div className="flex justify-center items-center flex-col gap-4 my-10">
      <h5 className="text-6xl font-semibold text-green-950 text-center">
        Latest Blog or News
      </h5>
      <p className="text-[#7D7D7D] w-2/3 text-center">
        {" "}
        Search all the open positions on the web. Get your own personalized
        salary estimate.Read reviews on over 30000+ companies worldwide.
      </p>
    </div>
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 6 }, (_, i) => (
        <BlogCard
          key={i}
          img={BlogImg}
          title={"11 Tips to Help You Get New Clients Through Cold Calling"}
          date={"29th Nov 2023"}
          time={"5 min read"}
          by={"Google"}
        />
      ))}
    </div>
  </section>
  )
}

export default BlogSection