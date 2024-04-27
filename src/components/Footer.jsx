const Footer = () => {
    return (
      <footer className="px-2 py-6 bg-stone-700 text-white">
        <div className="container flex flex-wrap items-center justify-between mx-auto space-y-4 sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="flex items-center justify-center flex-shrink-0 w-[80px] h-[80px] rounded-full">
              <a
                rel="noopener noreferrer"
                href="/"
                aria-label="Back to homepage"
                className="flex items-center p-2"
              >
                <img
                  src="/logo.png"
                  className="w-[50px] h-[50px] rounded-lg"
                  alt="main logo"
                />
              </a>
            </div>
            {/* <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Use
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
            </ul> */}
          </div>
          <ul className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer"  href="https://github.com/rkgith01" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer"  href="https://buymeacoffee.com/rajkapadiat" target="_blank">
                Buy-me-Coffee
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs">Made with ❤️ by Raj Kapadia</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  