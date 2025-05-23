import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from '../../util/http';
export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSerachTerm] = useState('')

  useQuery({
    querykey: ['event', { search: searchElement.current.value }],
    queryFn: () => fetchEvents(searchElement.current.value)
  })

  function handleSubmit(event) {
    event.preventDefault();
    setSerachTerm(searchElement)
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      <p>Please enter a search term and to find events.</p>
    </section>
  );
}
