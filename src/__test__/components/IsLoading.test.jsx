import { render } from '@testing-library/react';
import { IsLoading } from '../../components/IsLoading';


describe('Test the <IsLoading /> component', () => {

    
    test('Should match with the snapshot ', () => {

        const { container } = render(
            <IsLoading />
        );

        expect(container).toMatchSnapshot();
      
    });
  
});
