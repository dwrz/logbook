class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('APP MOUNTED');
  }

  render() {
    return (
      <div>
        <div id='compose'>
          <Compose />
        </div>
        <div id='logview'>
          <LogView />
        </div>
      </div>
    );
  }
  
}
