'use client';

import { Card, CardHeader, CardBody, Button, Input, Chip } from '@nextui-org/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  sumOfArray,
  reverseString,
  isPalindrome,
  capitalizeWords,
  countVowels,
  countConsonants,
} from '@/lib/advancedFunctions';

export default function AdvancedCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | number | boolean | null>(null);
  const [error, setError] = useState<string>('');

  const handleOperation = (operation: string) => {
    setError('');
    try {
      let operationResult: string | number | boolean;

      switch (operation) {
        case 'sumArray': {
          if (!input.trim()) {
            throw new Error('Please enter comma-separated numbers');
          }
          const numArray = input.split(',').map((s) => parseFloat(s.trim()));
          if (numArray.some(isNaN)) {
            throw new Error('Array must contain only numbers');
          }
          operationResult = sumOfArray(numArray);
          break;
        }
        case 'reverse':
          if (!input.trim()) {
            throw new Error('Please enter a string');
          }
          operationResult = reverseString(input);
          break;
        case 'palindrome':
          if (!input.trim()) {
            throw new Error('Please enter a string');
          }
          operationResult = isPalindrome(input) ? 'TRUE ✓' : 'FALSE ✗';
          break;
        case 'capitalize':
          if (!input.trim()) {
            throw new Error('Please enter a string');
          }
          operationResult = capitalizeWords(input);
          break;
        case 'vowels':
          if (!input.trim()) {
            throw new Error('Please enter a string');
          }
          operationResult = `${countVowels(input)} vowels`;
          break;
        case 'consonants':
          if (!input.trim()) {
            throw new Error('Please enter a string');
          }
          operationResult = `${countConsonants(input)} consonants`;
          break;
        default:
          throw new Error('Invalid operation');
      }
      setResult(operationResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setResult(null);
    }
  };

  const operations = [
    { label: 'Sum Array', value: 'sumArray', icon: '∑' },
    { label: 'Reverse', value: 'reverse', icon: '↔️' },
    { label: 'Palindrome', value: 'palindrome', icon: '🔄' },
    { label: 'Capitalize', value: 'capitalize', icon: 'Aa' },
    { label: 'Count Vowels', value: 'vowels', icon: 'aeiou' },
    { label: 'Count Consonants', value: 'consonants', icon: 'bcdfg' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="w-full">
        <CardHeader className="flex flex-col gap-1 items-start">
          <h3 className="text-2xl font-bold">⚡ Advanced Operations</h3>
          <p className="text-small text-default-500">
            String manipulation and array processing
          </p>
        </CardHeader>
        <CardBody className="gap-4">
          <Input
            label="Input"
            placeholder="Enter text or comma-separated numbers"
            value={input}
            onValueChange={setInput}
            variant="bordered"
            description="For sum array: 1,2,3,4 | For strings: any text"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {operations.map((op) => (
              <Button
                key={op.value}
                color="secondary"
                variant="flat"
                onPress={() => handleOperation(op.value)}
                className="font-semibold"
                startContent={<span className="text-lg">{op.icon}</span>}
              >
                {op.label}
              </Button>
            ))}
          </div>

          {(result !== null || error) && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`p-4 rounded-lg text-center ${
                error
                  ? 'bg-danger-50 text-danger'
                  : 'bg-success-50 text-success-700 dark:bg-success-900/20 dark:text-success'
              }`}
            >
              <div className="font-mono text-xl break-words">
                {error || String(result)}
              </div>
            </motion.div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}
