
import image1 from '../../../../assets/images/carouselImages/slider1.png';
import image2 from '../../../../assets/images/carouselImages/slider2.png';
import image3 from '../../../../assets/images/carouselImages/slider3.png';
import CarouselItem from '../CarouselItem/CarouselItem';

const Carousel = () => {
    
    const carouselItems = [
        {
            id: 1,
            next: 2,
            prev: 3,
            image: image1,
            label: "NEW WOMEN COLOTHING",
            title: "Autumn Jackets Collection In 2024."
        },
        {
            id: 2,
            next: 3,
            prev: 1,
            image: image2,
            label: "NEW WOMEN COLOTHING",
            title: "Autumn Jackets Collection In 2024."
        },
        {
            id: 3,
            next: 1,
            prev: 2,
            image: image3,
            label: "NEW WOMEN COLOTHING",
            title: "Autumn Jackets Collection In 2024."
        },
       
    ]

    return (
        <div className="carousel w-full relative">
           {
            carouselItems.map(carouselItem => <CarouselItem key={carouselItem.id} carouselItem={carouselItem} />)
           }
        </div>
    );
};

export default Carousel;