import React, {Component} from 'react';

export default class Body extends Component {
    render() {
        return (
            <tr
                title={this.props.serviceId}
                data-service={this.props.serviceId}
                data-id={this.props.index}
            >
                <td className="title">
                    <span className="service-icon"></span>
                    <span className="title-text">{this.props.title}</span>
                    <span className="description"></span>
                    <span className="completed checkable">&#10004;</span>
                </td>
                <td className="genre"><span>{this.props.genre}</span></td>
                <td className="developer"><span>{this.props.developer}</span></td>
                <td className="release"><span>{this.props.release}</span></td>
                <td className="score"><span>{this.props.score}</span></td>
                <td className="tobeat"><span>{this.props.tobeat}</span></td>
            </tr>
        )
    }
}
