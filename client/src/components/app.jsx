const serverURL = 'http://127.0.0.1:3000';
const GET = '/api/log/entries/current/day';
const POST = '/api/log/entry';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    this.get();
  }

  get() {
    $.get(serverURL + GET, (response) => {
      this.setState({entries: response});
      console.log(this.state.entries);
    });
  }

  submit (entry) {

  }

  render() {
    return (
      <div>
        <div id='compose'>
          <Compose />
        </div>
        <div id='logview'>
          <LogView entries={this.state.entries}/>
        </div>
      </div>
    );
  }
}
