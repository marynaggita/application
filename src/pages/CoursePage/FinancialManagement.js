import React from 'react'
import { course3 } from './Data';
import { CoursesSection } from '../../Components';

function FinancialManagement() {
    return (
        <>
          <CoursesSection {...course3} />
        </>
      );
}

export default FinancialManagement
