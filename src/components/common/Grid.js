import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';
import { Modal } from 'antd';

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
  constructor(props) {
    super(props);
    this.state = {
      visible0: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
    }
    this.showModal = this.showModal.bind(this);
    this.closeModal0 = this.closeModal0.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
    this.closeModal3 = this.closeModal3.bind(this);
    this.closeModal4 = this.closeModal4.bind(this);
    this.closeModal4 = this.closeModal4.bind(this);
    this.closeModal5 = this.closeModal5.bind(this);
  }

  showModal(idx){
    console.log(idx)
    if (idx === 0){
      this.setState({
        visible0: true,
      })}
    if (idx === 1){
      this.setState({
        visible1: true,
      })}
    if (idx === 2){
      this.setState({
        visible2: true,
      })}
    if (idx === 3){
      this.setState({
        visible3: true,
      })}
    if (idx === 4){
      this.setState({
        visible4: true,
      })}
    if (idx === 5){
      this.setState({
        visible5: true,
      })}
  }

  closeModal0() {
    this.setState({
      visible0: false,
    })
  }

  closeModal1() {
    this.setState({
      visible1: false,
    })
  }

  closeModal2() {
    this.setState({
      visible2: false,
    })
  }

  closeModal3() {
    this.setState({
      visible3: false,
    })
  }

  closeModal4() {
    this.setState({
      visible4: false,
    })
  }

  closeModal5() {
    this.setState({
      visible5: false,
    })
  }

  // render
  render() {

    return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {tilesData.map((tile, idx) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              onClick={this.showModal.bind(this, idx)}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
        <Modal title="Eventmakr" visible={this.state.visible0} footer={null} onCancel={this.closeModal0}>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <Modal title="Bookmarc" visible={this.state.visible1} footer={null} onCancel={this.closeModal1}>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <Modal title="The Other" visible={this.state.visible2} footer={null} onCancel={this.closeModal2}>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <Modal title="Tripific" visible={this.state.visible3} footer={null} onCancel={this.closeModal3}>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <Modal title="Hilton Worldwide EMEA" visible={this.state.visible4} footer={null} onCancel={this.closeModal4}>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <Modal title="Slot Machine" visible={this.state.visible5} footer={null} onCancel={this.closeModal5}>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );

  }
}

export default Grid;
