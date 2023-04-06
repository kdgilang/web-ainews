import { useEffect, useState } from "react";

export default function useTruncate(val: string, length: number, isEllipsis: boolean = true) {
  const [shouldAddEllipsis, setShouldAddEllipsis] = useState(isEllipsis)
  const [text, setText] = useState(val)

  useEffect(() => {
    let mText = val
    if (val?.length > length && length > 0) {
      mText = val.slice(0, length)

      if (mText.endsWith(' ')) {
        mText = val.slice(0, mText.length - 1)
      }

      if (shouldAddEllipsis) {
        mText = `${mText}...`
      }
    }
    setText(mText)
  }, [val, length, shouldAddEllipsis])

  useEffect(() => {
    if (isEllipsis !== shouldAddEllipsis) {
      setShouldAddEllipsis(isEllipsis)
    }
  }, [isEllipsis, shouldAddEllipsis])

  return text
}
