'use client';

import { Card, CardHeader, CardBody, Button, Input, Chip, Tabs, Tab } from '@nextui-org/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  regexMatch,
  validateEmail,
  validatePhone,
  validateURL,
  extractNumbers,
  extractEmails,
} from '@/lib/regexFunctions';

export default function RegexAnalyzer() {
  const [inputText, setInputText] = useState('');
  const [pattern, setPattern] = useState('');
  const [result, setResult] = useState<string | string[] | null>(null);
  const [error, setError] = useState<string>('');
  const [activeTab, setActiveTab] = useState('match');

  const handleOperation = (operation: string) => {
    setError('');
    try {
      let operationResult: string | string[];

      switch (operation) {
        case 'match':
          if (!inputText.trim() || !pattern.trim()) {
            throw new Error('Please enter both text and pattern');
          }
          operationResult = regexMatch(inputText, pattern) ? 'MATCH ✓' : 'NO MATCH ✗';
          break;
        case 'email':
          if (!inputText.trim()) {
            throw new Error('Please enter text to validate');
          }
          operationResult = validateEmail(inputText) ? 'VALID EMAIL ✓' : 'INVALID EMAIL ✗';
          break;
        case 'phone':
          if (!inputText.trim()) {
            throw new Error('Please enter text to validate');
          }
          operationResult = validatePhone(inputText) ? 'VALID PHONE ✓' : 'INVALID PHONE ✗';
          break;
        case 'url':
          if (!inputText.trim()) {
            throw new Error('Please enter text to validate');
          }
          operationResult = validateURL(inputText) ? 'VALID URL ✓' : 'INVALID URL ✗';
          break;
        case 'extractNumbers':
          if (!inputText.trim()) {
            throw new Error('Please enter text');
          }
          const numbers = extractNumbers(inputText);
          operationResult = numbers.length > 0 ? numbers.join(', ') : 'No numbers found';
          break;
        case 'extractEmails':
          if (!inputText.trim()) {
            throw new Error('Please enter text');
          }
          const emails = extractEmails(inputText);
          operationResult = emails.length > 0 ? emails : ['No emails found'];
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="w-full">
        <CardHeader className="flex flex-col gap-1 items-start">
          <h3 className="text-2xl font-bold">🔍 Regex Analyzer</h3>
          <p className="text-small text-default-500">
            Pattern matching and text validation
          </p>
        </CardHeader>
        <CardBody className="gap-4">
          <Tabs
            selectedKey={activeTab}
            onSelectionChange={(key) => {
              setActiveTab(key as string);
              setResult(null);
              setError('');
            }}
            variant="bordered"
            color="primary"
          >
            <Tab key="match" title="Pattern Match">
              <div className="flex flex-col gap-4 pt-4">
                <Input
                  label="Input Text"
                  placeholder="Hello World"
                  value={inputText}
                  onValueChange={setInputText}
                  variant="bordered"
                />
                <Input
                  label="Regex Pattern"
                  placeholder="^Hello"
                  value={pattern}
                  onValueChange={setPattern}
                  variant="bordered"
                  description="Case-insensitive matching"
                />
                <Button
                  color="primary"
                  variant="shadow"
                  onPress={() => handleOperation('match')}
                  size="lg"
                >
                  Test Pattern
                </Button>
              </div>
            </Tab>

            <Tab key="validate" title="Validate">
              <div className="flex flex-col gap-4 pt-4">
                <Input
                  label="Input"
                  placeholder="Enter email, phone, or URL"
                  value={inputText}
                  onValueChange={setInputText}
                  variant="bordered"
                />
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    color="secondary"
                    variant="flat"
                    onPress={() => handleOperation('email')}
                  >
                    Email
                  </Button>
                  <Button
                    color="secondary"
                    variant="flat"
                    onPress={() => handleOperation('phone')}
                  >
                    Phone
                  </Button>
                  <Button
                    color="secondary"
                    variant="flat"
                    onPress={() => handleOperation('url')}
                  >
                    URL
                  </Button>
                </div>
              </div>
            </Tab>

            <Tab key="extract" title="Extract">
              <div className="flex flex-col gap-4 pt-4">
                <Input
                  label="Input Text"
                  placeholder="Extract data from this text"
                  value={inputText}
                  onValueChange={setInputText}
                  variant="bordered"
                />
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    color="success"
                    variant="flat"
                    onPress={() => handleOperation('extractNumbers')}
                  >
                    Extract Numbers
                  </Button>
                  <Button
                    color="success"
                    variant="flat"
                    onPress={() => handleOperation('extractEmails')}
                  >
                    Extract Emails
                  </Button>
                </div>
              </div>
            </Tab>
          </Tabs>

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
              {error ? (
                <div className="font-semibold">{error}</div>
              ) : Array.isArray(result) ? (
                <div className="flex flex-wrap gap-2 justify-center">
                  {result.map((item, idx) => (
                    <Chip key={idx} color="success" variant="flat">
                      {item}
                    </Chip>
                  ))}
                </div>
              ) : (
                <div className="font-mono text-xl">{result}</div>
              )}
            </motion.div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}
