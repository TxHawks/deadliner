import 'server-only';
import { addDays, subDays } from "date-fns";

const offdays = [
  // 2023
  // ////////////////////

  // Passover
  [ 
    makeOffday("2023-04-05"),
    makeOffday("2023-04-06"),
    makeOffday("2023-04-07"),
    makeOffday("2023-04-08"),
    makeOffday("2023-04-09"),
    makeOffday("2023-04-10"),
    makeOffday("2023-04-11"),
    makeOffday("2023-04-12"),
  ],

  // Summer
  [ 
    makeOffday("2023-07-21"),
    makeOffday("2023-07-22"),
    makeOffday("2023-07-23"),
    makeOffday("2023-07-24"),
    makeOffday("2023-07-25"),
    makeOffday("2023-07-26"),
    makeOffday("2023-07-27"),
    makeOffday("2023-07-28"),
    makeOffday("2023-07-29"),
    makeOffday("2023-07-30"),
    makeOffday("2023-07-31"),
    makeOffday("2023-08-01"),
    makeOffday("2023-08-02"),
    makeOffday("2023-08-03"),
    makeOffday("2023-08-04"),
    makeOffday("2023-08-05"),
    makeOffday("2023-08-06"),
    makeOffday("2023-08-07"),
    makeOffday("2023-08-08"),
    makeOffday("2023-08-09"),
    makeOffday("2023-08-10"),
    makeOffday("2023-08-11"),
    makeOffday("2023-08-12"),
    makeOffday("2023-08-13"),
    makeOffday("2023-08-14"),
    makeOffday("2023-08-15"),
    makeOffday("2023-08-16"),
    makeOffday("2023-08-17"),
    makeOffday("2023-08-18"),
    makeOffday("2023-08-19"),
    makeOffday("2023-08-20"),
    makeOffday("2023-08-21"),
    makeOffday("2023-08-22"),
    makeOffday("2023-08-23"),
    makeOffday("2023-08-24"),
    makeOffday("2023-08-25"),
    makeOffday("2023-08-26"),
    makeOffday("2023-08-27"),
    makeOffday("2023-08-28"),
    makeOffday("2023-08-29"),
    makeOffday("2023-08-30"),
    makeOffday("2023-08-31"),
    makeOffday("2023-09-01"),
    makeOffday("2023-09-02"),
    makeOffday("2023-09-03"),
    makeOffday("2023-09-04"),
    makeOffday("2023-09-05"),
  ],

  // Sukot
  [ 
    makeOffday("2023-09-29"),
    makeOffday("2023-09-30"),
    makeOffday("2023-10-01"),
    makeOffday("2023-10-02"),
    makeOffday("2023-10-03"),
    makeOffday("2023-10-04"),
    makeOffday("2023-10-05"),
    makeOffday("2023-10-06"),
    makeOffday("2023-10-07"),
  ],

  // 2024
  // ////////////////////

  // Passover
  [ 
    makeOffday("2024-04-22"),
    makeOffday("2024-04-23"),
    makeOffday("2024-04-24"),
    makeOffday("2024-04-25"),
    makeOffday("2024-04-26"),
    makeOffday("2024-04-27"),
    makeOffday("2024-04-28"),
    makeOffday("2024-04-29"),
  ],

  // Summer
  [ 
    makeOffday("2024-07-21"),
    makeOffday("2024-07-22"),
    makeOffday("2024-07-23"),
    makeOffday("2024-07-24"),
    makeOffday("2024-07-25"),
    makeOffday("2024-07-26"),
    makeOffday("2024-07-27"),
    makeOffday("2024-07-28"),
    makeOffday("2024-07-29"),
    makeOffday("2024-07-30"),
    makeOffday("2024-07-31"),
    makeOffday("2024-08-01"),
    makeOffday("2024-08-02"),
    makeOffday("2024-08-03"),
    makeOffday("2024-08-04"),
    makeOffday("2024-08-05"),
    makeOffday("2024-08-06"),
    makeOffday("2024-08-07"),
    makeOffday("2024-08-08"),
    makeOffday("2024-08-09"),
    makeOffday("2024-08-10"),
    makeOffday("2024-08-11"),
    makeOffday("2024-08-12"),
    makeOffday("2024-08-13"),
    makeOffday("2024-08-14"),
    makeOffday("2024-08-15"),
    makeOffday("2024-08-16"),
    makeOffday("2024-08-17"),
    makeOffday("2024-08-18"),
    makeOffday("2024-08-19"),
    makeOffday("2024-08-20"),
    makeOffday("2024-08-21"),
    makeOffday("2024-08-22"),
    makeOffday("2024-08-23"),
    makeOffday("2024-08-24"),
    makeOffday("2024-08-25"),
    makeOffday("2024-08-26"),
    makeOffday("2024-08-27"),
    makeOffday("2024-08-28"),
    makeOffday("2024-08-29"),
    makeOffday("2024-08-30"),
    makeOffday("2024-08-31"),
    makeOffday("2024-09-01"),
    makeOffday("2024-09-02"),
    makeOffday("2024-09-03"),
    makeOffday("2024-09-04"),
    makeOffday("2024-09-05"),
  ],

  // Sukot
  [ 
    makeOffday("2028-10-16"),
    makeOffday("2028-10-17"),
    makeOffday("2028-10-18"),
    makeOffday("2028-10-19"),
    makeOffday("2028-10-20"),
    makeOffday("2028-10-21"),
    makeOffday("2028-10-22"),
    makeOffday("2028-10-23"),
    makeOffday("2028-10-24"),
  ],

  // 2025
  // ////////////////////

  // Passover
  [ 
    makeOffday("2025-04-12"),
    makeOffday("2025-04-13"),
    makeOffday("2025-04-14"),
    makeOffday("2025-04-15"),
    makeOffday("2025-04-16"),
    makeOffday("2025-04-17"),
    makeOffday("2025-04-18"),
    makeOffday("2025-04-19"),
  ],

  // Summer
  [ 
    makeOffday("2025-07-21"),
    makeOffday("2025-07-22"),
    makeOffday("2025-07-23"),
    makeOffday("2025-07-24"),
    makeOffday("2025-07-25"),
    makeOffday("2025-07-26"),
    makeOffday("2025-07-27"),
    makeOffday("2025-07-28"),
    makeOffday("2025-07-29"),
    makeOffday("2025-07-30"),
    makeOffday("2025-07-31"),
    makeOffday("2025-08-01"),
    makeOffday("2025-08-02"),
    makeOffday("2025-08-03"),
    makeOffday("2025-08-04"),
    makeOffday("2025-08-05"),
    makeOffday("2025-08-06"),
    makeOffday("2025-08-07"),
    makeOffday("2025-08-08"),
    makeOffday("2025-08-09"),
    makeOffday("2025-08-10"),
    makeOffday("2025-08-11"),
    makeOffday("2025-08-12"),
    makeOffday("2025-08-13"),
    makeOffday("2025-08-14"),
    makeOffday("2025-08-15"),
    makeOffday("2025-08-16"),
    makeOffday("2025-08-17"),
    makeOffday("2025-08-18"),
    makeOffday("2025-08-19"),
    makeOffday("2025-08-20"),
    makeOffday("2025-08-21"),
    makeOffday("2025-08-22"),
    makeOffday("2025-08-23"),
    makeOffday("2025-08-24"),
    makeOffday("2025-08-25"),
    makeOffday("2025-08-26"),
    makeOffday("2025-08-27"),
    makeOffday("2025-08-28"),
    makeOffday("2025-08-29"),
    makeOffday("2025-08-30"),
    makeOffday("2025-08-31"),
    makeOffday("2025-09-01"),
    makeOffday("2025-09-02"),
    makeOffday("2025-09-03"),
    makeOffday("2025-09-04"),
    makeOffday("2025-09-05"),
  ],

  // Sukot
  [ 
    makeOffday("2025-10-06"),
    makeOffday("2025-10-07"),
    makeOffday("2025-10-08"),
    makeOffday("2025-10-09"),
    makeOffday("2025-10-10"),
    makeOffday("2025-10-11"),
    makeOffday("2025-10-12"),
    makeOffday("2025-10-13"),
    makeOffday("2025-10-14"),
  ],

  // 2026
  // ////////////////////

  // Passover
  [ 
    makeOffday("2026-04-01"),
    makeOffday("2026-04-02"),
    makeOffday("2026-04-03"),
    makeOffday("2026-04-04"),
    makeOffday("2026-04-05"),
    makeOffday("2026-04-06"),
    makeOffday("2026-04-07"),
    makeOffday("2026-04-08"),
  ],

  // Summer
  [ 
    makeOffday("2026-07-21"),
    makeOffday("2026-07-22"),
    makeOffday("2026-07-23"),
    makeOffday("2026-07-24"),
    makeOffday("2026-07-25"),
    makeOffday("2026-07-26"),
    makeOffday("2026-07-27"),
    makeOffday("2026-07-28"),
    makeOffday("2026-07-29"),
    makeOffday("2026-07-30"),
    makeOffday("2026-07-31"),
    makeOffday("2026-08-01"),
    makeOffday("2026-08-02"),
    makeOffday("2026-08-03"),
    makeOffday("2026-08-04"),
    makeOffday("2026-08-05"),
    makeOffday("2026-08-06"),
    makeOffday("2026-08-07"),
    makeOffday("2026-08-08"),
    makeOffday("2026-08-09"),
    makeOffday("2026-08-10"),
    makeOffday("2026-08-11"),
    makeOffday("2026-08-12"),
    makeOffday("2026-08-13"),
    makeOffday("2026-08-14"),
    makeOffday("2026-08-15"),
    makeOffday("2026-08-16"),
    makeOffday("2026-08-17"),
    makeOffday("2026-08-18"),
    makeOffday("2026-08-19"),
    makeOffday("2026-08-20"),
    makeOffday("2026-08-21"),
    makeOffday("2026-08-22"),
    makeOffday("2026-08-23"),
    makeOffday("2026-08-24"),
    makeOffday("2026-08-25"),
    makeOffday("2026-08-26"),
    makeOffday("2026-08-27"),
    makeOffday("2026-08-28"),
    makeOffday("2026-08-29"),
    makeOffday("2026-08-30"),
    makeOffday("2026-08-31"),
    makeOffday("2026-09-01"),
    makeOffday("2026-09-02"),
    makeOffday("2026-09-03"),
    makeOffday("2026-09-04"),
    makeOffday("2026-09-05"),
  ],

  // Sukot
  [ 
    makeOffday("2026-09-25"),
    makeOffday("2026-09-26"),
    makeOffday("2026-09-27"),
    makeOffday("2026-09-28"),
    makeOffday("2026-09-29"),
    makeOffday("2026-09-30"),
    makeOffday("2026-10-01"),
    makeOffday("2026-10-02"),
    makeOffday("2026-10-03"),
  ],

  // 2027
  // ////////////////////

  // Passover
  [ 
    makeOffday("2027-04-21"),
    makeOffday("2027-04-22"),
    makeOffday("2027-04-23"),
    makeOffday("2027-04-24"),
    makeOffday("2027-04-25"),
    makeOffday("2027-04-26"),
    makeOffday("2027-04-27"),
    makeOffday("2027-04-28"),
  ],

  // Summer
  [ 
    makeOffday("2027-07-21"),
    makeOffday("2027-07-22"),
    makeOffday("2027-07-23"),
    makeOffday("2027-07-24"),
    makeOffday("2027-07-25"),
    makeOffday("2027-07-26"),
    makeOffday("2027-07-27"),
    makeOffday("2027-07-28"),
    makeOffday("2027-07-29"),
    makeOffday("2027-07-30"),
    makeOffday("2027-07-31"),
    makeOffday("2027-08-01"),
    makeOffday("2027-08-02"),
    makeOffday("2027-08-03"),
    makeOffday("2027-08-04"),
    makeOffday("2027-08-05"),
    makeOffday("2027-08-06"),
    makeOffday("2027-08-07"),
    makeOffday("2027-08-08"),
    makeOffday("2027-08-09"),
    makeOffday("2027-08-10"),
    makeOffday("2027-08-11"),
    makeOffday("2027-08-12"),
    makeOffday("2027-08-13"),
    makeOffday("2027-08-14"),
    makeOffday("2027-08-15"),
    makeOffday("2027-08-16"),
    makeOffday("2027-08-17"),
    makeOffday("2027-08-18"),
    makeOffday("2027-08-19"),
    makeOffday("2027-08-20"),
    makeOffday("2027-08-21"),
    makeOffday("2027-08-22"),
    makeOffday("2027-08-23"),
    makeOffday("2027-08-24"),
    makeOffday("2027-08-25"),
    makeOffday("2027-08-26"),
    makeOffday("2027-08-27"),
    makeOffday("2027-08-28"),
    makeOffday("2027-08-29"),
    makeOffday("2027-08-30"),
    makeOffday("2027-08-31"),
    makeOffday("2027-09-01"),
    makeOffday("2027-09-02"),
    makeOffday("2027-09-03"),
    makeOffday("2027-09-04"),
    makeOffday("2027-09-05"),
  ],

  // Sukot
  [ 
    makeOffday("2027-10-15"),
    makeOffday("2027-10-16"),
    makeOffday("2027-10-17"),
    makeOffday("2027-10-18"),
    makeOffday("2027-10-19"),
    makeOffday("2027-10-20"),
    makeOffday("2027-10-21"),
    makeOffday("2027-10-22"),
    makeOffday("2027-10-23"),
  ],
];

