import { State, Action, StateContext } from '@ngxs/store';
import { AddPoll, SetOwnPolls } from './polls.actions';
import { PollModel } from './poll.model';
import { PoolsService } from './pools.service';

​
@State<any[]>({
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

    ctx.setState(
      [...action.polls]
    );
  }
}
