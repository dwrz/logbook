class LogView extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <h3 className="text-center">ENTRIES</h3>
        <table className="table table-striped table-bordered">
          <thead>
            <tr className="table-success"><th>Date</th><th>Event</th><th>Description</th></tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    );
  }
  
}
