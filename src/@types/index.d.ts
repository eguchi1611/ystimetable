type Subject = {
  label: string;
  value: any;
};

type Holder = string[][];

type LineData = {
  h: string;
  i: string;
  j: string;
  k: string;
  l: string;
};

type SubjectOptions = {
  h: Subject[];
  i: Subject[];
  j: Subject[];
  k: Subject[];
  l: Subject[];
};

type TimetableSet = {
  1: Holder;
  2: Holder;
  3: Holder;
  4: Holder;
  5: Holder;
  7: Holder;
  10: Holder;
  13: Holder;
};
