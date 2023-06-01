import { useState } from 'react';

export default function useOpenCloseSchema() {
  const [isOpenDoc, setIsOpenDoc] = useState(false);
  const [isOpenSchema, setIsOpenSchema] = useState(false);
  return { isOpenDoc, isOpenSchema, setIsOpenDoc, setIsOpenSchema };
}
