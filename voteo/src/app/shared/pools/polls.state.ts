import { State, Action, StateContext } from '@ngxs/store';
import { AddPoll, SetOwnPolls, SetPrivatePolls, SetPublicPolls } from './polls.actions';
import { PollModel } from './poll.model';
import { PoolsService } from './pools.service';
import { PollsModel } from './pools.model';

​
@State<PollsModel>({
  name: 'polls',
  defaults: {
    ownPolls: [],
    privatePolls: [],
    publicPolls: []
  }
})
export class PollsState {

  constructor(private _poolsService: PoolsService) {
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
      if (poll.pending && !action.polls.some(actualPoll => poll.id ===  actualPoll.id)) {
        console.log(poll.poolTitle);
        return poll;
      }
    } );

    ctx.setState({
      ...state,
      ownPolls: [...pendingPolls, ...action.polls.reverse()]
    });
  }

  @Action(SetPrivatePolls)
  SetPrivatePolls(ctx: StateContext<PollsModel>, action: SetPrivatePolls) {
    const state = ctx.getState();

    ctx.setState({
        ...state,
        privatePolls: action.polls
      }
    );
  }

  @Action(SetPublicPolls)
  SetPublicPolls(ctx: StateContext<PollsModel>, action: SetPublicPolls) {
    const state = ctx.getState();
    console.log(action.polls);
    ctx.setState({
        ...state,
        publicPolls: [...action.polls]
      }
    );
  }
}
