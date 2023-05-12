import 'server-only';
import s9 from "style9";
import getDeadline from "@/utils/getDeadline";
import { HebrewCalendar, Locale } from "@hebcal/core";


const c = s9.create({
  heading: {
    fontSize: '2.5em',
    textAlign: "center",
    marginBottom: "1em",
  },
  tableWrapper: {
    width: '100%',
    overflowX: 'auto',
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
    borderRight: '2px solid #eee',
    fontVariantNumeric: 'tabular-nums',
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

export interface TableProps {
  lastDoc: string;
  pretrial?: string;
}

export default function Table({ lastDoc, pretrial }: TableProps) {
  const lastDocAsDate = lastDoc ? new Date(lastDoc) : undefined;
  const pretrialAsDate = pretrial ? new Date(pretrial) : undefined;

  const deadlines = [
    lastDocAsDate && { name: 'שליחת שאלונים', date: getDeadline({ startDate: lastDocAsDate,  after: 30}), },
    lastDocAsDate && { name: 'גילוי מסמכים', date: getDeadline({ startDate: lastDocAsDate,  after: 30}), },
    lastDocAsDate && { name: 'דיון מקדמי', date: getDeadline({ startDate: lastDocAsDate,  after: 30}), },
    lastDocAsDate && { name: 'קביעת פגישת מהות', date: getDeadline({ startDate: lastDocAsDate,  after: 45}), },
    lastDocAsDate && { name: 'הגשת בקשות', date: getDeadline({ startDate: lastDocAsDate,  after: 60}), },
    lastDocAsDate && { name: 'תשובה לשאלונים', date: getDeadline({ startDate: lastDocAsDate,  after: 60}), },
    // lastDocAsDate && { name: 'עיון במסמכים', date: getDeadline({ startDate: lastDocAsDate,  after: 60}), },
    lastDocAsDate && { name: 'גילוי ספציפי', date: getDeadline({ startDate: lastDocAsDate,  after: 60}), },
    lastDocAsDate && { name: 'מענה לגילוי ספציפי', date: getDeadline({ startDate: lastDocAsDate,  after: 90}), },

    pretrialAsDate && { name: 'הודעה על בקשה לצד שני', date: getDeadline({ startDate: pretrialAsDate,  before: 27}), },
    pretrialAsDate && { name: 'הודעה על דיון מקדמי', date: getDeadline({ startDate: pretrialAsDate,  before: 20}), },
    pretrialAsDate && { name: 'רשימת בקשות', date: getDeadline({ startDate: pretrialAsDate,  before: 20}), },
    pretrialAsDate && { name: 'רשימת עדים (תובע)', date: getDeadline({ startDate: pretrialAsDate,  before: 20}), },
    pretrialAsDate && { name: 'רשימת עדים (נתבע)', date: getDeadline({ startDate: pretrialAsDate,  before: 7}), },
  ]
    .filter(Boolean)
    .sort((a, b) => {
      return a.date.valueOf() - b.date.valueOf();
    });
  
  // TODO: Integrate with Google Calendar
  return (
    <div className={s9(c.tableWrapper)}>
      <table className={s9(c.table)}>
        <thead>
          <tr>
            <th className={s9(c.tableHead, c.cell)}>מה</th>
            <th className={s9(c.tableHead, c.cell, c.datesCol)}>מתי</th>
          </tr>
        </thead>

        <tbody>
          {deadlines.map(deadline => {
            const holiday = HebrewCalendar.calendar({
              isHebrewYear: false,
              start: deadline.date,
              end: deadline.date,
              noMinorFast: true,
              noSpecialShabbat: true,
              noRoshChodesh: true,
              il: true,
            });
            const hebHoliday = holiday.length
              ? Locale.lookupTranslation(holiday[0].basename(), 'he-X-NoNikud')
              : undefined;
            return (
              <tr className={s9(c.row)} key={deadline.name}>
                <th className={s9(c.cell)}>{deadline.name}</th>
                <td className={s9(c.cell, c.datesCol)}>
                  {deadline.date.toLocaleDateString('en-UK', { day: '2-digit', month: '2-digit', year: 'numeric', })} 
                  {' '}
                  (יום {deadline.date.toLocaleDateString('he', {weekday: 'narrow',})[0]}
                  {hebHoliday ? `, ${hebHoliday})` : ')'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
