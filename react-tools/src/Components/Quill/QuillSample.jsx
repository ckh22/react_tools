import React, {useState} from 'react'
import ReactQuill, {Quill} from "react-quill";
import "react-quill/dist/quill.snow.css";


const CustomHeart = () => <span>♥</span>;


function insertHeart() {
    const cursorPosition = this.quill.getSelection().index;
    this.quill.insertText(cursorPosition, "♥");
    this.quill.setSelection(cursorPosition + 1);
}


const CustomToolbar = () => (
    <div id="toolbar">
        <select className="ql-font">
            <option value="arial" selected>
                Arial
            </option>
            <option value="comic-sans">Comic Sans</option>
            <option value="courier-new">Courier New</option>
            <option value="georgia">Georgia</option>
            <option value="helvetica">Helvetica</option>
            <option value="lucida">Lucida</option>
        </select>
        <select className="ql-size">
            <option value="extra-small">Size 1</option>
            <option value="small">Size 2</option>
            <option value="medium" selected>
                Size 3
            </option>
            <option value="large">Size 4</option>
        </select>
        <select className="ql-align"/>
        <select className="ql-color"/>
        <select className="ql-background"/>
        <button className="ql-clean"/>
        <button className="ql-insertHeart">
            <CustomHeart/>
        </button>
    </div>
);

const Size = Quill.import ("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);


const Font = Quill.import ("formats/font");
Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida"
];
Quill.register(Font, true);


const QuillSample = () => {
    const [editorHtml, setText] = useState('');

    function handleChange(text) {
        setText(text)
        console.log(text)
    }

    const modules = {
        toolbar: {
            container: "#toolbar",
            handlers: {
                insertHeart: insertHeart
            }
        }
    };

    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color"
    ];

    return (
        <div className="text-editor">
          <CustomToolbar />
          <ReactQuill
            value={editorHtml}
            onChange={(text) => handleChange(text)}
            modules={modules}
            formats={formats}
          />
        </div>
      );
}

export default QuillSample
