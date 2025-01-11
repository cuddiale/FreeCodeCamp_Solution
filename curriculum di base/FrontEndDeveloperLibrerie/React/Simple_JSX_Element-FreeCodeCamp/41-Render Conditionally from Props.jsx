// We want this to be deterministic for testing purposes.
const randomSequence = [
  true,
  false,
  false,
  true,
  true,
  false,
  false,
  true,
  true,
  false,
];
let index = 0;
const fiftyFifty = () => randomSequence[index++ % randomSequence.length];

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={fiftyFifty()} />
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}
