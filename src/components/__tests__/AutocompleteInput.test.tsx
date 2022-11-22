import { describe, expect, test} from 'vitest';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { AutocompleteInput } from '../AutocompleteInput';

describe("AutocompleteInput", () => {
    test("should show a combobox with no options", () => {
        render(<AutocompleteInput label='Origin' options={[]} onChange={() => {}} />);
        const combobox = screen.getByRole('combobox');
        combobox.focus();
        fireEvent.mouseDown(combobox);
        expect(screen.getByText('No options')).toBeDefined();
    });

    test("should select an option by mouse click", () => {
        const mock = vi.fn();
        render(<AutocompleteInput label='Origin' options={['DUS', 'ALA']} onChange={mock} />);
        const combobox = screen.getByRole('combobox');
        combobox.focus();
        fireEvent.mouseDown(combobox);
        expect(screen.getByText('ALA')).toBeDefined();
        fireEvent.click(screen.getByText('ALA'));
        expect(mock).toBeCalledWith('ALA');
    });

    test("should select a filtered option by keyboard keys", () => {
        const mock = vi.fn();
        render(<AutocompleteInput label='Origin' options={['DUS', 'ALA']} onChange={mock} />);
        const combobox = screen.getByRole('combobox');
        combobox.focus();
        fireEvent.mouseDown(combobox);
        fireEvent.change(combobox, {target: {value: 'A'}})
        expect(screen.getByText('ALA')).toBeDefined();
        expect(screen.queryByText('DUS')).toBeNull();
        combobox.focus();
        fireEvent.keyDown(combobox, {key: 'ArrowDown', code: 'ArrowDown', charCode: 40});
        fireEvent.keyDown(combobox, {key: 'Enter', code: 'Enter', charCode: 13});
        expect(mock).toBeCalledWith('ALA');
    })

})