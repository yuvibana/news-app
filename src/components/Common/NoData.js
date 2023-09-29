import React from 'react'

export default function NoData({ NoItemFound }) {
    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '35px',
            textTransform: 'uppercase',
            fontWeight: '700'
        }}
        >{NoItemFound}</div>
    )
}
NoData.defaultProps = {
    NoItemFound: "No Data Found"
}
