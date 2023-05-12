import { addDays, subDays, isBefore, isAfter, isEqual, } from "date-fns";
import { HebrewCalendar, } from "@hebcal/core";

function isBeforeOrEqual(date1: Date, date2: Date) {
  return isBefore(date1, date2) || isEqual(date1, date2);
}

function isAfterOrEqual(date1: Date, date2: Date) {
  return isAfter(date1, date2) || isEqual(date1, date2);
}

const courtRecessDates = [
  // 2023
  // ////////////////////

  // Passover
  [ 
    makeRecessDate("2023-04-05"),
    makeRecessDate("2023-04-06"),
    makeRecessDate("2023-04-07"),
    makeRecessDate("2023-04-08"),
    makeRecessDate("2023-04-09"),
    makeRecessDate("2023-04-10"),
    makeRecessDate("2023-04-11"),
    makeRecessDate("2023-04-12"),
  ],

  // Summer
  [ 
    makeRecessDate("2023-07-21"),
    makeRecessDate("2023-07-22"),
    makeRecessDate("2023-07-23"),
    makeRecessDate("2023-07-24"),
    makeRecessDate("2023-07-25"),
    makeRecessDate("2023-07-26"),
    makeRecessDate("2023-07-27"),
    makeRecessDate("2023-07-28"),
    makeRecessDate("2023-07-29"),
    makeRecessDate("2023-07-30"),
    makeRecessDate("2023-07-31"),
    makeRecessDate("2023-08-01"),
    makeRecessDate("2023-08-02"),
    makeRecessDate("2023-08-03"),
    makeRecessDate("2023-08-04"),
    makeRecessDate("2023-08-05"),
    makeRecessDate("2023-08-06"),
    makeRecessDate("2023-08-07"),
    makeRecessDate("2023-08-08"),
    makeRecessDate("2023-08-09"),
    makeRecessDate("2023-08-10"),
    makeRecessDate("2023-08-11"),
    makeRecessDate("2023-08-12"),
    makeRecessDate("2023-08-13"),
    makeRecessDate("2023-08-14"),
    makeRecessDate("2023-08-15"),
    makeRecessDate("2023-08-16"),
    makeRecessDate("2023-08-17"),
    makeRecessDate("2023-08-18"),
    makeRecessDate("2023-08-19"),
    makeRecessDate("2023-08-20"),
    makeRecessDate("2023-08-21"),
    makeRecessDate("2023-08-22"),
    makeRecessDate("2023-08-23"),
    makeRecessDate("2023-08-24"),
    makeRecessDate("2023-08-25"),
    makeRecessDate("2023-08-26"),
    makeRecessDate("2023-08-27"),
    makeRecessDate("2023-08-28"),
    makeRecessDate("2023-08-29"),
    makeRecessDate("2023-08-30"),
    makeRecessDate("2023-08-31"),
    makeRecessDate("2023-09-01"),
    makeRecessDate("2023-09-02"),
    makeRecessDate("2023-09-03"),
    makeRecessDate("2023-09-04"),
    makeRecessDate("2023-09-05"),
  ],

  // Sukot
  [ 
    makeRecessDate("2023-09-29"),
    makeRecessDate("2023-09-30"),
    makeRecessDate("2023-10-01"),
    makeRecessDate("2023-10-02"),
    makeRecessDate("2023-10-03"),
    makeRecessDate("2023-10-04"),
    makeRecessDate("2023-10-05"),
    makeRecessDate("2023-10-06"),
    makeRecessDate("2023-10-07"),
  ],

  // 2024
  // ////////////////////

  // Passover
  [ 
    makeRecessDate("2024-04-22"),
    makeRecessDate("2024-04-23"),
    makeRecessDate("2024-04-24"),
    makeRecessDate("2024-04-25"),
    makeRecessDate("2024-04-26"),
    makeRecessDate("2024-04-27"),
    makeRecessDate("2024-04-28"),
    makeRecessDate("2024-04-29"),
  ],

  // Summer
  [ 
    makeRecessDate("2024-07-21"),
    makeRecessDate("2024-07-22"),
    makeRecessDate("2024-07-23"),
    makeRecessDate("2024-07-24"),
    makeRecessDate("2024-07-25"),
    makeRecessDate("2024-07-26"),
    makeRecessDate("2024-07-27"),
    makeRecessDate("2024-07-28"),
    makeRecessDate("2024-07-29"),
    makeRecessDate("2024-07-30"),
    makeRecessDate("2024-07-31"),
    makeRecessDate("2024-08-01"),
    makeRecessDate("2024-08-02"),
    makeRecessDate("2024-08-03"),
    makeRecessDate("2024-08-04"),
    makeRecessDate("2024-08-05"),
    makeRecessDate("2024-08-06"),
    makeRecessDate("2024-08-07"),
    makeRecessDate("2024-08-08"),
    makeRecessDate("2024-08-09"),
    makeRecessDate("2024-08-10"),
    makeRecessDate("2024-08-11"),
    makeRecessDate("2024-08-12"),
    makeRecessDate("2024-08-13"),
    makeRecessDate("2024-08-14"),
    makeRecessDate("2024-08-15"),
    makeRecessDate("2024-08-16"),
    makeRecessDate("2024-08-17"),
    makeRecessDate("2024-08-18"),
    makeRecessDate("2024-08-19"),
    makeRecessDate("2024-08-20"),
    makeRecessDate("2024-08-21"),
    makeRecessDate("2024-08-22"),
    makeRecessDate("2024-08-23"),
    makeRecessDate("2024-08-24"),
    makeRecessDate("2024-08-25"),
    makeRecessDate("2024-08-26"),
    makeRecessDate("2024-08-27"),
    makeRecessDate("2024-08-28"),
    makeRecessDate("2024-08-29"),
    makeRecessDate("2024-08-30"),
    makeRecessDate("2024-08-31"),
    makeRecessDate("2024-09-01"),
    makeRecessDate("2024-09-02"),
    makeRecessDate("2024-09-03"),
    makeRecessDate("2024-09-04"),
    makeRecessDate("2024-09-05"),
  ],

  // Sukot
  [ 
    makeRecessDate("2028-10-16"),
    makeRecessDate("2028-10-17"),
    makeRecessDate("2028-10-18"),
    makeRecessDate("2028-10-19"),
    makeRecessDate("2028-10-20"),
    makeRecessDate("2028-10-21"),
    makeRecessDate("2028-10-22"),
    makeRecessDate("2028-10-23"),
    makeRecessDate("2028-10-24"),
  ],

  // 2025
  // ////////////////////

  // Passover
  [ 
    makeRecessDate("2025-04-12"),
    makeRecessDate("2025-04-13"),
    makeRecessDate("2025-04-14"),
    makeRecessDate("2025-04-15"),
    makeRecessDate("2025-04-16"),
    makeRecessDate("2025-04-17"),
    makeRecessDate("2025-04-18"),
    makeRecessDate("2025-04-19"),
  ],

  // Summer
  [ 
    makeRecessDate("2025-07-21"),
    makeRecessDate("2025-07-22"),
    makeRecessDate("2025-07-23"),
    makeRecessDate("2025-07-24"),
    makeRecessDate("2025-07-25"),
    makeRecessDate("2025-07-26"),
    makeRecessDate("2025-07-27"),
    makeRecessDate("2025-07-28"),
    makeRecessDate("2025-07-29"),
    makeRecessDate("2025-07-30"),
    makeRecessDate("2025-07-31"),
    makeRecessDate("2025-08-01"),
    makeRecessDate("2025-08-02"),
    makeRecessDate("2025-08-03"),
    makeRecessDate("2025-08-04"),
    makeRecessDate("2025-08-05"),
    makeRecessDate("2025-08-06"),
    makeRecessDate("2025-08-07"),
    makeRecessDate("2025-08-08"),
    makeRecessDate("2025-08-09"),
    makeRecessDate("2025-08-10"),
    makeRecessDate("2025-08-11"),
    makeRecessDate("2025-08-12"),
    makeRecessDate("2025-08-13"),
    makeRecessDate("2025-08-14"),
    makeRecessDate("2025-08-15"),
    makeRecessDate("2025-08-16"),
    makeRecessDate("2025-08-17"),
    makeRecessDate("2025-08-18"),
    makeRecessDate("2025-08-19"),
    makeRecessDate("2025-08-20"),
    makeRecessDate("2025-08-21"),
    makeRecessDate("2025-08-22"),
    makeRecessDate("2025-08-23"),
    makeRecessDate("2025-08-24"),
    makeRecessDate("2025-08-25"),
    makeRecessDate("2025-08-26"),
    makeRecessDate("2025-08-27"),
    makeRecessDate("2025-08-28"),
    makeRecessDate("2025-08-29"),
    makeRecessDate("2025-08-30"),
    makeRecessDate("2025-08-31"),
    makeRecessDate("2025-09-01"),
    makeRecessDate("2025-09-02"),
    makeRecessDate("2025-09-03"),
    makeRecessDate("2025-09-04"),
    makeRecessDate("2025-09-05"),
  ],

  // Sukot
  [ 
    makeRecessDate("2025-10-06"),
    makeRecessDate("2025-10-07"),
    makeRecessDate("2025-10-08"),
    makeRecessDate("2025-10-09"),
    makeRecessDate("2025-10-10"),
    makeRecessDate("2025-10-11"),
    makeRecessDate("2025-10-12"),
    makeRecessDate("2025-10-13"),
    makeRecessDate("2025-10-14"),
  ],

  // 2026
  // ////////////////////

  // Passover
  [ 
    makeRecessDate("2026-04-01"),
    makeRecessDate("2026-04-02"),
    makeRecessDate("2026-04-03"),
    makeRecessDate("2026-04-04"),
    makeRecessDate("2026-04-05"),
    makeRecessDate("2026-04-06"),
    makeRecessDate("2026-04-07"),
    makeRecessDate("2026-04-08"),
  ],

  // Summer
  [ 
    makeRecessDate("2026-07-21"),
    makeRecessDate("2026-07-22"),
    makeRecessDate("2026-07-23"),
    makeRecessDate("2026-07-24"),
    makeRecessDate("2026-07-25"),
    makeRecessDate("2026-07-26"),
    makeRecessDate("2026-07-27"),
    makeRecessDate("2026-07-28"),
    makeRecessDate("2026-07-29"),
    makeRecessDate("2026-07-30"),
    makeRecessDate("2026-07-31"),
    makeRecessDate("2026-08-01"),
    makeRecessDate("2026-08-02"),
    makeRecessDate("2026-08-03"),
    makeRecessDate("2026-08-04"),
    makeRecessDate("2026-08-05"),
    makeRecessDate("2026-08-06"),
    makeRecessDate("2026-08-07"),
    makeRecessDate("2026-08-08"),
    makeRecessDate("2026-08-09"),
    makeRecessDate("2026-08-10"),
    makeRecessDate("2026-08-11"),
    makeRecessDate("2026-08-12"),
    makeRecessDate("2026-08-13"),
    makeRecessDate("2026-08-14"),
    makeRecessDate("2026-08-15"),
    makeRecessDate("2026-08-16"),
    makeRecessDate("2026-08-17"),
    makeRecessDate("2026-08-18"),
    makeRecessDate("2026-08-19"),
    makeRecessDate("2026-08-20"),
    makeRecessDate("2026-08-21"),
    makeRecessDate("2026-08-22"),
    makeRecessDate("2026-08-23"),
    makeRecessDate("2026-08-24"),
    makeRecessDate("2026-08-25"),
    makeRecessDate("2026-08-26"),
    makeRecessDate("2026-08-27"),
    makeRecessDate("2026-08-28"),
    makeRecessDate("2026-08-29"),
    makeRecessDate("2026-08-30"),
    makeRecessDate("2026-08-31"),
    makeRecessDate("2026-09-01"),
    makeRecessDate("2026-09-02"),
    makeRecessDate("2026-09-03"),
    makeRecessDate("2026-09-04"),
    makeRecessDate("2026-09-05"),
  ],

  // Sukot
  [ 
    makeRecessDate("2026-09-25"),
    makeRecessDate("2026-09-26"),
    makeRecessDate("2026-09-27"),
    makeRecessDate("2026-09-28"),
    makeRecessDate("2026-09-29"),
    makeRecessDate("2026-09-30"),
    makeRecessDate("2026-10-01"),
    makeRecessDate("2026-10-02"),
    makeRecessDate("2026-10-03"),
  ],

  // 2027
  // ////////////////////

  // Passover
  [ 
    makeRecessDate("2027-04-21"),
    makeRecessDate("2027-04-22"),
    makeRecessDate("2027-04-23"),
    makeRecessDate("2027-04-24"),
    makeRecessDate("2027-04-25"),
    makeRecessDate("2027-04-26"),
    makeRecessDate("2027-04-27"),
    makeRecessDate("2027-04-28"),
  ],

  // Summer
  [ 
    makeRecessDate("2027-07-21"),
    makeRecessDate("2027-07-22"),
    makeRecessDate("2027-07-23"),
    makeRecessDate("2027-07-24"),
    makeRecessDate("2027-07-25"),
    makeRecessDate("2027-07-26"),
    makeRecessDate("2027-07-27"),
    makeRecessDate("2027-07-28"),
    makeRecessDate("2027-07-29"),
    makeRecessDate("2027-07-30"),
    makeRecessDate("2027-07-31"),
    makeRecessDate("2027-08-01"),
    makeRecessDate("2027-08-02"),
    makeRecessDate("2027-08-03"),
    makeRecessDate("2027-08-04"),
    makeRecessDate("2027-08-05"),
    makeRecessDate("2027-08-06"),
    makeRecessDate("2027-08-07"),
    makeRecessDate("2027-08-08"),
    makeRecessDate("2027-08-09"),
    makeRecessDate("2027-08-10"),
    makeRecessDate("2027-08-11"),
    makeRecessDate("2027-08-12"),
    makeRecessDate("2027-08-13"),
    makeRecessDate("2027-08-14"),
    makeRecessDate("2027-08-15"),
    makeRecessDate("2027-08-16"),
    makeRecessDate("2027-08-17"),
    makeRecessDate("2027-08-18"),
    makeRecessDate("2027-08-19"),
    makeRecessDate("2027-08-20"),
    makeRecessDate("2027-08-21"),
    makeRecessDate("2027-08-22"),
    makeRecessDate("2027-08-23"),
    makeRecessDate("2027-08-24"),
    makeRecessDate("2027-08-25"),
    makeRecessDate("2027-08-26"),
    makeRecessDate("2027-08-27"),
    makeRecessDate("2027-08-28"),
    makeRecessDate("2027-08-29"),
    makeRecessDate("2027-08-30"),
    makeRecessDate("2027-08-31"),
    makeRecessDate("2027-09-01"),
    makeRecessDate("2027-09-02"),
    makeRecessDate("2027-09-03"),
    makeRecessDate("2027-09-04"),
    makeRecessDate("2027-09-05"),
  ],

  // Sukot
  [ 
    makeRecessDate("2027-10-15"),
    makeRecessDate("2027-10-16"),
    makeRecessDate("2027-10-17"),
    makeRecessDate("2027-10-18"),
    makeRecessDate("2027-10-19"),
    makeRecessDate("2027-10-20"),
    makeRecessDate("2027-10-21"),
    makeRecessDate("2027-10-22"),
    makeRecessDate("2027-10-23"),
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

const holidays = [
  "Erev Pesach",
  "Pesach I",
  "Pesach VII",
  "Erev Shavuot",
  "Shavuot",
  "Yom HaAtzma'ut",
  "Erev Yom Kippur",
  "Yom Kippur",
  "Erev Sukkot",
  "Sukkot I",
  "Shmini Atzeret",
]

export default function getDeadline({
  startDate,
  before,
  after,
}: GetDeadlineArgs): Date {
  const isBackwards = before != null;
  const toDeadline = isBackwards ? subDays : addDays;

  let distance = before ?? after;

  for (const recessPeriod of (isBackwards ? [...courtRecessDates].reverse() : courtRecessDates)) {
    
    let isOverlapping = false;
    if (isBackwards) {
      const recessEnd = recessPeriod[recessPeriod.length - 1];
      isOverlapping = isBeforeOrEqual(recessEnd, startDate)
        && isAfterOrEqual(recessEnd, toDeadline(startDate, distance));
    }
    else {
      const recessStart = recessPeriod[0];
      isOverlapping = isAfterOrEqual(recessStart, startDate)
        && isBeforeOrEqual(recessStart, toDeadline(startDate, distance));
    }
    if (isOverlapping) distance = distance + recessPeriod.length;
  }

  const deadline = toDeadline(startDate, distance);
  const deadlineIsFri = deadline.getDay() === 5;
  const deadlineIsSat = deadline.getDay() === 6;
  const deadlineIsWeekend = deadlineIsFri || deadlineIsSat;
  const holiday = HebrewCalendar.calendar({
    isHebrewYear: false,
    start: deadline,
    end: deadline,
    noMinorFast: true,
    noSpecialShabbat: true,
    noRoshChodesh: true,
    il: true,
  })[0]?.getDesc();

  const deadlineIsSabatical = !!(deadlineIsWeekend || holidays.includes(holiday) || holiday?.includes("Rosh Hashana"));

  if (deadlineIsSabatical) return getDeadline({ startDate: deadline, after: 1, });
  return deadline;
}

function makeRecessDate(recessDay: `${number}-${number}-${number}`) {
  return new Date(recessDay);
}
