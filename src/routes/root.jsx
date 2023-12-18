import { Link, Outlet } from "react-router-dom";

export default function Root() {
  const links =[
    {
      label: 'Home', path:'/',
    },
    {
      label: 'Movies', path:'/movies',
    }
  ]

  const renderedLinks = links.map((link) => {
    return (
      <Link 
        key={link.label} 
        to={link.path} 
        className="mb-3"
        >
        {link.label}
      </Link>
    );
  });

  return (
    <>
      <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
