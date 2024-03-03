import { useEffect, useRef } from "react";
import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";

import { UploadBeforeHandler } from "suneditor-react/dist/types/upload";
import "suneditor/dist/css/suneditor.min.css";
import uploadImgFunction from "utils/function/uploadImg";
import { PostCreate } from "models/post";

interface Props {
  setContent: React.Dispatch<React.SetStateAction<string>>;
  editValue?: Omit<PostCreate, "categoryId" | "isPinned" | "thumbnailUrl">;
}

const Editor = ({ setContent, editValue }: Props) => {
  const editor = useRef<SunEditorCore>();
  useEffect(() => {
    if (!editor.current) return;
    if (editValue) {
      editor.current?.setContents(editValue.content);
    }
  }, [editValue, editor]);

  const getSunEditorInstance = (SunEditor: SunEditorCore) => {
    editor.current = SunEditor;
  };

  const handleImageUploadBefore = (
    files: Array<File>,
    _info: object,
    uploadHandler: UploadBeforeHandler
  ) => {
    (async () => {
      const src = await uploadImgFunction(files[0]); // 서버 요청 후 받아온 url
      const response = {
        result: [
          {
            url: src,
            name: files[0].name,
            size: files[0].size,
          },
        ],
      };
      uploadHandler(response);
    })();
    uploadHandler();
  };

  return (
    <>
      <SunEditor
        onChange={(e) => setContent(e)}
        lang="ko"
        setAllPlugins={true}
        onImageUploadBefore={handleImageUploadBefore as any}
        getSunEditorInstance={getSunEditorInstance}
        setOptions={{
          height: "500",
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            ["paragraphStyle"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["fontColor", "hiliteColor"],
            ["removeFormat"],
            "/", // Line break
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "lineHeight"],
            ["table", "link", "image"],
          ],
        }}
      />
    </>
  );
};

export default Editor;
