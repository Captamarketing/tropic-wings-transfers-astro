export interface TimetableRow {
  depart: string;
  arrive: string;
  type: string;
  popular: boolean;
}

export const timetableCNS: TimetableRow[] = [
  { depart: "07:30", arrive: "08:45", type: "Non-stop", popular: false },
  { depart: "09:30", arrive: "11:00", type: "Palm Cove stop", popular: false },
  { depart: "11:00", arrive: "12:15", type: "Non-stop", popular: false },
  { depart: "13:00", arrive: "14:15", type: "Non-stop", popular: true },
  { depart: "15:00", arrive: "16:15", type: "Non-stop", popular: false },
  { depart: "16:30", arrive: "18:00", type: "Palm Cove stop", popular: false },
  { depart: "18:00", arrive: "19:15", type: "Non-stop", popular: false },
];

export const timetablePD: TimetableRow[] = [
  { depart: "05:00", arrive: "06:15", type: "Non-stop", popular: false },
  { depart: "07:00", arrive: "08:15", type: "Non-stop", popular: false },
  { depart: "09:00", arrive: "10:30", type: "Palm Cove stop", popular: false },
  { depart: "11:00", arrive: "12:15", type: "Non-stop", popular: false },
  { depart: "13:30", arrive: "14:45", type: "Non-stop", popular: true },
  { depart: "15:00", arrive: "16:15", type: "Non-stop", popular: false },
];
