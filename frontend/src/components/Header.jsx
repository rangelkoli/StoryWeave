import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setCredentials, logout } from "../features/auth/authSlice";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem("authTokens");
    console.log(token);
    const decoded = token ? jwtDecode(token) : null;
    console.log(decoded);

    if (token != null && decoded != null) {
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Token has expired, perform logout
        dispatch(logout());
      } else {
        dispatch(
          setCredentials({
            token,
            username: decoded.username,
            email: decoded.email,
          })
        );
      }
    }
  }, []);
  return (
    <header className=' fixed inset-x-0 top-0 z-50 bg-white '>
      <nav
        aria-label='Global'
        className='flex items-center justify-between p-6 lg:px-8 h-14'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img
              alt=''
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              className='h-8 w-auto'
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='h-6 w-6' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          {user ? (
            <div className='flex items-center justify-between bg-green-100 rounded-lg px-4'>
              <p className='text-green-700 font-semibold'>
                Welcome back, {user.username}!
              </p>
              <button
                onClick={() => dispatch(logout())}
                className='text-green-700 font-semibold'
              >
                Logout
              </button>
            </div>
          ) : (
            <a
              href='/login'
              className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
            >
              Log in
            </a>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden bg-white text-white'
      >
        <div className='fixed inset-0 z-50' />
        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                alt=''
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                className='h-8 w-auto'
              />
            </a>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-white'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='h-6 w-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                {user ? (
                  <div className='flex items-center justify-between bg-green-100 px-4 py-2 rounded-lg'>
                    <p className='text-green-700 font-semibold'>
                      Welcome back, {user.username}!
                    </p>
                    <button
                      onClick={() => dispatch(logout())}
                      className='text-green-700 font-semibold'
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <a
                    href='/login'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Log in
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
