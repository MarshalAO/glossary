
import './Term.css';

interface TermProps {
  term: string
}

export default function Term (props: TermProps) {

  const { term } = props

  return (
    <div className="term">
      <h1>{term}</h1>
      <p>
        Definition.....
      </p>
    </div>
  )
}
