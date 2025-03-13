import Image from "next/image";

const Footer = (): React.ReactNode => {
  return (
    <footer>
      <div className="py-4 text-center">
        Made by
        <a href="https://github.com/dabinchiii" target="_blank">
          <strong> Dabin Lee </strong>
          <Image
            src="/images/icons/github-mark.png"
            alt="github link"
            width={24}
            height={0}
            className="inline"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
