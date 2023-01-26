import React from 'react';
import './GameLoader.css';
import sample_game from './assets/sample_game.json';
import final_game from './assets/shortGame.json';

function validateGame(data) {
  const game = data.game;
  if (game === undefined) {
    console.log('Game key not found in JSON payload.');
    return false;
  }
  // TODO: additional validation
  return true;
}

class GameLoader extends React.Component {
  render() {
    return (
      <div className="game-loader">
        <h1>Jeopardy Player</h1>
        <h2>Play a Game</h2>
        <button onClick={this.gameLoadedHandler}>Play Game</button>
      </div>
    );
  }

  gameLoadedHandler = (event) => {
    if (validateGame(final_game)) {
      this.props.updateGame(final_game);
      this.props.addPlayer();
    } else {
      console.log('Invalid game.');
    }
  };

  downloadSampleGame = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(sample_game, null, 4)], {
      type: 'text/plain',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'sample_game.json';
    document.body.appendChild(element);
    element.click();
  };
}

export default GameLoader;
