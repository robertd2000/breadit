import { useEditorForm } from "./useEditorForm";
import { useInitEditor } from "./useInitEditor";

export const useEditor = (subredditId: string) => {
  const { ref, _titleRef } = useInitEditor();

  const { titleRef, handleSubmit, onSubmit, rest } = useEditorForm(
    subredditId,
    ref
  );

  return {
    titleRef,
    handleSubmit,
    onSubmit,
    rest,
    _titleRef,
  };
};
