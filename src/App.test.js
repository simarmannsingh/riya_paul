import ReactDOM from 'react-dom'
import Navbar from './components/Navbar';

describe('Navbar', () => {
  it('renders the navbar links', () => {
    const navbar = <Navbar />
    const container = document.createElement('div');
    document.body.appendChild(container);
    
    ReactDOM.render(navbar, container);

    expect(container.textContent).toMatch('Riya PaulHomeAboutPhotosPublications');

  })
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Riya Paul/i);
//   expect(linkElement).toBeInTheDocument();
// });
