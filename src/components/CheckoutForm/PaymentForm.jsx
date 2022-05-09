import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';

import { Link } from 'react-router-dom';

import Review from "./Review";

const PaymentForm = ({checkoutToken,backStep,refreshCart}) => {
    return (
        <>
            <Review checkoutToken={checkoutToken}/>
            <Divider/>
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment</Typography>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button component={Link} to="/" type="submit" onClick={refreshCart} variant="contained"  color="primary">
                Pay {checkoutToken.live.subtotal.formatted_with_symbol}
              </Button>
            </div>
        </>
    );
};

export default PaymentForm;