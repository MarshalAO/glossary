
import './Term.css';

interface TermProps {
  term?: string
  pronunciation?: string
  definition?: string
}

export default function Term (props: TermProps) {

  const { term, pronunciation, definition } = props

  return (
    !!term ? (
      <div className="term">
        <h1>{term}</h1>
        {!!pronunciation ? (
          <h3>({pronunciation})</h3>
        ) : (
          <h3>&nbsp;</h3>
        )}
        <p>
          {definition}
        </p>
      </div>
    ) : (
      <div className="term">
        <p>Missing translation...</p>
      </div>
    )
  )
}
