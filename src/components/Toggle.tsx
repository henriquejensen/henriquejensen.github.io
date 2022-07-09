import { useState } from 'react';
import Toggle from 'react-toggle'
import './Toggle.css'

export default function MyToggle() {
  const [isDark, setDark] = useState(true);

  if (isDark) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }


  return (
    <label className='container-toggle' htmlFor='container-toggle'>
      Mode {isDark ? 'Dark' : 'Light'}
      <Toggle
        checked={isDark}
        id="container-toggle"
        onChange={() => setDark(p => !p)}
      />
    </label>

  )
}
