import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '3%',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
};

const tilesData = [
  {
    img: '../../media/screenshot_emkr.png',
    title: 'Development & Design',
  }, {
    img: '../../media/screenshot_bookmarc.png',
    title: 'Content',
  }, {
    img: '../../media/screenshot_other.jpg',
    title: 'Development & Design',
  }, {
    img: '../../media/screenshot_tripific.jpg',
    title: 'Development & Design',
  }, {
    img: '../../media/screenshot_calendonian.png',
    title: 'Content & Search Marketing',
  }, {
    img: '../../media/screenshot_slot.jpg',
    title: 'Development & Design',
  }
]

export class Grid extends React.Component {

  // render
  render() {

    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );

  }
}

export default Grid;
