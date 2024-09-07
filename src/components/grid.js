import './stylesheet.css';

import Tile from './tile';

export default ({ content }) => (
    <div className="grid">
        {content.map((item) => (
            <Tile>{item}</Tile>
        ))}
    </div>
);
