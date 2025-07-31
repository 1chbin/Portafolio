import React from 'react';

export default function Home() {
    return (
        <section className="page-content">
            <div id="home">
                <div className="home-container">
                    <h1 className="titulo-home">Joaquin Allue</h1>
                    <img className='foto-mia' src="/assets/ImagenMia.jpg" alt="ImagenMia.jpg" />
                </div>
                <div className="Container">
                    <h2 className="Titulo">Bienvenido a mi portafolio</h2>
                    <p className="Text">
                        Soy un estudiante de Sistemas IT y desarrollador web. Aquí encontrarás información sobre mis proyectos, habilidades y experiencia.
                    </p>
                    <p className="Text">
                        Comencé en la programación mientras estudiaba mi tecnicatura de electromecánica en CoderHouse como desarrollador FrontEnd, luego estudié robótica y me empezó a gustar todo lo que tenga que ver con crear código. Así que me inscribí en el Sistema Dual de la cámara de industria y comercio argentino-alemana AHK, en donde concursé por varias pruebas y quedé junto a 14 compañeros más. Ahora estoy cursando en ella y estoy estudiando Sistemas IT, en donde estoy estudiando una serie de materias. Entre ellas:
                    </p>
                </div>
            </div>

            {/* Sección Me */}
            <div
                id="me"
                className="Container"
                style={{marginTop: '40px'}}
            >
                <h2 className="Titulo">Sobre mí</h2>
                <p className="Text">
                    Comencé en la programación mientras estudiaba mi tecnicatura de electromecánica en CoderHouse como desarrollador FrontEnd, luego estudié robótica y me empezó a gustar todo lo que tenga que ver con crear código. Así que me inscribí en el Sistema Dual de la cámara de industria y comercio argentino-alemana AHK, en donde concursé por varias pruebas y quedé junto a 14 compañeros más. Ahora estoy cursando en ella y estoy estudiando Sistemas IT, en donde estoy estudiando una serie de materias. Entre ellas:
                </p>
                <ul className='GridContainer'>
                    <li>Desarrollo de Software</li>
                    <li>Diseño y maquetado Web</li>
                    <li>Gestión de proyectos</li>
                    <li>Inglés Técnico</li>
                    <li>Alemán Técnico</li>
                    <li>Economía</li>
                    <li>Arquitectura de las computadoras</li>
                    <li>Análisis y procesos de sistemas</li>
                    <li>Redes de datos</li>
                    <li>Bases de datos</li>
                </ul>
                <p className="Text">
                    Con esto más lo que he aprendido por mi cuenta y en CoderHouse, he podido aprender una serie de lenguajes, frameworks y herramientas. Algunos de ellos son:
                </p>
                <ul className="GridContainer">
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>SQL</li>
                    <li>Laravel</li>
                    <li>PHP</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>SaSS</li>
                    <li>Git</li>
                    <li>HTML y CSS</li>
                    <li>C++ / Arduino</li>
                </ul>
                <p className="Text">
                    Y de a poco voy comenzando a estudiar otros lenguajes como Python, Java y más.
                </p>
            </div>
        </section>
    );
}