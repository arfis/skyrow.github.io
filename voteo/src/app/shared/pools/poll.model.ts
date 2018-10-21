export interface PollModel {
  id: any;
  numberOfQuestions: string;
  poolTitle: string;
  voted: any;
  canVote: any;
  pending: boolean;
  questions?: any[];
  settings?: any;
  created?: Date;
  votePending: boolean;
}
