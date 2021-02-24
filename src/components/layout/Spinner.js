import React, {Fragment} from 'react';
import spinner from './adv-spinner.gif';

const Spinner = () => {
    return (
        <Fragment>
          <img src={spinner} alt="Loading Spinner" style={{width: '800px', margin:'auto', display:'block'}}/>
        </Fragment>
    )
}

export default Spinner;