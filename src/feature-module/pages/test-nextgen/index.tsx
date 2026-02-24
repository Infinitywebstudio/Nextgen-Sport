import TestNextgenLayout from './layout';
import { ReactNode } from 'react';

interface TestNEXTGENProps {
  children: ReactNode;
}

const TestNEXTGEN = ({ children }: TestNEXTGENProps) => {
  return <TestNextgenLayout>{children}</TestNextgenLayout>;
};

export default TestNEXTGEN;
