import { Input } from "@chakra-ui/react";
import { useState } from 'react';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (e) => {
    // Rimuovi i caratteri non numerici dal numero di telefono
    const formattedNumber = e.target.value.replace(/\D/g, '');

    // Formatta il numero con spazi dopo i primi tre numeri e altri tre numeri
    let formattedPhoneNumber = '';
    for (let i = 0; i < formattedNumber.length; i++) {
      if (i === 3 || i === 6) {
        formattedPhoneNumber += ' ' + formattedNumber[i];
      } else {
        formattedPhoneNumber += formattedNumber[i];
      }
    }

    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <div>
      <label htmlFor="phone">Telefono <span className="text-red-500 font-bold">*</span></label>
      <Input
        type="tel"
        id="phoneNumb"
        name="phone"
        value={phoneNumber}
        onChange={handleInputChange}
        placeholder="365 285 1875"
        maxLength={12}
        className="bg-white dark:bg-gray-900 dark:border-gray-800"
      />
    </div>
  );
};

export default PhoneNumberInput;
