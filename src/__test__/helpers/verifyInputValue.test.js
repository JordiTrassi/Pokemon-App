import { verifyInputValue } from '../../helpers/verifyInputValue';

describe('Tets to verifyInputValue helper', () => {

    test('Should return the string suitable for sending it in the path of the Pokemon API', () => {
      
        const inputValue = '  piKAchU ';
        const verifiedInputValue = verifyInputValue(inputValue);

        expect(verifiedInputValue).toBe('pikachu');

    });
    
  
});
