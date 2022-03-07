import React from "react";

export class Rooms extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const RoomList = []
        for (let i = 0; i < this.props.apartment.rooms.length; i++) {
            RoomList.push(<li>{this.props.apartment.rooms[i].type}</li>)
        }
        return (
            <table>
                <tr>
                    <th>
                        Rooms List
                    </th>
                    <td>
                        <ol>
                            {RoomList}
                        </ol>
                    </td>
                </tr>
            </table>
        )
    }
}