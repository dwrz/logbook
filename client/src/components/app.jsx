const serverURL = 'https://dry-caverns-21132.herokuapp.com/';
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
    });
  }

  submit (entry) {
    $.post(serverURL + POST, entry, (response) => {
      console.log(response);
      this.get();
    });
  }

  render() {
    return (
      <div>
        <div id='compose'>
          <Compose submit={this.submit.bind(this)}/>
        </div>
        <div id='logview'>
          <LogView entries={this.state.entries}/>
        </div>
      </div>
    );
  }
}
