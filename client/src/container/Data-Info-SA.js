import _ from 'lodash';
import React from 'react'
import { connect } from 'react-redux';
import { fetchDataSA } from '../actions';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';

class DataInfoSa extends React.Component {
  componentDidMount() {
    this.props.fetchDataSA();
  }

  showData() {
    const { myData } = this.props;
    return _.map(myData, (item) => {
      return <p key={item.id}>{item.about}</p>
    });
  };

  render() {
    return (
      <div>
        <InfoBox>
          <div>
            <div className="dataElements text-light bg-dark">
              {this.showData()}
            </div>
          </div>
        </InfoBox>
      </div>
    );
  };
};

function mapStateToProps({ myData }) {
  return { myData }
}

export default connect(mapStateToProps, { fetchDataSA })(DataInfoSa);