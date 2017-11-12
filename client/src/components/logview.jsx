class LogView extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <h3 className="text-center">TODAY'S ENTRIES</h3>
        <table className="table table-striped table-bordered">
          <thead>
            <tr className="table-success"><th>Date</th><th>Event</th><th>Description</th></tr>
          </thead>
          <tbody>
            {this.props.entries.map(entry =>
              <tr key={entry._id}>
                <td>{entry.timestamp}</td>
                <td>{entry.event}</td>
                <td>{entry.description}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
  
}
