import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { MdContentCopy, MdOutlineDeleteSweep } from "react-icons/md";
import { RxLetterCaseUppercase, RxLetterCaseLowercase } from "react-icons/rx";
import { AiOutlineFullscreenExit, AiOutlineFullscreen } from "react-icons/ai";

const Form = (props) => {

    const [Alert, setAlert] = useState(null);

    let funcBtnStyle = {
        cursor: 'pointer',
    }

    function handletoUppercase() {
        let enteredText = text.toUpperCase();
        setText(enteredText);
        showAlert('Text converted to Uppercase successfully');
    }
    function handletoLowercase() {
        let enteredText = text.toLowerCase();
        setText(enteredText);
        showAlert('Text converted to Lowercase successfully');
    }
    function handleClear() {
        let enteredText = "";
        setText(enteredText);
        showAlert('Text Cleared successfully');
    }

    function handletoCopy() {
        let enetredText = document.querySelector('#text');
        enetredText.select();
        showAlert('Text Copied successfully');
    }

    function handleOnChange(event) {
        setText(event.target.value);
    }

    function showAlert(msg) {
        setAlert(msg);
    }

    setTimeout(() => {
        setAlert();
    }, 3000);

    let alertStyle = {
        backgroundColor: '#031633',
        color: '#fff',
        position: 'absolute',
        right: '20px',

    }
    const [text, setText] = useState("");
    return (
        <>
            {/* alert start */}
            {Alert &&
                <span className="alert rounded-pill pt-1 pb-2 z-3" role="alert" style={alertStyle}>
                    <strong><FaCheckCircle /> {Alert}</strong>
                </span>
            }
            {/* alert End */}
            <div className="mb-3 p-5" style={props.view}>
                <div className=" d-flex justify-content-between" >
                    <label className='mb-3 h4 ' htmlFor='text' >
                        <MdOutlineDeleteSweep onClick={handleClear} className="me-3 " style={funcBtnStyle} />
                        <RxLetterCaseUppercase onClick={handletoUppercase} className="me-3 " style={funcBtnStyle} />
                        <RxLetterCaseLowercase onClick={handletoLowercase} className="me-3 " style={funcBtnStyle} />
                        <AiOutlineFullscreen onClick={props.fullScreen} className="me-3 " style={funcBtnStyle} />
                        <AiOutlineFullscreenExit onClick={props.smallScreen} className="me-3 " style={funcBtnStyle} />
                        <MdContentCopy onClick={handletoCopy} className="me-3 " style={funcBtnStyle} />

                    </label>


                    <div className="detail">
                        <span className='mx-5'><strong>Characters:</strong> {text.length}</span>
                        <span><strong>Words:</strong> {
                            text.trim() ? text.trim().split(/\s+/).length : 0
                        }
                        </span>
                    </div>
                </div>

                <textarea className="form-control" value={text} style={props.mode} onChange={handleOnChange} rows="6" id='text' name='text'
                    placeholder='Start Writing Here !'></textarea>

                <div className="preview mt-5">
                    <h2>Preview</h2>
                    <p className='border p-3 rounded'>{text.length === 0 ? 'Nothing To Show Here !' : text}</p>
                </div>
            </div>

        </>
    );
}

export default Form;