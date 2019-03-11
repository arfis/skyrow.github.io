"""
Voteo - Decentralized Voting App
Created by Skyrow|Bitcoach - https://www.bitcoach.net/
"""

from boa.interop.Neo.Runtime import CheckWitness, Log, Serialize, Deserialize
from boa.interop.Neo.Storage import GetContext, Put, Delete, Get
from boa.builtins import concat

#def split(data, separator):
    #for char in data

# Main Operation
def Main(operation, args):
    """
    Main definition for the smart contracts
    :param operation: the operation to be performed
    :type operation: str
    :param args: list of arguments.
        args[0]  is always sender script hash
        args[1]  is Poll Data or Poll Index
        args[2]+ eligible addresses
    :param type: str
    :return:
        byterarray: The result of the operation
    """
    user_address = args[0] #Always needed

    if operation == 'GetPublicAll':
        publicPolls = Get(GetContext(),"public")

        if publicPolls is None:
            return "There are no public polls"
        else:
            publicPolls = Deserialize(publicPolls)

            publicPollsObj = []

            for pollID in publicPolls:
                pollItem = []
                pollItem.append(pollID)

                Log(pollID)

                vote_list = concat(pollID,".vote_list")
                vl = Get(GetContext(),vote_list)
                if vl is None:
                    pollItem.append(len(vl))
                else:
                    pollItem.append(len(Deserialize(vl)))

                vote_key = concat(pollID,".")
                vote_key = concat(vote_key,user_address)
                vote = Get(GetContext(),vote_key)
                if vote is None:
                    pollItem.append("false")
                else:
                    pollItem.append("true")

                publicPollsObj.append(pollItem)

            return publicPollsObj

    if operation == 'GetPollById':
        #input parameters
        pollID = args[1]
        poll = Get(GetContext(),pollID)

        if poll is None:
            return "Poll with given ID doesn't exist"
        else:
            return Deserialize(poll)

    if operation == 'GetAssignedPolls':
        user_key = concat(user_address,".assigned")

        pollsAssigned = Get(GetContext(),user_key)

        if pollsAssigned is None:
            return "There are no private polls assigned to the current user"
        else:
            pollsAssigned = Deserialize(pollsAssigned)

            pollsObj = []

            for pollID in pollsAssigned:
                pollItem = []
                pollItem.append(pollID)

                vote_list = concat(pollID,".vote_list")
                vl = Get(GetContext(),vote_list)
                if vl is None:
                    pollItem.append(len(vl))
                else:
                    pollItem.append(len(Deserialize(vl)))

                vote_key = concat(pollID,".")
                vote_key = concat(vote_key,user_address)
                vote = Get(GetContext(),vote_key)
                if vote is None:
                    pollItem.append("false")
                else:
                    pollItem.append("true")

                pollsObj.append(pollItem)

            return pollsObj

    if operation == 'GetCreatedPolls':
        user_key = concat(user_address,".created")

        pollsCreated = Get(GetContext(),user_key)

        if pollsCreated is None:
            return "There are no private polls created by current user"
        else:
            pollsCreated = Deserialize(pollsCreated)

            pollsObj = []

            for pollID in pollsCreated:
                pollItem = []
                pollItem.append(pollID)

                vote_list = concat(pollID,".vote_list")
                vl = Get(GetContext(),vote_list)
                if vl is None:
                    pollItem.append(len(vl))
                else:
                    pollItem.append(len(Deserialize(vl)))

                vote_key = concat(pollID,".")
                vote_key = concat(vote_key,user_address)
                vote = Get(GetContext(),vote_key)
                if vote is None:
                    pollItem.append("false")
                else:
                    pollItem.append("true")

                pollsObj.append(pollItem)

            return pollsObj

    if operation == 'GetAssignedByAddress':
        user_key = concat(args[1],".assigned")

        pollsAssigned = Get(GetContext(),user_key)

        if pollsAssigned is None:
            return "There are no private polls assigned to this address"
        else:
            return Deserialize(pollsAssigned)

    if operation == 'GetPollCount':
        pollCount = Get(GetContext(),"pollCount")

        if pollCount is None:
            return "Contract does not contain any poll"
        else:
            return Deserialize(pollCount)

    if operation == 'GetVoteListById':
        pollID = args[1]

        vote_list = concat(pollID,".vote_list")
        vl = Get(GetContext(),vote_list)
        if vl is None:
            return "This poll has 0 participants so far"
        else:
            return Deserialize(vl)

    if operation == 'CheckVoteByIdAndAddress':
        #input parameters
        pollID = args[1]
        target_address = args[2]

        vote_key = concat(pollID,".")
        vote_key = concat(vote_key,target_address)

        vote = Get(GetContext(),vote_key)
        if vote is None:
            return "Current user has not participated in this poll"
        else:
            return Deserialize(vote)

    if operation == 'GetOptionResults':
        pollID = args[1]
        optionID = args[2]

        option_key = concat(pollID,".")
        option_key = concat(option_key,optionID)

        option_count = Get(GetContext(),option_key)
        if option_count is None:
            return len(option_count)
        else:
            Log(option_count)
            return Deserialize(option_count)

    if operation == 'RegisterVote':
        data = args[1]
        pollID = args[2]

        vote_key = concat(pollID,".");
        vote_key = concat(vote_key,user_address)

        vote = Get(GetContext(),vote_key)
        if vote is None:
            Put(GetContext(),vote_key,Serialize(args))

            vote_list = concat(pollID,".vote_list")
            vl = Get(GetContext(),vote_list)
            if vl is None:
                vl = []
                vl.append(user_address)
                Put(GetContext(),vote_list,Serialize(vl))
            else:
                vl = Deserialize(vl)
                vl.append(user_address)
                Put(GetContext(),vote_list,Serialize(vl))

        else:
            return "User has already participated in this vote"

        if len(args) > 2:
            iterator = 0
            for argument in args:
                if iterator > 2:
                    option_id = argument
                    option_key = concat(pollID,".")
                    option_key = concat(option_key,option_id)

                    option_count = Get(GetContext(),option_key)
                    if option_count is None:
                        option_count = 1
                        Put(GetContext(),option_key,Serialize(option_count))
                    else:
                        option_count = Deserialize(option_count)
                        option_count += 1
                        Put(GetContext(),option_key,Serialize(option_count))
                iterator = iterator + 1

        return "Vote Successful"

    if operation == 'RegisterPoll':
        #input parameters
        data = args[1]
        poll_name = args[2]
        address_list = args[3]

        #Save latest poll ID
        pollID = Get(GetContext(),"pollCount")
        poll_key = poll_name

        if pollID is None:
            pollIDInt = 1
            pollID = Serialize(pollIDInt)
            Put(GetContext(),"pollCount",pollID)
        else:
            pollIDInt = Deserialize(pollID)
            pollIDInt += 1
            pollID = Serialize(pollIDInt)
            Put(GetContext(),"pollCount",pollID)

        #Save poll to corresponding addresses
        if address_list is None:
            publicPolls = Get(GetContext(),"public")
            if publicPolls is None:
                publicPolls = []
                publicPolls.append(poll_key)
                Put(GetContext(),"public",Serialize(publicPolls))
            else:
                publicPolls = Deserialize(publicPolls)
                publicPolls.append(poll_key)
                Put(GetContext(),"public",Serialize(publicPolls))
        else:
            iterator = 0
            for argument in args:
                if iterator > 2:
                    target_address = argument
                    user_key = concat(target_address,".assigned")

                    pollsAssigned = Get(GetContext(),user_key)
                    if pollsAssigned is None:
                        pollsAssigned = []
                        pollsAssigned.append(poll_key)
                        Put(GetContext(),user_key,Serialize(pollsAssigned))
                    else:
                        pollsAssigned = Deserialize(pollsAssigned)
                        pollsAssigned.append(poll_key)
                        Put(GetContext(),user_key,Serialize(pollsAssigned))
                iterator = iterator + 1

        owner_key = concat(user_address,".created")

        pollsCreated = Get(GetContext(),owner_key)
        if pollsCreated is None:
            pollsCreated = []
            pollsCreated.append(poll_key)
            Put(GetContext(),owner_key,Serialize(pollsCreated))
        else:
            pollsCreated = Deserialize(pollsCreated)
            pollsCreated.append(poll_key)
            Put(GetContext(),owner_key,Serialize(pollsCreated))

        Put(GetContext(),poll_key,Serialize(args))
        return poll_key

    # Everything after this requires authorization
    authorized = CheckWitness(user_address)
    if not authorized:
        Log("Not Authorized")
        return False
    Log("Authorized")


    return False
