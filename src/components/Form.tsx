'use client';

import * as React from 'react';
import s9 from "style9";
import { useRouter } from 'next/navigation';

const c = s9.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5em',
    marginBottom: '2.5em',

    '@media (min-width: 64em)': {
      flexDirection: 'row',
      justifyContent: 'center',
    }
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontWeight: 700,
    gap: '0.5em',

    '@media (min-width: 64em)': {
      display: 'inline-flex',
      flexDirection: 'row',
      gap: '1em',
    }
  },
  input: {
    flexShrink: 1,
    fontSize: '1.5em',
    lineHeight: 1.5,
    textAlign: 'right',
  },
  isError: {
    borderColor: 'crimson',
    borderStyle: 'solid',
    backgroundColor: '#fff0f0',
  },
  btn: {
    // fontSize: '1.5em',
    fontSize: '1.5em',
    fontWeight: 700,
    backgroundColor: '#334ef1',
    color: '#fff',
    padding: '0 1.5em',
    border: 'none',
    borderRadius: '4px',
    lineHeight: 1.5,
  },
});

export default function Form() {
  const router = useRouter();
  const lastDocRef = React.useRef<HTMLInputElement>(null);
  const pretrialRef = React.useRef<HTMLInputElement>(null);
  const [ isDocError, setIsDocError, ] = React.useState<boolean>(false);
  const [ isPretrialError, setIsPretrialError, ] = React.useState<boolean>(false);

  function onSubmit(evt: React.FormEvent) {
    evt.preventDefault();

    let isError = false;
    const lastDocValue = lastDocRef.current?.value;
    const pretrialValue = pretrialRef.current?.value;

    if (!(lastDocValue && lastDocRef.current?.valueAsDate)) {
      setIsDocError(true);
      isError = true;
    }
    if (!pretrialValue && pretrialRef.current?.valueAsDate) {
      setIsPretrialError(true);
      isError = true;
    }

    if (isError) return;

    router.push(`/${lastDocValue}/${pretrialValue}`)
  }

  return (
    <form className={s9(c.form)} onSubmit={onSubmit}>
      <div className={s9(c.inputs)}>
        <label htmlFor="lastDoc">
          כתב תשובה:{' '}
          <input
            className={s9(c.input, isDocError && c.isError)}
            dir="ltr"
            id="lastDoc"
            name="lastDoc"
            ref={lastDocRef}
            required
            type="date"
          />
        </label>
        <label htmlFor="pretrial">
          קדם משפט:{' '}
          <input
            className={s9(c.input, isPretrialError && c.isError)}
            dir="ltr"
            id="pretrial"
            name="pretrial"
            ref={pretrialRef}
            required
            type="date"
          />
        </label>
      </div>
      <button className={s9(c.btn)} type="submit">שלחי</button>
    </form>
  )
}
