import { Input } from '@chakra-ui/react';
import { useState } from 'react';

const CreditCardInput = () => {
  const [cardNumber, setCardNumber] = useState('');

  // Funzione per gestire l'input del numero della carta di credito
  const handleCardNumberChange = (e) => {
    let input = e.target.value;

    // Rimuovi eventuali spazi e caratteri non numerici
    input = input.replace(/\s/g, '').replace(/[^0-9]/g, '');

    // Formatta il numero della carta di credito aggiungendo spazi ogni 4 caratteri
    let formattedInput = '';
    for (let i = 0; i < input.length; i++) {
      if (i % 4 === 0 && i > 0) {
        formattedInput += ' ';
      }
      formattedInput += input[i];
    }

    // Imposta il numero della carta di credito nel formato desiderato
    setCardNumber(formattedInput);
  };

  return (
    <div>
      <label htmlFor="cardNumber">Numero della carta <span className="text-red-500 font-bold">*</span></label>
      <Input
        type="text"
        inputMode="numeric"
        id="numberCard"
        name="cardNumber"
        value={cardNumber}
        onChange={handleCardNumberChange}
        placeholder="8572 2558 3698 5588"
        maxLength={19}
        className="bg-white dark:bg-gray-900 dark:border-gray-800"
      />
    </div>
  );
};

export default CreditCardInput;
