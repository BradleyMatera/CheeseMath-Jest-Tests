'use client';

import { Card, CardHeader, CardBody, Button, Input, Chip } from '@nextui-org/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  obscureCreditCard,
  validateCreditCard,
  formatCreditCard,
  detectCardType,
} from '@/lib/cardFunctions';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function CardObscurer() {
  const [cardNumber, setCardNumber] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [cardType, setCardType] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState<string>('');

  const handleObscure = () => {
    setError('');
    try {
      if (!cardNumber.trim()) {
        throw new Error('Please enter a card number');
      }
      const obscured = obscureCreditCard(cardNumber);
      const type = detectCardType(cardNumber);
      const valid = validateCreditCard(cardNumber);

      setResult(obscured);
      setCardType(type);
      setIsValid(valid);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setResult(null);
      setCardType('');
      setIsValid(null);
    }
  };

  const handleFormat = () => {
    setError('');
    try {
      if (!cardNumber.trim()) {
        throw new Error('Please enter a card number');
      }
      const formatted = formatCreditCard(cardNumber);
      setCardNumber(formatted);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleClear = () => {
    setCardNumber('');
    setResult(null);
    setCardType('');
    setIsValid(null);
    setError('');
  };

  const testCards = [
    { type: 'Visa', number: '4532015112830366' },
    { type: 'Mastercard', number: '5425233430109903' },
    { type: 'Amex', number: '374245455400126' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="w-full">
        <CardHeader className="flex flex-col gap-1 items-start">
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="w-6 h-6" />
            <h3 className="text-2xl font-bold">💳 Card Obscurer</h3>
          </div>
          <p className="text-small text-default-500">
            Secure credit card number masking and validation
          </p>
        </CardHeader>
        <CardBody className="gap-4">
          <Input
            label="Card Number"
            placeholder="0000-0000-0000-0000"
            value={cardNumber}
            onValueChange={setCardNumber}
            variant="bordered"
            description="12-16 digits accepted"
            maxLength={19}
          />

          <div className="grid grid-cols-3 gap-2">
            <Button
              color="danger"
              variant="shadow"
              onPress={handleObscure}
              className="font-semibold"
            >
              Obscure
            </Button>
            <Button color="warning" variant="flat" onPress={handleFormat}>
              Format
            </Button>
            <Button color="default" variant="flat" onPress={handleClear}>
              Clear
            </Button>
          </div>

          {(result || error) && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`p-4 rounded-lg ${
                error
                  ? 'bg-danger-50 text-danger'
                  : 'bg-primary-50 dark:bg-primary-900/20'
              }`}
            >
              {error ? (
                <div className="text-center font-semibold">{error}</div>
              ) : (
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-sm text-default-500 mb-1">Obscured Number</div>
                    <div className="font-mono text-2xl font-bold tracking-wider">
                      {result}
                    </div>
                  </div>
                  <div className="flex gap-2 justify-center items-center flex-wrap">
                    <Chip
                      color={isValid ? 'success' : 'danger'}
                      variant="flat"
                      size="sm"
                    >
                      {isValid ? '✓ Valid (Luhn)' : '✗ Invalid'}
                    </Chip>
                    <Chip color="primary" variant="flat" size="sm">
                      {cardType}
                    </Chip>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          <div className="border-t pt-4">
            <p className="text-xs text-default-500 mb-2">Test with sample cards:</p>
            <div className="flex gap-2 flex-wrap">
              {testCards.map((card) => (
                <Button
                  key={card.number}
                  size="sm"
                  variant="bordered"
                  onPress={() => setCardNumber(card.number)}
                >
                  {card.type}
                </Button>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
