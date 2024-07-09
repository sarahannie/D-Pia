/* eslint-disable react/prop-types */
import Icons from "../../Icons";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function BlogCard({ item }) {
  const [latestPost, setLatestPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch('https://dpiainnovations.com/blog/wp-json/wp/v2/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLatestPost(data[0]); // Get the first post
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchLatestPost();
  }, []);

  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    latestPost && (
      <div className="p-2 rounded-md hover:shadow h-fit group">
        <Link to="/blogs" onClick={() => navigate('https://dpiainnovations.com/blog/')}>
          <img src={latestPost.jetpack_featured_media_url} className="shadow-sm w-80 xl:w-[18em]" alt={latestPost.title.rendered} />
          <div className="w-80 xl:w-[18em] mt-4">
            <h2 className="my-2 text-sm font-bold text-orange-600">
              {latestPost.title.rendered.replace(/&#8217;/g, "'")}
            </h2>
            <div className="flex items-center w-full gap-2 justify-evenly ">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 ">
                  {latestPost.excerpt.rendered.replace(/(<([^>]+)>)/gi, "").replace(/\[\&hellip\;\]/g, '').substring(0, 150)}
                </h3>
              </div>
              <div>
                <Icons.ArrowUpRight
                  className="font-extrabold text-black duration-500 size-4 group-hover:translate-x-1 group-hover:-translate-y-2"
                />
              </div>
            </div>
            <p className="mt-1 font-medium text-gray-500 text-md line-clamp-3">
              {latestPost.excerpt.rendered.replace(/(<([^>]+)>)/gi, "").substring(0, 150)}...
            </p>
            <div className="flex items-center gap-4 mt-6">
              {/* <div>
                <img
                  src={latestPost?.author?.image}
                  alt={`author - ${latestPost?.author?.name}'s profile`}
                  className="object-cover rounded-full size-8 xl:size-12"
                />
              </div> */}
              <div className="flex flex-col">
                <span className="font-bold max-sm:text-base">
                  {latestPost?.slug}
                </span>
                <span className="font-semibold text-gray-500 max-sm:text-base">
                  {new Date(latestPost.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  );
}
