export type OptList = {
  optId: string;
  optName: string;
};

export type AptiList = {
  id: number;
  question: string;
  options: OptList[];
  correctAnswer: string;
  desc: string;
};
