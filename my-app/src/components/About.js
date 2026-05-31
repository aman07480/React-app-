import React from 'react';

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white'
    }

    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3">About Us</h1>

            <div className="accordion" id="accordionExample">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            style={myStyle}
                        >
                            Analyze Your Text
                        </button>
                    </h2>

                    <div className="accordion-body" style={myStyle}>
                        TextUtils gives you a way to analyze your text quickly and efficiently.
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            style={myStyle}
                        >
                            Free to Use
                        </button>
                    </h2>

                    <div className="accordion-body" style={myStyle}>
                        TextUtils is a free character counter and word counter tool.
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            style={myStyle}
                        >
                            Browser Compatible
                        </button>
                    </h2>

                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browser.
                    </div>
                </div>

            </div>
        </div>
    )
}