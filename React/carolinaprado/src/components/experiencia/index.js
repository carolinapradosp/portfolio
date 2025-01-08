import './experiencia.css';

const Experiencia = ({ companyName, position, startDate, endDate, responsibilities }) => {
  return (
    <div>
      <h4>{companyName}</h4>
      <p>{position}</p>
      <span>{startDate} - {endDate}</span>
      <ul>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experiencia;

