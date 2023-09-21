import React from "react";
import { Form } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
function FormCreatorDetail({submitData}) {
    const btnFormCreatorDetail = function (e) {
        e.preventDefault();
        submitData(e)
       
    }
  return (
    <Form className="flex flex-col" method="post" onSubmit={btnFormCreatorDetail}>
      <h2 className="font-bold">Data Diri</h2>
      <p className="mt-3 mb-4">Lengkapi data diri kamu yah!</p>
      <Input
        labelinput="Nama Lengkap"
        type="text"
        name="fullname"
      
        icon={<ExclamationCircleIcon />}
      />
      <Input
        labelinput="Alamat Email"
        type="email"
        name="emailaddress"

        icon={<ExclamationCircleIcon />}
      />
      <Input
        labelinput="Nomor telpon"
        type="tel"
        name="telephone"

        icon={<ExclamationCircleIcon />}
      />
      <Input
        labelinput="Password"
        type="password"
        name="password"
        icon={<ExclamationCircleIcon />}
      />
      <Button labelButton="SELESAIKAN" type="submit" style="primary" />
    </Form>
  );
}

export default FormCreatorDetail;
