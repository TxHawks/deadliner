import s9 from "style9";
import Table from '@/components/Table';

import type { TableProps, } from '@/components/Table';

const c = s9.create({
  heading: {
    fontSize: '2.5em',
    textAlign: "center",
    marginBottom: "0.75em",
  },
  footer: {
    color: '#666',
    fontSize: '12px',
    marginTop: '1.5em',
  },
});

export interface AllDatesProps {
  params: Omit<TableProps, 'pretrial'> & Required<Pick<TableProps, 'pretrial'>>;
}


export default function AllDatesPage({ params: { lastDoc, pretrial, } }: AllDatesProps) {
  const lastDocAsDate = new Date(lastDoc);
  const pretrialAsDate = new Date(pretrial);

  return (
    <>
      <h2 className={s9(c.heading)}>מועדים</h2>

      <Table lastDoc={lastDoc} pretrial={pretrial} />
      <br />
      <footer className={s9(c.footer)}>
        <strong>כתב תשובה:</strong> {lastDocAsDate.toLocaleDateString('he')} | <strong>קדם משפט:</strong> {pretrialAsDate.toLocaleDateString('he')}
      </footer>
    </>
  )
}

export const runtime = 'experimental-edge';
