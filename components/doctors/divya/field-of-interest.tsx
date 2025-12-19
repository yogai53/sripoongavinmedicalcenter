import React from 'react';

export default function FieldOfInterest() {
  return (
    <div className='flex flex-col gap-4 mb-8'>
      <h3 className='text-xl font-semibold text-[#9B2C3A] mb-2'>Field of Interest</h3>
      <ul className='list-disc list-inside ml-4 mt-1'>
        <li>High Risk Obstetrics</li>
        <li>Endoscopy</li>
        <li>Gynaec Oncology</li>
      </ul>
    </div>
  );
}
