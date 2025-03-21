import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'


function App() {
    return (
        <div>
            <section className='here is-primary'></section>
            <div className='hero-body '> </div>
            <p className='title'>Personal Digital Assistants</p>


            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                image={AlexaImage}
                                description="Alexa is good"
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                image={CortanaImage}
                                description="Alexa is good" />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                title="Siri"
                                handle="@siri01"
                                image={SiriImage}
                                description="Alexa is good"
                            />
                        </div>
                    </div>
                </section>
            </div>


        </div>
    )
}

export default App; 