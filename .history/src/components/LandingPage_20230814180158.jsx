import belgrano from "../img/belgrano.jpg";
export default function LandingPage() {
  return (
    <>
      <div>
        <img src={belgrano} className="logo" alt="Vite logo" />
      </div>
      <h1>Sitio en construccion</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Tienda de hardware a tu alcance
      </p>
    </>
  );
}
