import { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import axiosInstance from "apis/axios-instance";

interface Props {
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const ToastEditor = ({ setContent }: Props) => {
  const editorRef = useRef<Editor>(null);

  const onChange = () => {
    const data = editorRef.current?.getInstance().getHTML();
    setContent(data as string);
  };

  return (
    <Editor
      theme=""
      ref={editorRef}
      onChange={onChange}
      previewStyle="vertical"
      height="600px"
      hideModeSwitch
      hooks={{
        addImageBlobHook: async (blob, callback) => {
          const formData = new FormData();
          formData.append("image", blob);
          const res = await axiosInstance.post("/media/image", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          callback(res.data.link);
        },
      }}
    />
  );
};

export default ToastEditor;
