import DomeGallery from "../../components/DomeGallery/DomeGallery";
import flyer1 from '../../assets/flyers/flyer1.png';
import flyer2 from '../../assets/flyers/2.png';
import flyer3 from '../../assets/flyers/3.png';
import flyer4 from '../../assets/flyers/4.png';

export default function Gallery() {
    const imgHeight = 600;
    const imgWidth = imgHeight * 8.5/11;
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
        <DomeGallery
            images={[flyer1, flyer2, flyer3, flyer4]}
            fit={0.8}
            minRadius={1000}
            maxVerticalRotationDeg={5}
            segments={20}
            dragDampening={2}
            grayscale={false}
            openedImageHeight={`${imgHeight}px`}
            openedImageWidth={`${imgWidth}px`}
        />
    </div>
    )
}