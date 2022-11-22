import './facilitiesSection.scss';

const facilitiesData = [
  {
    id: 1,
    title: 'Engaging with the event',
    description: 'There is little access to the experience',
  },
  {
    id: 2,
    title: 'Local broadcast',
    description: 'There is no diversity of  voice',
  },
  {
    id: 3,
    title: 'Intrusive Selling',
    description: 'Repetitive Beer Commercials',
  },
  {
    id: 4,
    title: 'Bad fan experience',
    description: 'No personalization No interactivity',
  },
  {
    id: 5,
    title: 'Revenue is flying away',
    description: 'Fans are tired of being second class',
  },
];

const FacilitiesSection = () => (
  <div className="facilities-section">
    <div className="facilities-section-container">
      <img src="/assets/facilities.svg" alt="Facilities Img" loading="lazy" />
      <ul className="facilities-section-list">
        {facilitiesData.map(({ id, title, description }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default FacilitiesSection;
