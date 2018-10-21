import { environment } from '../../../environments/environment';

export class Methods {

  static scriptHash = !environment.production ? 'f24b174d2d1e6551ed3274a436f731b4765ccfca' : '7135c7bb56bf7a79162651cdafa3fd6fb11d3b5e';

  // OPERATIONS HERE
  static getPoolOperation = 'GetPoll';
  static createPoolOperation = 'RegisterPoll';
  static getPublicAll = 'GetPublicAll';
  static getCreatedPolls = 'GetCreatedPolls';
  static getAssignedPolls = 'GetAssignedPolls';
  static getPoolById = 'GetPollById';
  static registerVote = 'RegisterVote';
  static getOptionResults = 'GetOptionResults';

  static getPools = 'ENTER_OPERATION_CODE_HERE';
}
