import React from 'react';

const Field = (props) => {
  const handleChange = (event) => {
    props.onChange(event); // Pass the event to the parent component's onChange handler
  };

  return (
    <div className="my-3 p-3">
      <div className="mb-3">
        <label>
          {props.title}
          <span className="px-2 text-red-600">{props.required ? '*' : null}</span>
        </label>
      </div>
      <div>
        {props.type === 'radio' ? (
          props.options.map((item, index) => (
            <div key={index}>
              <label>
                <input
                  type={props.type}
                  name={props.name}
                  required={props.required}
                  value={item}
                  className=""
                  onChange={handleChange}
                />{' '}
                {item}
              </label>
            </div>
          ))
        ) : props.type === 'textarea' ? (
          <textarea
            className="border-black p-3 border-2 rounded-lg w-full h-48"
            name={props.name}
            value={props.value} 
            onChange={handleChange}
          ></textarea>
        ) : (
          <input
            type={props.type}
            name={props.name}
            required={props.required}
            className={`focus:outline-none border-b-2 border-gray-700 focus:border-red-700 ${
              props.type !== 'radio' ? 'w-64 focus:w-96 transition-all duration-500' : ''
            }`}
            value={props.value} 
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default Field;
