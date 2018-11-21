import React, {Component, Fragment} from 'react';
import {sentence, title, uppercase, lovercase} from '../helpers/convertText';

class OutputText extends Component {

    constructor(props) {
        super(props);
        this.state={
            text:''
        };

        this.sentence = sentence;
        this.title = title;
        this.uppercase = uppercase;
        this.lovercase = lovercase;

        this.textElement = React.createRef();
    }

    componentWillMount() {
        this.convert();
    }

    componentWillReceiveProps(nextProps){
        this.convert(nextProps.convertType, nextProps.text, nextProps.language);
    }

    convert(convertType = this.props.convertType, text = this.props.text, language = this.props.language){
        this.setState({
            text : this[convertType](text, language)
        });
    }

    textCopy(){
        const textElement = this.textElement.current;
        textElement.select();
        document.execCommand("copy");
    }

    render() {
        return (
            <Fragment>
                <div className="form-group convert-input form-output">
                    <label>
                        Output :
                        <ul className="right adapt-list">
                            <li>
                                <a
                                    href={('data:text/plain;charset=utf-8,')+ encodeURIComponent(this.state.text)}
                                    download={('text-')+ this.props.convertType +('.txt')}
                                    className="adapt-link"
                                ><i className="fas fa-download"></i> Download</a>
                            </li>
                            <li>
                                <a
                                    href="javascript:;"
                                    className="adapt-link"
                                    onClick={()=>this.textCopy()}
                                ><i className="fas fa-copy"></i> Copy</a>
                            </li>
                        </ul>
                    </label>
                    <textarea
                        className="form-control"
                        value={this.state.text}
                        ref={this.textElement}
                        readOnly
                    />
                </div>
            </Fragment>
        );
    }
}

export default OutputText;