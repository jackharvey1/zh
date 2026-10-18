import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import zhuyin from './data/zhuyin.json';

const [first, second] = zhuyin;

beforeEach(() => {
    // Always pick the first character as the answer
    vi.spyOn(Math, 'random').mockReturnValue(0);
});

afterEach(() => {
    vi.restoreAllMocks();
});

test('renders the prompt and a tile for every character', () => {
    render(<App />);

    expect(screen.getByText('Tap the character you hear')).toBeInTheDocument();
    expect(screen.getByAltText('audio icon')).toHaveAttribute(
        'src',
        '/img/speaker.svg'
    );
    zhuyin.forEach(({ character }) => {
        expect(screen.getByText(character)).toBeInTheDocument();
    });
});

test('clicking the correct tile shows success, and Continue resets', () => {
    render(<App />);

    fireEvent.click(screen.getByText(first.character));

    expect(screen.getByText('Well done!')).toBeInTheDocument();
    expect(screen.getByText(first.character)).toHaveClass('tile--correct');

    fireEvent.click(screen.getByRole('button', { name: 'Continue' }));

    expect(screen.queryByText('Well done!')).not.toBeInTheDocument();
    expect(
        screen.queryByRole('button', { name: 'Continue' })
    ).not.toBeInTheDocument();
});

test('pressing the key for a wrong tile reveals the answer', () => {
    render(<App />);

    fireEvent.keyDown(window, { key: second.key });

    expect(
        screen.getByText(`Correct answer: ${first.character}`)
    ).toBeInTheDocument();
    expect(screen.getByText(second.character)).toHaveClass('tile--incorrect');
    expect(screen.getByAltText('cross icon')).toBeInTheDocument();
});
