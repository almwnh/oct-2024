import React from 'react'

export const AllDegrees = ({ student }) => {

  const tableHeaders = [
    'التمريض النظرى',
    'التمريض العملى',
    'الترمنولوجى',
    'التمريض الباطنى و الجراحي',
    'التشريح',
    'الاسعافات الأولية',
    'مكافحة العدوى',
    'تمريض النساء و الأطفال',
    'الفارما',
    'التحاليل الطبية',
  ]
  return (
    <div>
      <h2 className='text-2xl font-medium text-center mb-8'>
        بيان بدرجات الطالب المذكور أعلاه
      </h2>
      <div className="table_component" role="region" tabindex="0">

        {/* Mobile Div */}

        <div className='mobile-table  p-4 grid gap-2'>
          <table>
            <thead>
              <tr>

                <th className="p-2 text-xs font-semibold border border-gray-300 bg-gray-100">
                  التمريض النظرى
                </th>
                <th className="p-2 text-xs font-semibold border border-gray-300 bg-gray-100">
                  التمريض العملى
                </th>
                <th className="p-2 text-xs font-semibold border border-gray-300 bg-gray-100">
                  الترمنولوجى
                </th>
                <th className="p-2 text-xs font-semibold border border-gray-300 bg-gray-100">
                  التمريض الباطنى و الجراحي
                </th>
                <th className="p-2 text-xs font-semibold border border-gray-300 bg-gray-100">
                  التشريح
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-300">
                  {student.theory}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>50</span>

                </td>
                <td className="p-2 border border-gray-300">{student.practical}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>90</span>
                </td>
                <td className="p-2 border border-gray-300">{student.E}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>30</span>
                </td>
                <td className="p-2 border border-gray-300">{student.surgical}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>50</span>
                </td>
                <td className="p-2 border border-gray-300">{student.anatomy}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>50</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>

                <th className="p-2 text-xs font-semibold border border-gray-300 bg-gray-100">
                  الاسعافات الأولية
                </th>
                <th className="p-2 text-xs font-semibold border border-gray-300 bg-gray-100">
                  مكافحة العدوى
                </th>
                <th className="p-2 text-xs font-semibold border border-gray-300 bg-gray-100">
                  تمريض النساء و الأطفال
                </th>
                <th className="p-2 text-xs font-semibold border border-gray-300 bg-gray-100">
                  فارما
                </th>
                <th className="p-2 text-xs font-semibold border border-gray-300 bg-gray-100">
                  التحاليل الطبية
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-300">
                  {student.first_aids}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>30</span>

                </td>
                <td className="p-2 border border-gray-300">{student.infection_control}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>30</span>
                </td>
                <td className="p-2 border border-gray-300">{student.women}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>50</span>
                </td>
                <td className="p-2 border border-gray-300">{student.pharma}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>50</span>
                </td>
                <td className="p-2 border border-gray-300">{student.medical}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>50</span>
                </td>
              </tr>
            </tbody>
          </table>

        </div>



      </div>


      <div className='mt-12 text-lg md:text-2xl font-medium grid gap-3'>
        <div className='top grid grid-cols-5 gap-2 text-center'>
          <p>
            التقييم العملي
          </p>
          <p>
            المجموع الكلى
          </p>
          <p>
            النسبة المئوية
          </p>
          <p>
            التقدير
          </p>
          <p>
            حالة الطالب
          </p>
        </div>
        <div className='bottom font-bold grid grid-cols-5 gap-2 text-center'>
          <p>
            {student.hospital} <br /> <hr className='w-24 border-[1px] border-red-500 mx-auto' /> <span className='text-red-600'>70</span>
          </p>
          <p>
            {student.total} <br /> <hr className='w-24 border-[1px] border-red-500 mx-auto' /> <span className='text-red-600'>550</span>
          </p>
          <p>
            {((student.total / 550) * 100).toFixed(2)}%
          </p>
          <p>
            {student.appreciation}
          </p>
          <p>
            <span className='text-gray-800'>{student.state}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
