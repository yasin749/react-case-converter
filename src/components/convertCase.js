import React, {Component, Fragment} from 'react';
import InputText from './inputText';
import OutputText from './OutputText';
import ConvertTypes from './convertTypes';

import config from '../config/config';

class ConvertCase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: config.preferences.defaultLanguage,
            convertType: config.preferences.defaultConvertType,
            text: config.preferences.defaultConvertedText,
        }
    }

    inputTextChange(value) {
        this.setState({
            text: value
        });
    }

    onConvertTypeChange(value) {
        this.setState({
            convertType: value
        });
    }

    onLanguageChange(value) {
        this.setState({
            language: value
        });
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-6">
                        <InputText
                            text={this.state.text}
                            language={this.state.language}
                            onTextChange={(value) => this.inputTextChange(value)}
                            onLanguageChange={(value) => this.onLanguageChange(value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <OutputText
                            text={this.state.text}
                            language={this.state.language}
                            convertType={this.state.convertType}
                        />
                    </div>
                    <div className="col">
                        <ConvertTypes
                            convertType={this.state.convertType}
                            onConvertTypeChange={(value) => this.onConvertTypeChange(value)}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ConvertCase;