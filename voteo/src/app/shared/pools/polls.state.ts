import { State, Action, StateContext } from '@ngxs/store';
import {
  AddPoll,
  SetOwnPolls,
  SetPrivatePolls,
  SetPublicPolls, SetType,
  VoteOnPoll,
} from './polls.actions';

import { PollsModel } from './pools.model';
import { PollListType } from './pollListType';
​
@State<PollsModel>({
  name: 'polls',
  defaults: {
    ownPolls: [],
    privatePolls: [],
    publicPolls: [],
    poolListType: null
  }
})

export class PollsState {

  constructor() {

  }

  @Action(AddPoll)
  AddPoll(ctx: StateContext<PollsModel>, action: AddPoll) {
    const state = ctx.getState();
    console.log(action);

    ctx.setState(
      {
        ...state,
        ownPolls: [action.poll, ...state.ownPolls]
      }
    );
  }

  @Action(SetOwnPolls)
  SetOwnPolls(ctx: StateContext<PollsModel>, action: SetOwnPolls) {
    const state = ctx.getState();
    const pendingPolls = state.ownPolls.filter(poll => {
      if ((poll.pending && !action.polls.some(actualPoll => poll.id === actualPoll.id))) {
        return poll;
      }
    });

    const pendingVotes = state.ownPolls.filter(poll => poll.votePending);
    const polls = action.polls.map(poll => {
      const pendingPoll = pendingVotes.find(actualPendingPoll => actualPendingPoll.id === poll.id && poll.canVote === 'false');

      if (pendingPoll) {
        return pendingPoll;
      } else {
        return poll;
      }
    }).reverse();

    ctx.setState({
      ...state,
      ownPolls: [...pendingPolls, ...polls]
    });
  }

  @Action(SetPrivatePolls)
  SetPrivatePolls(ctx: StateContext<PollsModel>, action: SetPrivatePolls) {
    const state = ctx.getState();
    const pendingVotes = state.privatePolls.filter(poll => poll.votePending);
    const polls = action.polls.map(poll => {
      const pendingPoll = pendingVotes.find(actualPendingPoll => actualPendingPoll.id === poll.id && poll.canVote === 'false');

      if (pendingPoll) {
        return pendingPoll;
      } else {
        return poll;
      }
    }).reverse();

    ctx.setState({
      ...state,
      privatePolls: [...polls]
    });
  }

  @Action(SetPublicPolls)
  SetPublicPolls(ctx: StateContext<PollsModel>, action: SetPublicPolls) {
    const state = ctx.getState();
    const pendingVotes = state.publicPolls.filter(poll => poll.votePending);
    const polls = action.polls.map(poll => {
      const pendingPoll = pendingVotes.find(actualPendingPoll => actualPendingPoll.id === poll.id && poll.canVote === 'false');

      if (pendingPoll) {
        return pendingPoll;
      } else {
        return poll;
      }
    }).reverse();

    ctx.setState({
      ...state,
      publicPolls: [...polls]
    });
  }

  @Action(VoteOnPoll)
  VoteOnPoll(ctx: StateContext<PollsModel>, action: VoteOnPoll) {
    const state = ctx.getState();

    switch (state.poolListType) {
      case PollListType.OWN_LIST: {
        ctx.setState({
            ...state,
            ownPolls: [...state.ownPolls.filter(poll => poll.id !== action.poll.id), action.poll]
          }
        );
        break;
      }

      case PollListType.PUBLIC_LIST: {
        ctx.setState({
            ...state,
            publicPolls: [...state.publicPolls.filter(poll => poll.id !== action.poll.id), action.poll]
          }
        );
        break;
      }

      case PollListType.PRIVATE_LIST: {

        ctx.setState({
            ...state,
            privatePolls: [...state.privatePolls.filter(poll => poll.id !== action.poll.id), action.poll]
          }
        );
        break;
      }
    }

  }

  @Action(SetType)
  SetType(ctx: StateContext<PollsModel>, action: SetType) {
    const state = ctx.getState();

    ctx.setState({
        ...state,
        poolListType: action.pollType
      }
    );
  }
}
