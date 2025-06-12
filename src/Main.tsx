
import Term from './Term';

import './Main.css';

export default function Main () {

  const primary = {
    term: 'Hello',
    pronunciation: undefined,
    definition: 'Lorem ipsum...'
  }

  const secondary = {
    term: 'สวัสดี',
    pronunciation: 'เฮ็โล',
    definition: 'การทักทายอย่างเป็นมิตร'
  }

  return (
    <div id="main">
      <Term
        term={primary.term}
        pronunciation={primary.pronunciation}
        definition={primary.definition}
      />
      <Term
        term={secondary.term}
        pronunciation={secondary.pronunciation}
        definition={secondary.definition}
      />
    </div>
  )
}
