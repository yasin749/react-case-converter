import React, {Component, Fragment} from 'react';
import Languages from "./languages";

class InputText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text : this.props.text,
            language : this.props.language
        };
    }

    textChange(event){
        const value = event.target.value;
        this.setState({
            text : value
        });
        this.props.onTextChange(value);
    }

    textClear(){
        const value = '';
        this.setState({
            text : value
        });
        this.props.onTextChange(value);
    }

    onLanguageChange(value) {
        this.setState({
            language: value
        });
        this.props.onLanguageChange(value);
    }

    render() {
        return (
            <Fragment>
                <div className="form-group convert-input form-input">
                    <label>
                        Content :
                        <ul className="right adapt-list">
                            <li>
                                <a
                                    href="javascript:;"
                                    className="adapt-link"
                                    onClick={()=>this.textClear()}
                                ><i className="fas fa-eraser"></i> Clean</a>
                            </li>
                            <li>
                                Language:
                                <Languages
                                    language={this.state.language}
                                    onLanguageChange={(value) => this.onLanguageChange(value)}
                                />
                            </li>
                        </ul>
                    </label>
                    <textarea
                        placeholder="Type text or paste the content"
                        className="form-control"
                        value={this.state.text}
                        onChange={(event)=> this.textChange(event)}
                    />
                </div>
            </Fragment>
        );
    }
}

export default InputText;