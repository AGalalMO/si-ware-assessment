import { ReactNode } from "react";
import { useLocation } from "react-router";
import logo from "../../assets/logo1.jpg";
interface Props {
  children: ReactNode;
}
export const MainLayout = (props: Props) => {
  const { children } = props;
  const { pathname } = useLocation();
  return (
    <>
      <nav className='bg-white border-gray-200 border-b-[1px]'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <div className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={logo} className='h-16' alt='Flowbite Logo' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap '>
              Assessment
            </span>
          </div>
          <div className=' block w-auto' id='navbar-default'>
            <ul className='font-medium flex flex-row p-4    rtl:space-x-reverse  bg-white '>
              <li>
                <a
                  href='/'
                  className={`block py-2 px-3  hover:bg-gray-100  rounded  ${
                    pathname == "/" ? "text-blue-700" : "text-gray-900"
                  }`}
                  aria-current='page'>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href='/products'
                  className={`block py-2 px-3  rounded hover:bg-gray-100 ${
                    pathname == "/products" ? "text-blue-700" : "text-gray-900"
                  }`}>
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};
