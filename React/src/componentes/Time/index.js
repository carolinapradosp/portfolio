import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        //aqui poderia usar o operador &&, ele verifica se for true, se for ele executa o bloco da direita, se não não faz nada
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
            </div>
        </section> 
        : ''
    )
}

export default Time