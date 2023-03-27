import s9 from "style9";
import getDeadline from "@/utils/getDeadline";

const c = s9.create({
  heading: {
    fontSize: '2.5em',
    textAlign: "center",
    marginBottom: "1em",
  },
  table: {
    width: '100%',
    textAlign: "right",
    borderCollapse: 'collapse',
    whiteSpace: 'nowrap',
  },
  tableHead: {
    backgroundColor: '#444',
    color: '#fff',
    paddingRight: '8px',
    fontSize: '1.5em',
  },
  cell: {
    paddingLeft: '8px',
    paddingTop: '2px',
    paddingBottom: '4px',
  },
  datesCol: {
    width: '100%',
    paddingRight: '12px',
    borderRight: '2px solid #ccc',
  },
  row: {
    borderBottom: '2px solid #444',
    fontSize: '1.2em',
  },

  footer: {
    fontSize: '12px',
    color: '#666',
  },
});

interface Props {
  params: {
    lastDoc: string;
    pretrial: string;
  };
}

export default function Table({ params }: Props) {
  const lastDoc = new Date(params.lastDoc);
  const pretrial = new Date(params.pretrial);
  
  const deadlines = [
    { name: 'דיון מקדמי', date: getDeadline({ startDate: lastDoc,  after: 30}), },
    { name: 'הודעה על דיון מקדמי', date: getDeadline({ startDate: pretrial,  before: 20}), },
    { name: 'קביעת פגישת מהות', date: getDeadline({ startDate: lastDoc,  after: 45}), },
    { name: 'הגשת בקשות', date: getDeadline({ startDate: lastDoc,  after: 53}), },
    { name: 'רשימת בקשות', date: getDeadline({ startDate: pretrial,  before: 20}), },
    { name: 'הודעה על בקשה לצד שני', date: getDeadline({ startDate: pretrial,  before: 27}), },
    { name: 'שאלונים', date: getDeadline({ startDate: lastDoc,  after: 30}), },
    { name: 'תשובה לשאלונים', date: getDeadline({ startDate: lastDoc,  after: 60}), },
    { name: 'גילוי מסמכים', date: getDeadline({ startDate: lastDoc,  after: 30}), },
    { name: 'עיון במסמכים', date: getDeadline({ startDate: lastDoc,  after: 60}), },
    { name: 'גילוי ספציפי', date: getDeadline({ startDate: lastDoc,  after: 60}), },
    { name: 'רשימת עדים (תובע)', date: getDeadline({ startDate: pretrial,  before: 20}), },
    { name: 'רשימת עדים', date: getDeadline({ startDate: pretrial,  before: 7}), },
  ].sort((a, b) => {
    return a.date.valueOf() - b.date.valueOf();
  });

  return (
    <>
      <h2 className={s9(c.heading)}>מועדים</h2>

      <table className={s9(c.table)}>
        <thead>
          <tr>
            <th className={s9(c.tableHead, c.cell)}>מה</th>
            <th className={s9(c.tableHead, c.cell, c.datesCol)}>מתי</th>
          </tr>
        </thead>

        <tbody>
          {deadlines.map(deadline => (
            <tr className={s9(c.row)} key={deadline.name}>
              <th className={s9(c.cell)}>{deadline.name}</th>
              <td className={s9(c.cell, c.datesCol)}>
                {deadline.date.toLocaleDateString('he')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <footer className={s9(c.footer)}>
        <strong>כתב תשובה:</strong> {lastDoc.toLocaleDateString('he')} | <strong>קדם משפט:</strong> {pretrial.toLocaleDateString('he')}
      </footer>
    </>
  )
}
