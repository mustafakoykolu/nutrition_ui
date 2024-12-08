import nutritionist from "../../assets/Images/nutritionist.png";

import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import "draft-js/dist/Draft.css";
import CancelDialog from "../../Dialogs/SocialMedia/CancelDialog";
import ApprovalDialog from "../../Dialogs/SocialMedia/ApprovalDialog";

function uploadImageCallBack(file: any) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID 8d26ccd12712fca");
    const data = new FormData(); // eslint-disable-line no-undef
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

export default function CreateAPost() {
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showApprovalDialog, setShowApprovalDialog] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const onHandleKeyBindings = (e: any) => {
    if (e.keyCode === 9) {
      setEditorState(RichUtils.onTab(e, editorState, 4));
    } else {
      return getDefaultKeyBinding(e);
    }
  };

  return (
    <div id="create-page-container">
      <CancelDialog open={showCancelDialog} setOpen={setShowCancelDialog} />
      <ApprovalDialog open={showApprovalDialog} setOpen={setShowApprovalDialog} />
      <div className="p-20 bg-white m-10 shadow-xl rounded-2xl">
        <div id="header" className="flex justify-between">
          <div className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
            <input
              type="text"
              id="header"
              className="text-gray-900 text-4xl font-bold font-manrope leading-normaldark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Başlık Giriniz"
              required
            />
          </div>
          <div className="flex items-center">
            <img
              className="w-20 h-20 rounded-full mr-4"
              src={nutritionist}
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-xl">
              <p className="text-gray-900 leading-none">Mustafa Emre Köykolu</p>
              <p className="text-gray-600">Ankara Lokantası Şefi</p>
              <p className="text-gray-600">7 Aralık 2024</p>
            </div>
          </div>
        </div>
        <div id="body" className="mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          adipisci sint nemo maxime magni, iste quia, minus modi provident
          accusamus illum nulla aliquam, laudantium facilis. Id aperiam
          molestias minus in. Recusandae provident voluptate eligendi
          consequuntur rerum eum quis beatae blanditiis eos, molestiae ab sunt
          placeat veritatis harum laboriosam quae id. Omnis, veritatis eligendi
          aut quo nostrum sunt ratione. Placeat, esse?
        </div>
      </div>
      <div id="add">
        <div className="p-20 bg-white m-10 shadow-xl rounded-2xl">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarclassName="
            wrapperClassName="wrapperclassName="
            editorClassName="editorclassName="
            onEditorStateChange={setEditorState}
            onTab={onHandleKeyBindings}
            toolbar={{
              image: {
                urlEnabled: true,
                uploadEnabled: true,
                uploadCallback: uploadImageCallBack,
                previewImage: true,
                alt: { present: true, mandatory: true },
              },
            }}
          />
          <div id="buttons" className="flex mt-20">
            <button
              className="ml-auto rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              onClick={() => {
                setShowCancelDialog(true);
              }}
            >
              İptal
            </button>
            <button className="ml-5 rounded-md bg-blue-500 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onClick={() => {
                setShowApprovalDialog(true);
              }}>
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
