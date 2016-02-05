import React, {Component} from 'react';
import Body from './Table/Body';

export default class Table extends Component {
    render() {
        return (
            <table id="games">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genres</th>
                        <th>Developer</th>
                        <th>Release</th>
                        <th title="GameRankings score">&#10025;</th>
                        <th title="Average time to beat">&#8986;</th>
                    </tr>
                </thead>
                <Body items={this.props.items} />
            </table>
        )
    }
}
