import { PollModel } from './poll.model';
import { PollListTypes } from './pollListTypes';

export class AddPoll {
  static readonly type = '[Pools] Add Poll';
  constructor(public poll: PollModel) {}
}

export class SetOwnPolls {
  static readonly type = '[Pools] Setting own Polls';
  constructor(public polls: PollModel[]) {}
}

export class SetPrivatePolls {
  static readonly type = '[Pools] Setting private Polls';
  constructor(public polls: PollModel[]) {}
}

export class SetPublicPolls {
  static readonly type = '[Pools] Setting public Polls';
  constructor(public polls: PollModel[]) {}
}

export class SetType {
  static readonly type = '[Pools] Setting type of current Polls';
  constructor(public pollType: PollListTypes) {}
}

export class VoteOnPoll {
  static readonly type = '[Pools] Vote on private Poll';
  constructor(public poll: PollModel) {}
}
