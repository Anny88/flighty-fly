import {beforeEach, describe, expect, test} from 'vitest';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { AutocompleteInput } from '../AutocompleteInput';

describe("AutocompleteInput", () => {

    beforeEach(() => {
        render(<AutocompleteInput label='Origin' options={[]} onChange={()=>{}} />);
    });

    test("should show title all the time", () => {
        expect(screen.getByText(/Origin/i)).toBeDefined()
    })

})