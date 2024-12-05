import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import { useForm, Link } from "@inertiajs/react";
import StudentLayout from './StudentLayout.jsx';

const Index = ({ student }) => {
    const [editable, setEditable] = useState(false);
    const { post } = useForm();

    const logoutHandler = () => {
        post(route("user.logout"));
    };

    return (
        <>

    <h4 className="text-md font-medium leading-3">Assigned Assignments</h4>
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="h-8 w-8 text-slate-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
        <div className="leading-3">
          <p className=" text-sm font-bold text-slate-700">Ui Designer</p>
          <span className="text-xs text-slate-600">5 years</span>
        </div>
        <p className="text-sm text-slate-500 self-start ml-auto">
          As Ui Designer on Front Page
        </p>
      </div>
      <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="h-8 w-8 text-slate-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
        <div className="leading-3">
          <p className=" text-sm font-bold text-slate-700">Ui Designer</p>
          <span className="text-xs text-slate-600">5 years</span>
        </div>
        <p className="text-sm text-slate-500 self-start ml-auto">
          As Ui Designer on Front Page
        </p>
      </div>
      <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full ">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="h-8 w-8 text-slate-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
        <div className="leading-3">
          <p className=" text-sm font-bold text-slate-700">Ui Designer</p>
          <span className="text-xs text-slate-600">5 years</span>
        </div>
        <p className="text-sm text-slate-500 self-start ml-auto">
          As Ui Designer on Front Page
        </p>
      </div>
    </div>

        </>
    );
};

Index.layout = page => <StudentLayout children={page} />;
export default Index;
