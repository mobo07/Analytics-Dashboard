"use client";
import { DataGrid } from "@mui/x-data-grid";
import person1 from "../assets/people/person1.png";
import person2 from "../assets/people/person2.png";
import person3 from "../assets/people/person3.png";
import person4 from "../assets/people/person4.png";
import person5 from "../assets/people/person5.png";
import downloadFileIcon from "../assets/icons/document-download.svg";
import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";

export default function TableWidget() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleModal = (data) => {
    setShowModal(true);
    setModalData(data);
  };

  const columns = [
    {
      field: "Name",
      headerName: "Name",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="flex gap-2 items-center">
            <Image
              src={params.row.img[`person${params.row.id}`]["src"]}
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <h6 className="font-semibold">{params.row.Name}</h6>
          </div>
        );
      },
    },
    { field: "Date", headerName: "Date", width: 130 },
    {
      field: "Amount",
      headerName: "Amount",
      width: 120,
      renderCell: (params) => (
        <h6 className="font-semibold">{params.row.Amount}</h6>
      ),
    },
    {
      field: "Status",
      headerName: "Status",
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <p
          className={`${
            params.row.Status === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]"
          }`}
        >
          {params.row.Status}
        </p>
      ),
    },
    {
      field: "Invoice",
      headerName: "Invoice",
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <span
          className="cursor-pointer flex items-center gap-1"
          onClick={() => handleModal(params.row)}
        >
          <Image src={downloadFileIcon} alt="" />
          {params.row.Invoice}
        </span>
        // <OpenModalButton rowData={params.row} />
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      Name: "Marcus Bergson",
      img: { person1 },
      Date: "Nov 15, 2023",
      Amount: "$80,000",
      Status: "Paid",
      Invoice: "View",
    },
    {
      id: 2,
      Name: "Jayden Vaccaro",
      img: { person2 },
      Date: "Nov 15, 2023",
      Amount: "$150,000",
      Status: "Refund",
      Invoice: "View",
    },
    {
      id: 3,
      Name: "Corey Schiefer",
      img: { person3 },
      Date: "Nov 14, 2023",
      Amount: "$87,000",
      Status: "Paid",
      Invoice: "View",
    },
    {
      id: 4,
      Name: "Cooper Press",
      img: { person4 },
      Date: "Nov 14, 2023",
      Amount: "$100,000",
      Status: "Refund",
      Invoice: "View",
    },
    {
      id: 5,
      Name: "Philip Lubin",
      img: { person5 },
      Date: "Nov 13, 2023",
      Amount: "$78,000",
      Status: "Paid",
      Invoice: "View",
    },
  ];
  return (
    <div className="px-4 py-5">
      <div className="flex items-center justify-between mb-3">
        <h6 className="font-semibold">Last Orders</h6>
        <p className="text-[#34CAA5] cursor-pointer">See All</p>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{
            border: "none",
            fontFamily: "inherit",
            color: "inherit",
          }}
        />
      </div>
      {showModal && (
        <Modal show={showModal} setShow={setShowModal} data={modalData} />
      )}
    </div>
  );
}
