import Image from "next/image";

const GNB = (): React.ReactNode => {
  return (
    <nav>
      <div className="w-full h-[5rem]"></div>
      <div className="fixed z-50 w-full h-[5rem] top-0 left-1/2 transform -translate-x-1/2 px-4 p-2 bg-[#C27373] border-b border-white">
        <div className="flex justify-between">
          <a href="./">
            <Image
              src="/images/icons/focustimer_logo.png"
              alt="Focus Timer"
              width={160}
              height={0}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default GNB;
