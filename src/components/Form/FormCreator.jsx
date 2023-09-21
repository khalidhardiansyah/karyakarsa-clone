import React from "react";
import { Form } from 'react-router-dom'
import Input from "../Input/Input";
import Button from "../Button/Button";
import Select from "../Select/Select";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

function FormCreator({nextStep}) {
    const btnCreator = function(e) {
         e.preventDefault();
         nextStep()
    }
  return (
    <Form className="flex flex-col">
      <h2 className="font-bold">Pendaftaraan Kreator</h2>
      <p className="mt-3 mb-4">
        Yuk bergabung dengan <span className="font-bold">100,000+ kreator</span>{" "}
        lainnya!
      </p>
      <Input
        inputType="input"
        labelinput="Link halaman kreator"
        name="username"
        placeholder="karyakarsa.com/"
        icon={<ExclamationCircleIcon />}
      />
      <Select
        labelinput="Kategori Kreator"
        name="category"
        icon={<ExclamationCircleIcon />}
      />
      <Button
        onClick={btnCreator}
        labelButton="LANJUT"
        type="submit"
        style="primary"
      />
    </Form>
  );
}

export default FormCreator;
