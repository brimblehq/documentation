import { useState } from 'react';

export function useCopyButton(onCopy: () => void): [boolean, () => void] {
  const [checked, setChecked] = useState(false);

  const onClick = () => {
    onCopy();
    setChecked(true);
    setTimeout(() => setChecked(false), 2000); // Reset after 2 seconds
  };

  return [checked, onClick];
}