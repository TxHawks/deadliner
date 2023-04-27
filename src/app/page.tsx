import s9 from "style9";

const c = s9.create({
  heading: {
    textAlign: "center",
    marginTop: "1em",
    marginBottom: "1em",
  },
});

export default function Home() {
  return (
    <h2 className={s9(c.heading)}>
      להצגת מועדים יש להזין את תאריכי הבסיס למעלה
    </h2>
  )
}

export const runtime = 'experimental-edge';
