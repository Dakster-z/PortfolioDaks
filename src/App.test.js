import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

jest.mock('./shared/effects/Particle', () => function MockParticle() {
  return <div data-testid="particles" />;
});

function renderApp(pathname = '/') {
  window.history.pushState({}, '', pathname);
  return render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}

test('exposes the UGC CTA from the services section', () => {
  renderApp('/');

  expect(screen.getByRole('link', { name: /découvrir l’offre ugc/i })).toHaveAttribute('href', '/ugc');
});

test('renders the dedicated UGC route', () => {
  renderApp('/ugc');

  expect(screen.getByRole('heading', { name: /votre site mérite plus qu’une mise en ligne/i })).toBeInTheDocument();
});

test('keeps the homepage anchor targets available', () => {
  renderApp('/');

  expect(document.getElementById('about')).toBeInTheDocument();
  expect(document.getElementById('services')).toBeInTheDocument();
  expect(document.getElementById('contact')).toBeInTheDocument();
});
