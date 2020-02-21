import React from 'react';
import Spinner from '../layout/Spinner';

const withData = (Wrapped, getData) => {
  return class extends React.Component {
    state = {
      data: null,
      loading: false,
      err: null
    };

    async componentDidMount() {
      this.setState({ loading: true });

      await getData()
        .then(data => {
          this.setState({ data, loading: false });
        })
        .catch(this.handleError);
    }

    handleError = err => {
      this.setState({ err });
      console.log(err);
    };

    render() {
      const { data, loading, err } = this.state;
      const hasData = !(loading || err);

      if (loading) {
        return <Spinner />;
      }
      if (hasData) {
        return <Wrapped {...this.props} data={data} loading={loading} />;
      }
    }
  };
};
export default withData;
