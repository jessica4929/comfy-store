const FormInput = ({ label, name, type, placeholder, size }) => {
  return (
    <label className="form-control" htmlFor={name}>
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={placeholder}
        placeholder={placeholder}
        className={`input input-bordered ${size}`}
      />
    </label>
  );
};
export default FormInput;
