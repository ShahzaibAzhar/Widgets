import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEevnt = new PopStateEvent("popstate");
    window.dispatchEvent(navEevnt);
  };
  return (
    <div>
      <a onClick={onClick} className={className} href={href}>
        {children}
      </a>
    </div>
  );
};

export default Link;
