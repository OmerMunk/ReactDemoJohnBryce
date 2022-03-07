import React from "react";

export class Genres extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button>
                    action
                </button>
                <button>
                    drama
                </button>
                <button>
                    crime
                </button>
                <button>
                    comedy
                </button>
                <button>
                    sci-fi
                </button>
            </div>
        )
    }
}