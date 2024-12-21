import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { RichUtils, getDefaultKeyBinding } from "draft-js";
import "draft-js/dist/Draft.css";
import clsx from "clsx";

type Props = {
  currentMenu: string;
  editorState:any;
  setEditorState: any;
};
export default function AddRecipeBenefits(props: Props) {

   const onHandleKeyBindings = (e: any) => {
     if (e.keyCode === 9) {
       props.setEditorState(RichUtils.onTab(e, props.editorState, 4));
     } else {
       return getDefaultKeyBinding(e);
     }
   };
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
   return (
     <div
       id="food-benefits pb-3"
       className={clsx({ hidden: props.currentMenu !== "benefits" })}
     >
       <Editor
         editorState={props.editorState}
         toolbarClassName="toolbarclassName="
         wrapperClassName="wrapperclassName="
         editorClassName="editorclassName="
         onEditorStateChange={props.setEditorState}
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
     </div>
   );
}
