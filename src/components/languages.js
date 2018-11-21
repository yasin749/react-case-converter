import React, {Component, Fragment} from 'react';
import languages from "../config/laguages";

class Languages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language
        };

        this.languageChange = this.languageChange.bind(this);
    }

    languageChange(event) {
        const value = event.target.value;
        this.setState({
            languageChange: value
        });
        this.props.onLanguageChange(value);
    }

    render() {
        let html = {
            languages: () => {
                return Object.values(languages.langs).map((lang, key) => (
                    <option key={key + lang.langCode} value={lang.langCode}>
                        {lang.label}
                    </option>
                ));
            }
        };
        return (
            <Fragment>
                <select onChange={this.languageChange} value={this.props.language}>
                    {html.languages()}
                </select>
            </Fragment>
        );
    }
}

export default Languages;