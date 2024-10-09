const CarouselItem = ({ carouselItem }) => {
  const { id, prev, next, image, label, title } = carouselItem;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className={`absolute items-start ${(id === 1 || id ===2) ? "left-[17%]" : "right-[17%] items-end text-right" }  h-full flex flex-col gap-5 justify-center w-[30%]`}>
        <p className="text-lg capitalize">{label}</p>
        <h1 className="text-6xl font-extrabold leading-snug">{title}</h1>
        <button className="bg-blue-600 text-white px-5 py-3">SHOP NOW</button>
      </div>
      <img src={image} className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
