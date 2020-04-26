import React from 'react'
import enunciado from './images/problema15.png'
import './App.css'
import Latex from 'react-latex'
const imageStyle = { boxShadow: '2px 2px 5px 2px #eeeeee' }
const latexParagraphStye = { marginLeft: '0rem' }
const imageWrapper = { display: 'flex', padding: 8, justifyContent: 'center' }
const containerStyle = { display: 'flex', flexDirection: 'column', padding: '4rem', }
const standoutStyle = { backgroundColor: '#e0e0e0', padding: '0.5rem' }
const anchorStyle = {textDecoration: 'none', }
const App = () => {
  return (<div style={containerStyle}>
    <h2>El problema</h2>
    <div style={imageWrapper} >
      <img style={imageStyle} alt="enunciado" src={enunciado} />
    </div>

    <h2><br />La solución</h2>
    <p>
      En primer lugar hallamos la intersección <em>L</em> de los dos planos: <Latex>{`$\\Pi$  y  $\\Pi'$`}</Latex>
    </p>
    <p style={latexParagraphStye}>
      <Latex>
        {`$$
        L = {(x,y,z)} \\in \\mathbb{R}^3  \\text{ para los cuales se cumplen }
        \\begin{cases}
            4x-y+3z=2 \\text{ [1]} \\\\
            2x+2y-z=6 \\text{ [2]} \\\\
        \\end{cases}
        $$`}
      </Latex>
    </p>

    <p>
      Eso es una recta. Vamos a expresar la recta en forma paramétrica.
    </p>
    <p>Tomamos λ como parámetro y hacemos <Latex>$λ = x$</Latex></p>

    <Latex>
      {`$$
        L = {(x,y,z),λ } \\in \\mathbb{R}^3  \\text{ para los cuales se cumple: } \\forall{λ}
        \\begin{cases}
          x =-\\frac{5}{6}λ + \\frac{5}{3}\\\\
          y = \\frac{4}{3}λ +\\frac{4}{3}\\\\
          z = λ
        \\end{cases}
        $$`}
    </Latex>

    <p> Despejando x, y y z a partir de estas dos ecuaciones (Para ver como se hizo hacé clic <a style={anchorStyle} href="#despeje" >aquí</a>) : </p>

    <p style={latexParagraphStye}>
      <div style={standoutStyle}>
        <Latex>
          {`$$
        L = {(x,y,z),λ } \\in \\mathbb{R}^3  \\text{ para los cuales se cumple: } \\forall{λ}
        \\begin{cases}
        x =-\\frac{5}{6}λ + \\frac{5}{3}\\\\
        y = \\frac{4}{3}λ +\\frac{4}{3}\\\\
        z = λ
        \\end{cases}
        $$`}
        </Latex>
      </div>
    </p>
    <p>
      El conjunto de ecuaciones anterior se puede expresar, si tomamos<br /><br />
      <Latex>{`$\\vec{x} = (x, y, z)$`}</Latex><br />
      <Latex>{`$\\vec{u} = (\\frac{5}{3}, \\frac{4}{3}, 0)$`}</Latex><br />
      <Latex>{`$\\vec{v} = (-\\frac{5}{6}, \\frac{4}{3}, 1)$`}</Latex><br /><br />
      como<br /><br />
      <Latex>{`$\\vec{x} = \\vec{u} + λ\\vec{v}$`}</Latex><br />
    </p>
    <p>O, en la extraña notación de los profesores de tu alumna (<Latex>{`$\\vec{x} = [\\vec{v}] + \\vec{u}$`}</Latex>):<br />
    </p>
    <p style={standoutStyle}>
      <Latex>{`$\\vec{x} = [(-\\frac{5}{6}, \\frac{4}{3}, 1)] + (\\frac{5}{3}, \\frac{4}{3}, 0)$`}</Latex><br />
    </p>
    <a style={anchorStyle} id="despeje" href="#despeje">
      <h2>Auxiliar: Operaciones para despejar las variables x, y y z</h2>
    </a>
    <p>Partimos de </p>
    <p style={latexParagraphStye}>
      <Latex>
        {`$$
        L = {(x,y,z)} \\in \\mathbb{R}^3  \\text{ para los cuales se cumplen }
        \\begin{cases}
            4x-y+3z=2 \\text{ [1]} \\\\
            2x+2y-z=6 \\text{ [2]} \\\\
            \\end{cases}
            $$`}
      </Latex>
    </p>

    <p>En principio tenemos que <Latex>$x = λ$</Latex> porque lo hemos decidido así.</p>
    <p style={standoutStyle}><Latex>
      {`$$
            x = λ
            $$`}
    </Latex></p>
    <p>Entonces la ecuación [2] queda:</p>
    <div><Latex>
      {`$$
            z = 2λ+2y-6 \\text{ [3] }\\\\
      $$`}
    </Latex></div>

    <p>En la ecuación [1] vemos que:</p>
    <div><Latex>
      {`$$
          4x-y+3z=2 \\text{, o sea }\\\\
          4λ-y+3z=2 \\text{, o sea }\\\\
          4λ-y+3(2λ+2y-6)=2 \\text{, o sea }\\\\
          4λ-y+6λ+6y-18=2 \\text{, o sea }\\\\
          10λ+5y-18=2 \\text{, o sea }\\\\
          10λ+5y-18=2 \\text{, o sea }\\\\
          5y-20=-10λ \\text{, o sea }\\\\
          y-4=-2λ
        $$`}
    </Latex></div>
    <p>Queda despejada y</p>
    <p style={standoutStyle}><Latex>
      {`$$
            y = -2λ + 4 [4]
      $$`}
    </Latex></p>
    <p>Sólo queda z para resolver, usamos entonces [3]</p>
    <div><Latex>
      {`$$
        z = 2λ+2y-6
        $$`}
    </Latex></div>
    <p>Sustituimos y por su equivalente (ver [4])</p>
    <div><Latex>
      {`$$
        z = 2λ+2(-2λ + 4)-6 \\text{, o sea }\\\\
        z = 2λ-4λ + 8-6 \\text{, o sea... }\\\\
        $$`}
    </Latex></div>
    <p>...que tenemos z</p>
    <p style={standoutStyle}><Latex>
      {`$$
        z = -2λ+2
      $$`}
    </Latex></p>

    <p>
      Resumiendo, 
      la linea buscada, intersección de los planos <Latex>{`$\\Pi$  y  $\\Pi'$`}</Latex>,
      es el conjunto de los puntos (x, y, z) en el espacio tridimensional que cumplen: 
    </p>

    <div>
      <Latex>
        {`$$
        \\forall{λ}  \\in \\mathbb{R}\\\\
        $$`}
      </Latex>
    </div>
    <p style={standoutStyle}>
    <div>
      <Latex>
        {`$$
          x = λ \\\\
        $$`}
      </Latex>
    </div>
    <div>
      <Latex>
        {`$$
          y = -2λ + 4\\\\
        $$`}
      </Latex>
    </div>
    <div>
      <Latex>
        {`$$
          z = -2λ+2
        $$`}
      </Latex>
    </div>
    </p>
  </div>)
}

export default App
