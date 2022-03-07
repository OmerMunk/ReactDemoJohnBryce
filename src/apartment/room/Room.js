import React from "react";

export class Room extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>
                            Type
                        </th>
                        <td>
                            {this.props.room.type}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Square Meters
                        </th>
                        <td>
                            {this.props.room.square_meters}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Windows number
                        </th>
                        <td>
                            {this.props.room.windows}
                        </td>
                    </tr>
                </table>

            </div>
        )
    }
}