import React, { Component } from 'react'

export default class SceneDetails extends Component {
    render() {
        const {kindId,name} = this.props.match.params
        return (
            <div>
                {name} {kindId}
            </div>
        )
    }
}
