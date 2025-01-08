import './works.css';
import React from 'react';

function Works({image, title, text, link}){
  const processText = (text) => {
    return text.split('<br />').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('<br />').length - 1 && <br />}
      </React.Fragment>
    ));
  };
    return(
        <div className="cliente">
        <div>
          <img src={image} alt={title} width={360} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{processText(text)}</p>
          <p>
            <b>Acesse:</b>{" "}
            <a href={link} target="_blank" rel="noreferrer">
            {link}
            </a>
          </p>
        </div>
      </div>
    )
}

export default Works;