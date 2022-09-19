import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ErrorModal } from '../../components/ErrorModal';
import { store } from '../../store';

describe('Test the <ErrorModal /> component', () => {
  
    // const open = true;
    // const errorMessage = "There are't results";

    test('Should match with the snapshot ', () => {
        
        const { container } = render(
            <Provider store={store}>
                <ErrorModal />
            </Provider>
        );
        screen.debug()

        expect(container).toMatchSnapshot();

    });

    
});
