import React, {Component} from 'react';
import Item from './Body/Item';

export default class Body extends Component {
    render() {
        return (
            <tbody>
                {this.props.items.map((item, index) =>
                    <Item
                        developer={item.developer}
                        genre={item.genre}
                        index={index}
                        key={index}
                        release={item.release}
                        score={item.score}
                        serviceId={item.service}
                        title={item.title}
                        tobeat={item.tobeat}
                    />
                )}
            </tbody>
        )
    }
}
