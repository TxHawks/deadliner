'use client';

import * as React from 'react';
import s9 from "style9";
import { useRouter, usePathname, } from 'next/navigation';

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
    backgroundColor: '#e3008e',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '1.5em',
    fontWeight: 700,
    lineHeight: 1.5,
    padding: '0 1.5em',
    transform: "scale(1)",
    transition: "all 0.15s",

    ":hover": {
      cursor: "pointer",
      transform: "scale(1.05)",
    },
    ":focus": {
      transform: "scale(1.1)",
      outline: "none",
    },
    ":active": {
      cursor: "pointer",
      transform: "scale(0.95)",
    },
  },
});

export default function Form() {
  const router = useRouter();
  const pathname = usePathname();
  const [ lastDocFromPath, pretrialFromPath, ] = pathname.split('/').slice(1,3);

  const lastDocRef = React.useRef<HTMLInputElement>(null);
  const pretrialRef = React.useRef<HTMLInputElement>(null);
  const [ isDocError, setIsDocError, ] = React.useState<boolean>(false);
  const [ isPretrialError, setIsPretrialError, ] = React.useState<boolean>(false);

  function onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    let isError = false;
    const lastDocValue = lastDocRef.current?.value;
    const pretrialValue = pretrialRef.current?.value;

    if (!(lastDocValue && lastDocRef.current.valueAsDate)) {
      setIsDocError(true);
      isError = true;
    }
    if (!(pretrialValue && pretrialRef.current.valueAsDate)) {
      setIsPretrialError(true);
      isError = true;
    }

    if (isError) return;

    router.push(`/${lastDocValue}/${pretrialValue}`)
  }

  function onChange(_evt: React.ChangeEvent<HTMLInputElement>) {
    const lastDocValue = lastDocRef.current?.value;
    const pretrialValue = pretrialRef.current?.value;

    const isAllInputsFilled = lastDocValue && pretrialValue;
    const isAllInputsHaveValidDates = isAllInputsFilled
      && lastDocRef.current.valueAsDate && pretrialRef.current.valueAsDate;

    if (isAllInputsHaveValidDates) router.prefetch(`/${lastDocValue}/${pretrialValue}`);
 }

  return (
    <form className={s9(c.form)} onSubmit={onSubmit}>
      <div className={s9(c.inputs)}>
        <label htmlFor="lastDoc">
          כתב תשובה:{' '}
          <input
            className={s9(c.input, isDocError && c.isError)}
            defaultValue={lastDocFromPath || undefined}
            dir="ltr"
            id="lastDoc"
            name="lastDoc"
            onChange={onChange}
            ref={lastDocRef}
            required
            type="date"
          />
        </label>
        <label htmlFor="pretrial">
          קדם משפט:{' '}
          <input
            className={s9(c.input, isPretrialError && c.isError)}
            defaultValue={pretrialFromPath || undefined}
            dir="ltr"
            id="pretrial"
            name="pretrial"
            onChange={onChange}
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
