// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,

// } from 'mdb-react-ui-kit';

// export default function Footer() {
//   return (
//     <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' >

//       <div className='text-black' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
//         <section className='d-flex justify-content-center justify-content-lg-between p-50 border-bottom border-top border-1 border-secondary' >
//           <div className='me-5 d-none d-lg-block'>
//             <span>Nuestras redes sociales:</span>
//           </div>

//           <div>
//             <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' className='me-4 text-reset'>
//               <MDBIcon fab icon='youtube' />
//             </a>
//             <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' className='me-4 text-reset'>
//               <MDBIcon fab icon='github' />
//             </a>
//             <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' className='me-4 text-reset'>
//               <MDBIcon fab icon='github' />
//             </a>
//           </div>
//         </section>

//         <section className=''>
//           <MDBContainer className='text-center text-md-start mt-50'>
//             <MDBRow className='mt-3'>
//               <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
//                 <h6 className='text-uppercase fw-bold mb-4' color='light'>
//                   <MDBIcon icon='gem' className='me-3' />
//                   Belgrano Informatica
//                 </h6>
//                 <p>
//                   Somos una compañía dedicada a la venta de hardware
//                   <br />
//                   Con nosotros encontrarás calidad y todo tipo de productos informaticos
//                   <br />
//                   Empresa líder en la obtención y distribución de productos de carácter exclusivo.
//                 </p>
//               </MDBCol>

//               <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
//                 <h6 className='text-uppercase fw-bold mb-4'>Links útiles</h6>
//                 <p>
//                   <a href='/' className='text-reset'>
//                     Productos
//                   </a>
//                 </p>
//                 <p>
//                   <a href='/' className='text-reset'>
//                     Ofertas
//                   </a>
//                 </p>
//                 <p>
//                   <a href='/' className='text-reset'>
//                     Ingresar
//                   </a>
//                 </p>
//                 <p>
//                   <a href='/' className='text-reset'>
//                     Carrito
//                   </a>
//                 </p>
//               </MDBCol>

//               <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
//                 <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
//                 <p>
//                   <MDBIcon icon='home' className='me-2' />
//                   P. Sherman, calle Wallaby 42, Sidney
//                 </p>
//                 <p>
//                   <MDBIcon icon='envelope' className='me-3' />
//                   BelgranoGroup@gmail.com
//                 </p>
//                 <p>
//                   <MDBIcon icon='phone' className='me-3' /> + 1 234 56
//                 </p>
//                 <p>
//                   <MDBIcon icon='print' className='me-3' /> + 244466666
//                 </p>
//               </MDBCol>
//             </MDBRow>
//           </MDBContainer>
//         </section>

//         <div className='text-center p-4 bg-primary bg-gradient text-white border-top border-2 '>
//           © 2023 Copyright:
//           <a className='text-reset fw-bold' href='#'>
//             Belgrano Group
//           </a>
//         </div>
//       </div>
//     </MDBFooter>
//   );
// }

// -------------------------------------------------------------------------------------------------------------------------------------//
import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Nuestras redes! </span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Belgrano Informatica
              </h6>
              Somos una compañía dedicada a la venta de hardware Con nosotros
              encontrarás calidad y todo tipo de productos informaticos Empresa
              líder en la obtención y distribución de productos de carácter
              exclusivo.
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Redes!</h6>
              <p>
                <a href="https://github.com/QuimeyAlejo" className="text-reset">
                  Github
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/quimey-alejo-lopez-199431202/" className="text-reset">
                  Linkedin
                </a>
              </p>
              <p>
                <a href="https://www.youtube.com/watch?v=gXGYLpHNRss" className="text-reset">
                  Productos GRATIS!
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/belgrano_informatica/" className="text-reset">
                  Instagram
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Mas</h6>
              <p>
                <a href="#" className="text-reset">
                  Inicio
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/belgrano_informatica/" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/belgrano_informatica/" className="text-reset">
                  Soporte
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="#">
          Belgrano Informatica
        </a>
      </div>
    </MDBFooter>
  );
}
