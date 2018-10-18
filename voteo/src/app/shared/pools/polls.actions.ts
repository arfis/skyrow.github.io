import { PollModel } from './poll.model';

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
