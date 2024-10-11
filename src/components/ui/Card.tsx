interface ServiceCardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
}

const Card: React.FC<ServiceCardProps> = ({
  title,
  description,
  linkText,
  linkHref,
  imageSrc,
}) => {
  return (
    <>
      <div className="p-4 lg:w-1/3">
     

        <div className="h-full bg-[#ededed] bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden relative">
          {/* Image */}
          <img
            src={imageSrc}
            alt="image"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          {/* Glassmorphism effect */}
          <div className="px-8 py-5">
            <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
              {title}
            </h1>
            <p className="leading-relaxed mb-3 opacity-80">{description}</p>
            <a
              href={linkHref}
              className="text-red-500 inline-flex items-center hover:scale-110"
            >
              {linkText}
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          
        </div>
           {/* Gradient Blob */}
           <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="relative w-full h-full">
            <div className="bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 opacity-5 sm:h-80 w-full blur-2xl absolute bottom-[100px] "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
