import React from 'react'
import PropTypes from 'prop-types'

import sharedStyle from './sharedStyle.css'

const DetailContainer = ({ children, ...props }) => {
  return (
    <div className={`container-fluid ${sharedStyle['move-left-detail']} ${sharedStyle['detail-z-index']}`} {...props}>
      {children}
    </div>
  )
}
DetailContainer.propTypes = {
  children: PropTypes.node,
}

export default DetailContainer
