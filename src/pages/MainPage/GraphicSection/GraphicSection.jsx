import './graphicSection.scss';
import GraphInfo from '../../../components/GraphInfo/GraphInfo.jsx';
import TwoGraphs from '../../../components/Graphs/TwoGraphs.jsx';

const graphsData = [
  {
    id: 1,
    percentages: [6, 9],
    heights: [60.9, 76.35],
  },
  {
    id: 2,
    percentages: [12, 13],
    heights: [81.71, 96.53],
  },
  {
    id: 3,
    percentages: [25, 31],
    heights: [168.66, 203.31],
  },
  {
    id: 4,
    percentages: [40, 42],
    heights: [245.05, 267.82],
  },
  {
    id: 5,
    percentages: [33, 52],
    heights: [216.04, 327.65],
  },
];

const GraphicSection = () => (
  <div className="graphic-section">
    <div className="background">
      <div className="graphic-section-container">
        <h2>
          The lack of audio innovation prevents sports from reacting more audience
        </h2>

        <div className="frame">
          <div className="frame-graphs">
            <div className="frame-graph-info">
              <GraphInfo title="All respondents" colorNumber={1} />
              <GraphInfo title="Ages 16-25" colorNumber={2} />
            </div>
            <div className="frame-graph-box">
              {graphsData.map(({ id, percentages, heights }) => (
                <div key={id} className="column">
                  <TwoGraphs percentages={percentages} heights={heights} />
                  <div className="img-box">
                    <img src={`/src/assets/teamLogos/team_${id}.png`} alt="team_logo" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="frame-description">
            <h3>2022 Super Bowl</h3>
            <div className="description-container">
              <div className="description-text-box">
                <span>70,048</span>
                <p>In Attendance</p>
              </div>
              <div className="description-text-box">
                <span>111,200,000</span>
                <p>Online</p>
              </div>
              <div className="description-text-box">
                <span>*220,000,000</span>
                <p>Not participating</p>
              </div>
              <span>*United States Only</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GraphicSection;
