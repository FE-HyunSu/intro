import React from 'react';
import { connect } from 'react-redux';

// const SongList = () => {
//   return <div>SongList</div>;
// };

const SongList = (props) => {
  const renderList = () => {
    return props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };
  return <div className="ui divided list">{renderList()}</div>;
};

const mapStateToProps = (state) => {
  // getState와 같은 이름으로 지어도 되지만,
  // 관행상 mapStateToProps를 사용한다
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(SongList);
