const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameRegExp = /^[a-zA-Z0-9 ]+$/;
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
const onlypositivenumbers = /^[0-9]+$/;

const validateUpdate = (data, fieldsToValidate = []) => {
  const errors = {};

  if (fieldsToValidate.includes('nombre') && !data.nombre) {
    errors.nombre = "Ingresa tu nombre.";
  } else if (data.nombre && (data.nombre.trim().length < 2 || data.nombre.trim().length > 30)) {
    errors.nombre = "Nombre invalido.";
  } else if (data.nombre && !nameRegExp.test(data.nombre)) {
    errors.nombre = "Este campo no acepta caracteres especiales.";
  }

  if (fieldsToValidate.includes('apellido') && !data.apellido) {
    errors.apellido = "Ingresa tu apellido.";
  } else if (data.apellido && !nameRegExp.test(data.apellido)) {
    errors.apellido = "Este campo no acepta caracteres especiales.";
  } else if (data.apellido && (data.apellido.trim().length < 2 || data.apellido.trim().length > 30)) {
    errors.apellido = "Apellido invalido.";
  }

  if (fieldsToValidate.includes('telefono') && data.telefono !== "0" && data.telefono.trim().length < 10) {
    errors.telefono = "Numero de telefono invalido";
  } else if (data.telefono == "0" && !onlypositivenumbers.test(data.telefono)) {
    errors.telefono = "Este campo solo admite números.";
  }

  if (fieldsToValidate.includes('pais') && !data.pais) {
    errors.pais = "Selecciona un pais válido.";
  }

  if (fieldsToValidate.includes('email') && data.email && !emailRegExp.test(data.email)) {
    errors.email = "Correo electrónico invalido.";
  }

  if (data.contrasenia && !passwordRegExp.test(data.contrasenia)) {
    errors.contrasenia = "Almenos: una mayúscula, una minúscula y un número.";
  }

  if (data.nuevaContrasenia && !passwordRegExp.test(data.nuevaContrasenia)) {
    errors.nuevaContrasenia = "Almenos: una mayúscula, una minúscula y un número.";
  }

  if (data.confirmarContrasenia && !passwordRegExp.test(data.confirmarContrasenia)) {
    errors.confirmarContrasenia = "Almenos: una mayúscula, una minúscula y un número.";
  }

  if (fieldsToValidate.includes('confirmarContrasenia') && data.confirmarContrasenia !== data.nuevaContrasenia) {
    errors.confirmarContrasenia = "Las contraseñas no coinciden.";
  }

  if (fieldsToValidate.includes('nuevaContrasenia') && data.nuevaContrasenia !== data.confirmarContrasenia) {
    errors.nuevaContrasenia = "Las contraseñas no coinciden.";
  }


  return errors;
};

export default validateUpdate;
