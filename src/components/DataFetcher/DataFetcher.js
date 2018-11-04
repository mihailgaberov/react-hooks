import React from 'react';
import MockedApi from '../../api/mocks'

export default class DataFetcher extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  };

  componentDidMount() {
    const data = MockedApi.fetchData();
    data.then((res) => {
      this.setState({
        data: res,
      });
    });
  }

  componentDidUpdate() {

  }

  render() {
    const { data } = this.state;
    return (<div>
        {data && <ul>
          {data.map((element, idx) => (<li key={idx}>{element.name + ' ' + element.surname}</li>))}
        </ul>}
      </div>
    );
  };
}