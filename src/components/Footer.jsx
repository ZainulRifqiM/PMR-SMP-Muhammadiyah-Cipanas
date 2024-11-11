const Footer = () => {
  return (
    <footer className="bg-white  shadow dark:bg-secondary mb-20 md:mb-0">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:px-8 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-white">
          © 2023{" "}
          <a
            href="https://www.instagram.com/mat.chaui/"
            className="hover:underline"
            target="_blank"
          >
            MatchaUI™
          </a>
          . All Rights Reserved.
        </span>
        {/* <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul> */}
      </div>
    </footer>
  );
};

export default Footer;
