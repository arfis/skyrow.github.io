import { State, Action, StateContext } from '@ngxs/store';
import { AddPoll, SetOwnPolls, SetPrivatePolls, SetPublicPolls } from './polls.actions';
import { PollModel } from './poll.model';
import { PoolsService } from './pools.service';
import { PollsModel } from './pools.model';

​
@State<PollsModel>({
  name: 'polls',
  defaults: []
})
export class PollsState {

  constructor(private _poolsService: PoolsService) {
  }

  @Action(AddPoll)
  AddPoll(ctx: StateContext<PollModel[]>, action: AddPoll) {
    const state = ctx.getState();
    console.log(action);

    ctx.setState(
      [...state,
        action.poll]
    );
  }

  @Action(SetOwnPolls)
  SetOwnPolls(ctx: StateContext<PollModel[]>, action: SetOwnPolls) {
    const state = ctx.getState();

    ctx.setState({
        ...state,
        ownPolls: action.polls
      });
  }

  @Action(SetPrivatePolls)
  SetPrivatePolls(ctx: StateContext<PollModel[]>, action: SetPrivatePolls) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      privatePolls: action.polls}
    );
  }

  @Action(SetPublicPolls)
  SetPublicPolls(ctx: StateContext<PollModel[]>, action: SetPublicPolls) {
    const state = ctx.getState();
    console.log(action.polls);
    ctx.setState({
      ...state,
      publicPolls: action.polls}
    );
  }
}
