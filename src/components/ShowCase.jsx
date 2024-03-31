
import './ShowCase.css'

const Carta = () => {

    const style = {
        backgroundColor: '#eaeaea',
        width: '20vw', 
        height: '500px', 
        border: '2px solid #ed7215',
        borderRadius: '15px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',

        
    }

    return (
        <div>
            <div style={style}>
                <div className='imgContainer'>
                    <img className="cardImg" src='https://visssy.co/blog/wp-content/uploads/2023/06/apartamento-en-obra-gris_estancia-navarra_visssy_remodelaciones-1250x834.jpg' />
                    <p className='cartel' >Venta o alquiler</p>
                    <div className='captionContainer'>
                        <p className="imgCaption">Your image caption goes here</p>
                    </div>
                </div>
                <p style={{height: '20px'}} >Sucucho en recoleta por dos mangos</p>
                <p style={{position: 'relative', top: '30px', right: '0', zIndex:'5'}} >se vende apartamento</p>
            </div>
        </div>
    )
}

const ShowCase = () => {
    const scstyle = {
        display: 'flex', 
        gap: '50px', 
        flexWrap: 'wrap', 
        justifyContent: "space-evenly", 
        padding: '50px', 
        width: '65vw', 
        backgroundColor: '#c0d7e4', 
        margin: '50px auto'
    }


    return (
        <div style={{display: 'flex', gap: '50px', flexWrap: 'wrap', justifyContent: "space-evenly", padding: '50px', width: '65vw', backgroundColor: '#c0d7e4', margin: '50px auto'}}>
            <Carta />
            <Carta />
            <Carta />
            <Carta />
            <Carta />
            <Carta />
            <Carta />
        </div>
    )
}

export default ShowCase

