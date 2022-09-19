import { render } from '@testing-library/react';
import { ErrorModal } from '../../components/ErrorModal';


describe('Test the <ErrorModal /> component', () => {
  
    test('Should match with the snapshot ', () => {
        const { container } = render(
            <ErrorModal />
        );
    });

    expect(container).toMatchSnapshot();
    
});
