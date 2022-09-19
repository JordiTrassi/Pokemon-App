import { render, screen } from '@testing-library/react';
import { IsLoading } from '../../components/IsLoading';


describe('Test the <IsLoading /> component', () => {

    
    test('Should match with the snapshot ', () => {

        const { container } = render(
            <IsLoading />
        );

        expect(container).toMatchSnapshot();
      
    });

    test('Should contain "Is Loading ..." text', () => {
        
        render(
            <IsLoading />
        );
        screen.debug();

        expect(screen.getByText("Is Loading ...")).toBeTruthy();
    });
  
});