interface DeadlineStartDate {
  startDate: Date;
}
interface GetDeadlineBeforeArgs extends DeadlineStartDate {
  before: number;
  after?: never;
}
interface GetDeadlineAfterArgs extends DeadlineStartDate {
  before?: never;
  after: number;
}

type GetDeadlineArgs = GetDeadlineAfterArgs | GetDeadlineBeforeArgs;

// TODO: Add checks for holidays, Fridays and Saturdays
// TODO: Integrate with Google Calendar
export default function getDeadline({
  startDate,
  before,
  after,
}: GetDeadlineArgs): Date {
  const isBackwards = before != null;
  const distance = before ?? after;
  const toDeadlne = isBackwards ? subDays : addDays;

  const deadline = toDeadlne(startDate, distance);
  const deadlineAsNumber = deadline.valueOf();

  const offdaysGroup = offdays.find(offdaysGroup => offdaysGroup.includes(deadlineAsNumber));

  if (!offdaysGroup) return deadline;


  if (isBackwards) {
    return getDeadline({ startDate: deadline, before: offdaysGroup.length, });
  }

  return getDeadline({ startDate: deadline, after: offdaysGroup.length, });
}

function makeOffday(offday: `${number}-${number}-${number}`) {
  return new Date(offday).valueOf();
}
