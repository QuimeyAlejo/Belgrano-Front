import belgrano from "../img/belgrano.jpg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import mother from '../../../../Back/Belgrano-back/src/Image/MOTHER/B660M AORUS PRO DDR4 S1700.png'

export default function LandingPage() {
  return (
    <>
      {/* <div>
        <img src={belgrano} className="logo" alt="Vite logo" />
      </div>
      <h1>Sitio en construccion</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Tienda de hardware a tu alcance
      </p> */}
      <Carousel>
      <div>
        <img src={mother} alt="Imagen 1" />
        <p className="legend">Descripción de la imagen 1</p>
      </div>
      <div>
        <img src="imagen2.jpg" alt="Imagen 2" />
        <p className="legend">Descripción de la imagen 2</p>
      </div>
      <div>
        <img src="imagen3.jpg" alt="Imagen 3" />
        <p className="legend">Descripción de la imagen 3</p>
      </div>
    </Carousel>
    </>
  );
}
