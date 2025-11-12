'use client';

import { Card, CardHeader, CardBody, Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  addCheese,
  subtractCheese,
  multiplyCheese,
  divideCheese,
  cheeseSqrt,
  maxCheese,
  minCheese,
} from '@/lib/mathFunctions';

export default function BasicCalculator() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState<string | number | null>(null);
  const [error, setError] = useState<string>('');

  const handleOperation = (operation: string) => {
    setError('');
    try {
      const num1 = parseFloat(value1);
      const num2 = parseFloat(value2);

      if (isNaN(num1) || (operation !== 'sqrt' && isNaN(num2))) {
        setError('Please enter valid numbers');
        setResult(null);
        return;
      }

      let operationResult: number;
      switch (operation) {
        case 'add':
          operationResult = addCheese(num1, num2);
          break;
        case 'subtract':
          operationResult = subtractCheese(num1, num2);
          break;
        case 'multiply':
          operationResult = multiplyCheese(num1, num2);
          break;
        case 'divide':
          operationResult = divideCheese(num1, num2);
          break;
        case 'sqrt':
          operationResult = cheeseSqrt(num1);
          break;
        case 'max':
          operationResult = maxCheese(num1, num2);
          break;
        case 'min':
          operationResult = minCheese(num1, num2);
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
    { label: '+', value: 'add', color: 'primary' as const },
    { label: '−', value: 'subtract', color: 'primary' as const },
    { label: '×', value: 'multiply', color: 'primary' as const },
    { label: '÷', value: 'divide', color: 'primary' as const },
    { label: '√', value: 'sqrt', color: 'secondary' as const },
    { label: 'MAX', value: 'max', color: 'secondary' as const },
    { label: 'MIN', value: 'min', color: 'secondary' as const },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full">
        <CardHeader className="flex flex-col gap-1 items-start">
          <h3 className="text-2xl font-bold">🧮 Basic Calculator</h3>
          <p className="text-small text-default-500">
            Fundamental arithmetic operations
          </p>
        </CardHeader>
        <CardBody className="gap-4">
          <div className="flex gap-2">
            <Input
              type="number"
              label="First Value"
              placeholder="0"
              value={value1}
              onValueChange={setValue1}
              variant="bordered"
              className="flex-1"
            />
            <Input
              type="number"
              label="Second Value"
              placeholder="0"
              value={value2}
              onValueChange={setValue2}
              variant="bordered"
              className="flex-1"
              isDisabled={false}
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {operations.map((op) => (
              <Button
                key={op.value}
                color={op.color}
                variant="flat"
                onPress={() => handleOperation(op.value)}
                className="font-bold text-lg"
              >
                {op.label}
              </Button>
            ))}
          </div>

          {(result !== null || error) && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`p-4 rounded-lg text-center font-mono text-2xl ${
                error
                  ? 'bg-danger-50 text-danger'
                  : 'bg-success-50 text-success-700 dark:bg-success-900/20 dark:text-success'
              }`}
            >
              {error || result}
            </motion.div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}
