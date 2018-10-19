import { stringFromHex } from '../helper';
import { PollModel } from './poll.model';

export function parsePolls(polls): PollModel[] {
  const parsedPolls = Array<PollModel>();
  // this.result = result.stack[0];
  for (const pool of polls.stack[0].value) {
    const id = stringFromHex(pool.value[0].value);
    const parsedArray = id.split('_');
    const poolTitle = parsedArray[1] ? parsedArray[1] : '-';
    const numberOfQuestions = parsedArray[2] ? parsedArray[2] : '0';
    parsedPolls.push(
      {
        id,
        poolTitle,
        numberOfQuestions,
        voted: pool.value[1].value,
        canVote: stringFromHex(pool.value[2].value),
        pending: false,
      });
  }

  return parsedPolls;
}
