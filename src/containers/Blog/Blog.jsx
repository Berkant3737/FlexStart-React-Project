import React from "react";
import BlogContent from "../../components/Blog/BlogContent";
import SectionHeader from "../../components/SectionHeader";

const BlogData = [
  {
    image: "/images/Blog/blog-1.jpg",
    history: "Tue, September 15",
    title:
      "Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit",
    link: "#",
  },
  {
    image: "/images/Blog/blog-2.jpg",
    history: "Fri, August 28",
    title: "Et repellendus molestiae qui est sed omnis voluptates magnam",
    link: "#",
  },
  {
    image: "/images/Blog/blog-3.jpg",
    history: "Mon, July 11",
    title: "Quia assumenda est et veritatis aut quae",
    link: "#",
  },
];

function Blog() {
  return (
    <section class="Blog">
      <div class="container">
        <SectionHeader Title={"BLOG"} Text={"Recent posts form our Blog"} />
        <div class="row mt-5">
          <BlogContent Data={BlogData} />
        </div>
      </div>
    </section>
  );
}

export default Blog;
