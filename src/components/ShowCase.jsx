
import './ShowCase.css'

const InfoCarta = ({banos, ambientes, metrosc}) => {

    return (
        <div className='infoCarta'>
            <div className='infoCarta_Item'>
                <img src='https://www.svgrepo.com/show/24537/cell-divided-into-three-areas.svg' /> 
                <p>{ambientes}</p>
            </div>
            <div className='infoCarta_Item'>
                <img src='https://www.svgrepo.com/show/382997/bathroom-cleaning-housekeeping-toilet.svg' />
                <p>{banos}</p>
            </div>
            <div className='infoCarta_Item'>
                <img src='https://www.svgrepo.com/show/532918/ruler-traingle.svg' />
                <p>{metrosc} m<sup>2</sup></p>
            </div>
        </div>
    )
}

const LocationCarta = ({ubicacion}) => {

    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '0 20px'}}>
          <img style={{height: '30px'}} src="https://www.svgrepo.com/show/286488/pin.svg" />
          <p style={{display: 'inline-block'}}>{ubicacion}</p>
        </div>
    )
}

const CartaImg = ({operacion, titulo, foto}) => {

    return (
        <div className='cartaImgContainer'>
            <img className="cartaImg" src={foto} />
            <p className='cartaImgCartel' >{operacion}</p>
            <div className='captionContainer'>
                <p className="imgCaption">{titulo}</p>
            </div>
            <p className='propTitle'>{titulo}</p>
        </div>
    )
}




const Carta = ({publicacion}) => {
    return (
        <div >
            <div className='carta'>
                <CartaImg titulo={publicacion.titulo} operacion={publicacion.operacion} foto={publicacion.foto} />
                <LocationCarta ubicacion={publicacion.ubicacion}  />
                <div className='cartaPrecio'>
                    <p>USD {publicacion.precio}</p>
                </div>
                <div className='cartaTipo'>
                    <p>Departamento / casa / galpon</p>
                </div>
                <InfoCarta banos={publicacion.banos} ambientes={publicacion.ambientes} metrosc={publicacion.metrosc} />
            </div>
            
        </div>
    )
}

const ShowCase = () => {

    const publicaciones = [
        {
          ubicacion: "Av. Libertador 123",
          ambientes: 3,
          banos: 2,
          metrosc: 120,
          operacion: "Venta",
          precio: 80000,
          foto: "https://casasenventahermosillo.com.mx/wp-content/uploads/2022/08/Diferencia-entre-apartamento-y-departamento-1024x683.webp",
          titulo: "Amplio departamento en Av. Libertador"
        },
        {
          ubicacion: "Calle San Martín 456",
          ambientes: 2,
          banos: 1,
          metrosc: 80,
          operacion: "Alquiler",
          precio: 30000,
          foto: "https://images.hola.com/imagenes/decoracion/20191016151055/decoracion-interiores-apartamento-pequeno-bien-distribuido/0-729-735/apartamento-4t-t.jpg",
          titulo: "Acogedor apartamento en Calle San Martín"
        },
        {
          ubicacion: "Av. Rivadavia 789",
          ambientes: 4,
          banos: 3,
          metrosc: 150,
          operacion: "Venta",
          precio: 95000,
          foto: "https://www.phillyaptrentals.com/wp-content/uploads/2014/05/apartment-features.jpg",
          titulo: "Gran oportunidad en Av. Rivadavia"
        },
        {
          ubicacion: "Calle Belgrano 101",
          ambientes: 1,
          banos: 1,
          metrosc: 50,
          operacion: "Alquiler",
          precio: 20000,
          foto: "https://cdn.incorposul.com.br/wp-content/uploads/2022/07/apartamento-duplex.jpg",
          titulo: "Cómodo monoambiente en Calle Belgrano"
        },
        {
          ubicacion: "Av. 9 de Julio 222",
          ambientes: 3,
          banos: 2,
          metrosc: 110,
          operacion: "Venta",
          precio: 75000,
          foto: "https://d2p0bx8wfdkjkb.cloudfront.net/static/properties/3044MFNQJZ/JQXHOXTJ0C/qqbCjrNDKv/WhatsApp_Image_2022-08-15_at_10.57.41_AM.jpeg",
          titulo: "Departamento moderno en Av. 9 de Julio"
        },
        {
          ubicacion: "Calle Sarmiento 333",
          ambientes: 2,
          banos: 1,
          metrosc: 70,
          operacion: "Alquiler",
          precio: 25000,
          foto: "https://d3s5pkt10pk3ga.cloudfront.net/resizedImages/original/site/fincaraiz_service/media/listing/257edf56-abbf-44d3-bc57-fc825ec8daa1/photos/257edf56-abbf-44d3-bc57-fc825ec8daa1_1_True_166bf03e-2c5d-4b62-8472-4f03a546e319.jpg",
          titulo: "Excelente opción en Calle Sarmiento"
        },
        {
          ubicacion: "Av. Corrientes 444",
          ambientes: 5,
          banos: 3,
          metrosc: 200,
          operacion: "Venta",
          precio: 100000,
          foto: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/488467637.jpg?k=832f459b30d57928371d815541c1651caad6a4ae3ec858c84690916c5ef71a26&o=&hp=1",
          titulo: "Amplio departamento en Av. Corrientes"
        }
      ]
      
      
      

    return (
        <>
            <h1 style={{textAlign: 'center', marginTop: '50px'}}>Propiedades destacadas</h1>
            <div className='showCase' >
                {publicaciones.map(((x, i) => <Carta publicacion={x} key={i} />))}
            </div>
        </>
    )
}

export default ShowCase

