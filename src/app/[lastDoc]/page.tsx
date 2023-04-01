import s9 from "style9";
import Table from '@/components/Table';

import type { TableProps, } from '@/components/Table';

const c = s9.create({
  heading: {
    fontSize: '2.5em',
    textAlign: "center",
    marginBottom: "0.5em",
  },
  headingDetail: {
    display: 'block',
    fontSize: '0.5em',
  },
  footer: {
    color: '#666',
    fontSize: '12px',
    marginTop: '1.5em',
  },
});

export interface LastDocDatesProps {
  params: Omit<TableProps, 'pretrial'>;
}


export default function LastDocDatesPage({ params: { lastDoc, } }: LastDocDatesProps) {
  const lastDocAsDate = new Date(lastDoc);

  return (
    <>
      <h2 className={s9(c.heading)}>
        מועדים
        <span className={s9(c.headingDetail)}>
          (כתב תשובה בלבד)
        </span>
      </h2>

      <Table lastDoc={lastDoc} />
      <footer className={s9(c.footer)}>
        <strong>כתב תשובה:</strong> {lastDocAsDate.toLocaleDateString('he')}
      </footer>
    </>
  )
}

export const runtime = 'experimental-edge';

