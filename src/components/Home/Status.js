import React from 'react';
import { Segment } from 'semantic-ui-react';

const Status = ({ serviceStatus, errorMessage }) => (
  <Segment inverted color={serviceStatus && !errorMessage ? 'green' : 'red'}>
    {serviceStatus && !errorMessage ? (
      <strong>
        Status: My father is still active and ready for your requests.
      </strong>
    ) : (
      <strong>Status: {errorMessage}</strong>
    )}
  </Segment>
);

export default Status;
