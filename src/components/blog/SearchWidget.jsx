import React from "react";

function SearchWidget() {
  return (
    <div className="blog-widget">
      <div className="sidebar-search">
        <form>
          <div className="form-inner">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <i className="bx bx-search" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchWidget;
