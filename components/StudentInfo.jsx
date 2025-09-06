"use client";

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Image from "next/image";

export default function StudentInfo({ student }) {

  const {
    name,
    id,
    address,
    code,
    birth
  } = student

  function getStatus(grade, max) {
    switch (true) {
      case grade === "null":
        return 'لم يحضر';
      case grade < max / 2:
        return grade + ' - راسب';
      default:
        return grade;
    }
  }

  function getColor(grade, max) {
    switch (true) {
      case grade === "null":
        return 'warning';
      case grade < max / 2:
        return 'danger';
      default:
        return 'success';
    }
  }

  function isPassed() {
    if (
      parseInt(women) >= 25 &&
      parseInt(pharma) >= 25 &&
      parseInt(analysis) >= 25
    ) {
      return 'success'
    }

    return 'danger'
  }

  return (
    <div className="relative grid gap-4 mb-16 p-4">
      <h3 className="section__title text-3xl">معلومات الطالب</h3>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h3 className="section__title">
            البيانات الشخصية
          </h3>
          <Table isStriped>
            <TableHeader>
              <TableColumn className="text-start">اسم الطالب</TableColumn>
              <TableColumn className="text-start">{name}</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>الرقم القومى</TableCell>
                <TableCell>{id}</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>العنوان</TableCell>
                <TableCell>{address}</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>تاريخ الميلاد</TableCell>
                <TableCell>{birth}</TableCell>
              </TableRow>
              {code && (
                <TableRow key="4">
                  <TableCell>الرقم الاكاديميى</TableCell>
                  <TableCell>{code}</TableCell>
                </TableRow>
              )}
              <TableRow key="5">
                <TableCell>الفرع</TableCell>
                <TableCell>{`${code}`.slice(0, 1) === 'D' ? 'دسوق' : 'كفر الشيخ'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-52 h-64 lg:h-80 mt-2">
            <Image className="object-cover" width={800} height={800} src={`/pics/${id}.jpg`} alt="Student Picture" />
          </div>
        </div>
      </div>
    </div>
  );
}
