import React from "react";

const BlogSidebar = () => {
  return (
    <div className="widget-area" id="secondary">
      <div className="widget widget_search" data-aos="fade-down">
        <h3 className="widget-title">Search Now</h3>
        <div className="post-wrap">
          <form className="search-form">
            <label>
              <span className="screen-reader-text">Search for:</span>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="widget widget_categories" data-aos="fade-down">
        <h3 className="widget-title">Categories</h3>
        <div className="post-wrap">
          <ul>
            <li>
              <a href="/blogs">
                Antibiotic <span>(10)</span>
              </a>
            </li>
            <li>
              <a href="/blogs">
                Diseases <span>(20)</span>
              </a>
            </li>
            <li>
              <a href="/blogs">
                Health Care <span>(10)</span>
              </a>
            </li>
            <li>
              <a href="/blogs">
                Heart Rate <span>(12)</span>
              </a>
            </li>
            <li>
              <a href="/blogs">
                Hospital <span>(16)</span>
              </a>
            </li>
            <li>
              <a href="/blogs">
                Infectious <span>(17)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
