import React, {Component, Fragment} from 'react';

import convertTypes from '../config/convertTypes';

class ConvertTypes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            convertType: this.props.convertType
        };

        this.convertTypeChange = this.convertTypeChange.bind(this);
    }

    convertTypeChange(event) {
        const value = event.target.value;
        this.setState({
            convertType: value
        });
        this.props.onConvertTypeChange(value);
    }

    render() {
        let html = {
            types: () => {
                return Object.values(convertTypes.types).map((type, key) => (
                    <label
                        key={key + type.value}
                        className={"button medium " + (this.state.convertType === type.value ? 'service-button' : 'service-button-border')}
                    >
                        <input
                            type="radio" name="format" value={type.value}
                            checked={this.state.convertType === type.value}
                            onChange={this.convertTypeChange}
                            hidden
                        /> {type.label}
                    </label>
                ));
            }
        };
        return (
            <Fragment>
                <div className="convert-buttons">
                    {html.types()}
                </div>
            </Fragment>
        );
    }
}

export default ConvertTypes;