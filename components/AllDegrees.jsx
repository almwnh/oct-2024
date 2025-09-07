import React from 'react';

export const AllDegrees = ({ student }) => {
  const subjects = [
    { key: 'theory', label: 'التمريض النظرى', max: 50 },
    { key: 'practical', label: 'التمريض العملى', max: 90 },
    { key: 'E', label: 'الترمنولوجى', max: 30 },
    { key: 'surgical', label: 'التمريض الباطنى و الجراحي', max: 50 },
    { key: 'anatomy', label: 'التشريح', max: 50 },
    { key: 'first_aids', label: 'الاسعافات الأولية', max: 30 },
    { key: 'infection_control', label: 'مكافحة العدوى', max: 30 },
    { key: 'women', label: 'تمريض النساء و الأطفال', max: 50 },
    { key: 'pharma', label: 'الفارما', max: 50 },
    { key: 'medical', label: 'التحاليل الطبية', max: 50 },
  ];

  const isSubjectFailed = (value) => value === 'راسب';

  const getClassName = (value) =>
    isSubjectFailed(value) ? 'text-red-600 font-bold' : '';

  const totalMax = 550;

  return (
    <div>
      <h2 className='text-2xl font-medium text-center mb-8'>
        بيان بدرجات الطالب المذكور أعلاه
      </h2>

      <div className='table_component' role='region' tabIndex='0'>
        <div className='mobile-table p-4 grid gap-2'>

          {/* Break subjects into two tables (5 subjects each) */}
          {[0, 1].map((tableIndex) => (
            <table key={tableIndex}>
              <thead>
                <tr>
                  {subjects.slice(tableIndex * 5, (tableIndex + 1) * 5).map((subject) => (
                    <th
                      key={subject.key}
                      className='p-2 text-xs font-semibold border border-gray-300 bg-gray-100'
                    >
                      {subject.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {subjects.slice(tableIndex * 5, (tableIndex + 1) * 5).map((subject) => (
                    <td
                      key={subject.key}
                      className={`p-2 border border-gray-300 ${getClassName(student[subject.key])}`}
                    >
                      {student[subject.key]}
                      <br />
                      <hr />
                      <span className='text-blue-600 font-bold'>{subject.max}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>

      {/* Summary Section */}
      <div className='mt-12 text-lg md:text-2xl font-medium grid gap-3'>
        <div className='top grid grid-cols-5 gap-2 text-center'>
          <p>التقييم العملي</p>
          <p>المجموع الكلى</p>
          <p>النسبة المئوية</p>
          <p>التقدير</p>
          <p>حالة الطالب</p>
        </div>
        <div className='bottom font-bold grid grid-cols-5 gap-2 text-center'>
          <p>
            <span className={getClassName(student.hospital)}>
              {student.hospital}
            </span>
            <br />
            <hr className='w-24 border-[1px] border-blue-500 mx-auto' />
            <span className='text-blue-600'>70</span>
          </p>
          <p>
            <span className={getClassName(student.total)}>
              {student.total}
            </span>
            <br />
            <hr className='w-24 border-[1px] border-blue-500 mx-auto' />
            <span className='text-blue-600'>{totalMax}</span>
          </p>
          <p>
            <span className={getClassName(student.total)}>
              {((student.total / totalMax) * 100).toFixed(2)}%
            </span>
          </p>
          <p>
            <span className={getClassName(student.appreciation)}>
              {student.appreciation}
            </span>
          </p>
          <p>
            <span className={getClassName(student.state)}>
              {student.state}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
