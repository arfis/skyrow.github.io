import { PollModel } from './poll.model';
import { PollListTypes } from './pollListTypes';

export interface PollsModel {
  privatePolls: PollModel[];
  publicPolls: PollModel[];
  ownPolls: PollModel[];
  poolListType: PollListTypes;
}
