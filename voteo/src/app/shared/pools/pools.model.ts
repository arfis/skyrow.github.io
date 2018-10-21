import { PollModel } from './poll.model';
import { PollListType } from './pollListType';

export interface PollsModel {
  privatePolls: PollModel[];
  publicPolls: PollModel[];
  ownPolls: PollModel[];
  poolListType: PollListType;
}
