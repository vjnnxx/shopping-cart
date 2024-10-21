import model from '../assets/model.jpg';
import { Link } from 'react-router-dom';
import './Home.css';

function Home () {

    return(
        <>
            <div className="home">
                
                <div className="home-banner">
                    <img src={model} alt="Modelo" className='home-image'/>
                </div>

                

                <div className="home-text">
                    <h1>Bem vindo à nossa loja!</h1>

                    <p>
                        Cras vitae nibh tempus, malesuada mauris nec, commodo est. Aliquam consectetur libero a venenatis commodo. Nam hendrerit velit sit amet metus pulvinar, vel aliquam erat blandit. Nullam vel lacus eu diam dignissim sollicitudin. Quisque leo ex, dignissim ut tristique sed, accumsan sed nisl. 
                        Integer at dapibus velit. Morbi iaculis et turpis eu lacinia. Nunc lobortis, leo in congue lobortis, turpis justo cursus orci, ac feugiat ligula neque at tortor. Vestibulum in bibendum augue. Nam volutpat nunc vel elit faucibus, nec feugiat purus euismod. Quisque ligula dui, suscipit sit amet auctor fermentum.
                    </p>

                    <p>
                        Proin non dapibus turpis, in commodo nisi. Nunc sit amet turpis scelerisque justo fermentum imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Suspendisse mattis efficitur ligula ultrices euismod. Donec justo elit, ultrices a tortor id, dignissim ullamcorper tellus. Aenean eu justo efficitur, cursus lacus ut, elementum erat. 
                        Suspendisse non dolor ipsum. Donec feugiat erat at tellus pharetra, eu hendrerit nibh laoreet.
                    </p>

                    <div className="button-div">

                        <Link to="/products">
                            <button className='go-shopping default-button'>Comprar</button>
                        </Link>
                        
                    </div>

                    
                </div>

            </div>
            
        </>
    )
}

export default Home;