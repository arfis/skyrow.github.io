import { PollModel } from './poll.model';

export interface PollsModel {
  privatePolls: PollModel[];
  publicPolls: PollModel[];
  ownPolls: PollModel[];
}
