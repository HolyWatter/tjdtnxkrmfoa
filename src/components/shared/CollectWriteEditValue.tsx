import { useEffect, useState } from "react";
import InputPostValues from "../write/InputPostValues";
import { Post, PostCreate } from "models/post";
import SettingThumbnail from "components/write/SettingThumbnail";

interface Props {
  editValues?: Post;
  onSubmit: (postValus: PostCreate) => void;
}

const CollectWriteEditValue = ({ editValues, onSubmit }: Props) => {
  const [step, setStep] = useState(0);
  const [postValues, setPostValues] = useState<Partial<PostCreate>>({});

  useEffect(() => {
    if (step !== 2) return;
    onSubmit(postValues as PostCreate);
  }, [step, onSubmit, postValues]);

  const submitPostInfo = (inputValues: Partial<PostCreate>) => {
    setPostValues((prevValues) => ({ ...prevValues, ...inputValues }));

    setStep((prev) => prev + 1);
  };

  return (
    <>
      {step === 0 ? (
        <InputPostValues
          onSubmit={submitPostInfo}
          editValue={
            editValues && {
              content: editValues.content,
              title: editValues.title,
            }
          }
        />
      ) : null}
      {step === 1 ? (
        <SettingThumbnail
          thumbnailUrl={editValues?.thumbnailUrl}
          isPinned={editValues?.isPinned}
          content={postValues.content as string}
          onSubmit={submitPostInfo}
        />
      ) : null}
    </>
  );
};

export default CollectWriteEditValue;
