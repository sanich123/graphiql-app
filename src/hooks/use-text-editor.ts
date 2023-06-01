import { useCallback, useState } from 'react';

export default function useTextEditor() {
  const [editorMinSize, setEditorMinSize] = useState([91, 9]);
  const openEditor = useCallback(() => {
    const size = editorMinSize[0] === 9 ? [91, 9] : [9, 91];
    setEditorMinSize(size);
  }, [editorMinSize]);
  return { editorMinSize, setEditorMinSize, openEditor };
}
