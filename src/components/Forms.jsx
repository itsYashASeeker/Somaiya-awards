import React, { useState } from 'react';
import FormStages from './FormStages';
import OutsatndingInstForm from '../data/OutsatndingInstForm';
import Field from './utils/Field';
import "../css/formStages.css";

const Forms = () => {
  const limit = 8;
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});

  const [prevS, setPS] = useState("1S");

  function selStage(eT) {
    if (eT.id == prevS) {
      return false;
    }
    document.getElementById(eT.id).classList.add("selected");
    document.getElementById(prevS).classList.remove("selected");
    setPS(eT.id);
    var g = Number(eT.id.split("")[0])-1;
    if (g <= limit) {
      setCurrent(g);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  const handleNext = () => {
    if (current < limit) {
      setCurrent(current + 1);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const renderFields = () => {
    return OutsatndingInstForm.map((entry, index) => {
      if (current === entry.page - 1) {
        return (
          <Field
            type={entry.type}
            title={entry.title}
            name={entry._name}
            required={entry.requiredStatus}
            options={entry.options}
            value={formData[entry._name] || ''}
            onChange={handleFieldChange}
            key={index}
          />
        );
      }
      return null;
    });
  };

  return (
    <div className="">
      <div className='stages'>
        <button id='1S' onClick={(e) => { selStage(e.target) }} className='selected'>1</button>
        <span></span>
        <button id='2S' onClick={(e) => { selStage(e.target) }}>2</button>
        <span></span>
        <button id='3S' onClick={(e) => { selStage(e.target) }}>3</button>
        <span></span>
        <button id='4S' onClick={(e) => { selStage(e.target) }}>4</button>
        <span></span>
        <button id='5S' onClick={(e) => { selStage(e.target) }}>5</button>
        <span></span>
        <button id='6S' onClick={(e) => { selStage(e.target) }}>6</button>
        <span></span>
        <button id='7S' onClick={(e) => { selStage(e.target) }}>7</button>
        <span></span>
        <button id='8S' onClick={(e) => { selStage(e.target) }}>8</button>
        <span></span>
        <button id='9S' onClick={(e) => { selStage(e.target) }}>9</button>
      </div>

      <div className="border-black border-[1] mx-auto rounded-xl shadow-2xl bg-0xFAF9F6 p-3 w-[70%]">
        <div className="text-sm bg-red-300 font-bold italic rounded-lg p-3 my-5">
          You may please attach relevant supporting documents in the attachment section at the end of the form. Kindly mention N.A. to the fields not applicable or not relevant.
        </div>
        <div className="text-center text-sm italic">
          Page {current + 1} of {limit + 1}
        </div>

        <div className="form py-5 px-3">
          {renderFields()}

          <div className="mt-10 px-3 flex justify-between">
            <button
              onClick={handlePrevious}
              className="shadow-md w-28 bg-red-600 text-white text-lg p-3 rounded-xl"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="shadow-md w-28 bg-red-600 text-white text-lg p-3 rounded-xl"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
