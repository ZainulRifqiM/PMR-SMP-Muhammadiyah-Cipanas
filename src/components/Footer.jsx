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
      </div>
    </footer>
  );
};

export default Footer;
