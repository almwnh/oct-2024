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
  // Helper to check if any result is "راسب"
  const isFailed = [
    student.theory,
    student.practical,
    student.E,
    student.surgical,
    student.anatomy,
    student.first_aids,
    student.infection_control,
    student.women,
    student.pharma,
    student.medical,
    student.hospital,
    student.state,
  ].some(val => val === "راسب");

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
                <td className={`p-2 border border-gray-300 ${isFailed ? "text-red-600 font-bold" : ""}`}>
                  {student.theory}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>50</span>
                </td>
                <td className={`p-2 border border-gray-300 ${isFailed ? "text-red-600 font-bold" : ""}`}>
                  {student.practical}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>90</span>
                </td>
                <td className={`p-2 border border-gray-300 ${isFailed ? "text-red-600 font-bold" : ""}`}>
                  {student.E}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>30</span>
                </td>
                <td className={`p-2 border border-gray-300 ${isFailed ? "text-red-600 font-bold" : ""}`}>
                  {student.surgical}
                  <br />
                  <hr className='' />
                  <span className='text-red-600 font-bold'>50</span>
                </td>
                <td className={`p-2 border border-gray-300 ${isFailed ? "text-red-600 font-bold" : ""}`}>
                  {student.anatomy}
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
                <td className={`p-2 border border-gray-300 ${isFailed ? "text-red-600 font-bold" : ""}`}>{student.first_aids}</td>
                <td className={`p-2 border border-gray-300 ${isFailed ? "text-red-600 font-bold" : ""}`}>{student.infection_control}</td>
                <td className={`p-2 border border-gray-300 ${isFailed ? "text-red-600 font-bold" : ""}`}>{student.women}</td>
                <td className={`p-2 border border-gray-300 ${isFailed ? "text-red-600 font-bold" : ""}`}>{student.pharma}</td>
                <td className={`p-2 border border-gray-300 ${isFailed ? "text-red-600 font-bold" : ""}`}>{student.medical}</td>
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
            <span
              className={
                isFailed
                  ? 'text-red-600'
                  : !isNaN(student.hospital)
                  ? 'text-black'
                  : 'text-red-600'
              }
            >
              {student.hospital}
            </span>
            <br />
            <hr className='w-24 border-[1px] border-blue-500 mx-auto' />
            <span className='text-blue-600'>70</span>
          </p>
          <p>
            <span className={isFailed ? "text-red-600" : ""}>
              {student.total}
            </span>
            <br />
            <hr className='w-24 border-[1px] border-blue-500 mx-auto' />
            <span className='text-blue-600'>550</span>
          </p>
          <p>
            <span className={isFailed ? "text-red-600" : ""}>
              {((student.total / 550) * 100).toFixed(2)}%
            </span>
          </p>
          <p>
            <span className={isFailed ? "text-red-600" : ""}>
              {student.appreciation}
            </span>
          </p>
          <p>
            <span className={isFailed ? "text-red-600" : "text-gray-800"}>
              {student.state}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
