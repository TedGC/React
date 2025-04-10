import { use, useActionState, useOptimistic } from "react";
import { OpinionsContext } from "../store/opinions-context";


export function Opinion({ opinion: { id, title, body, userName, votes } }) {
  const { upvoteOpinion, downvoteOpinion } = use(OpinionsContext)

  const [optimisticVotes, setVotesOptimistic] = useOptimistic(votes, (prevVotes, mode) =>
    mode === 'up' ? prevVotes + 1 : prevVotes - 1)
  // the idea simply is that these votes will change instantly when this function is called
  // and then we sent the request thereafter. and the great thing about use optimistic is 
  // that it will understand in which action it's being invoked in the end. So that is 
  // meant to be called inside of form actions. You should invoke Optimistic function
  // from inside of form action. And use optimistic then registers that and waits for that action
  // to complete. And once the action completed, it will get rid of this optimistic state
  // and instead apply the regular UI state that would've been applied anyways.
  // so that value that's produced by useOptimistic is only shonw while the form
  // is being submitted. It gives us a temporary value that's shown as long as the 
  // from is being submitted
  async function upvoteAction() {
    setVotesOptimistic('up')
    await upvoteOpinion(id)
  }

  async function downvoteAction() {
    setVotesOptimistic('down')
    await downvoteOpinion(id)
  }

  const [upvoteFormState, upvoteFormAction, upvotePending] = useActionState(upvoteAction, null)
  const [downvoteFormState, downvoteFormAction, downvotePending] = useActionState(downvoteAction, null)


  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className="votes">
        <button formAction={upvoteFormAction} disabled={upvotePending || downvotePending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

        <span>{optimisticVotes}</span>

        <button formAction={downvoteFormAction} disabled={upvotePending || downvotePending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
