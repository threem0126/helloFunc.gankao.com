import React from 'react'

export default class extends React.Component {
    static async getInitialProps({req, res, pathname, query, asPath, err}) {
        return {}
    }

    constructor(props) {
        super(props);
    }

    render = () => {
        return <div style={{padding: '30px'}}>Test</div>
    }
}
