import { useActionState, use } from "react";
import Submit from "./Submit";
import { OpinionsContext } from "../store/opinions-context";

export function NewOpinion() {

  const { addOpinion } = use(OpinionsContext)

  async function shareOpinionAction(prevState, formData) {
    const title = formData.get('title')
    const body = formData.get('body')
    const userName = formData.get('userName')

    let errors = [];

    if (title.trim().length < 5) {
      errors.push('title must be at lest five chars')
    }
    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push('opnions should be long')
    }

    if (!userName.trim()) {
      errors.push('please provide your name')
    }

    if (errors.length > 0) {
      return {
        errors: errors, enteredValue: {
          title,
          body,
          userName
        }
      }
    }


    // if passes all those conditions, send the data to the backened 
    await addOpinion({ title, body, userName })


    return {
      errors: null, //other values can be added depending on what the user 
      // want to default set it to 
    }
  }



  const [formState, formAction] = useActionState(shareOpinionAction, {
    errors: null,
  }
  )



  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName"
              defaultValue={formState.enteredValue?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title"
              defaultValue={formState.enteredValue?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body"
            defaultValue={formState.enteredValue?.body}
            rows={5}></textarea>
        </p>

        {formState.errors && <ul className="errors">
          {formState.errors.map((error) => (
            <li key={error}> {error}</li>
          ))}</ul>}

        <Submit />
      </form>
    </div>
  );
}
