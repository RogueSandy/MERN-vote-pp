import React from "react";
import { connect } from 'react-redux'

const ErrorMessage = ({ error }) => (
    <>
        {/* {error && <div>{error.message}</div>} */}
        {console.log(error)}
    </>
)

export default connect(store => ({ error: store.error }))(ErrorMessage)