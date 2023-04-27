const userSchema = {
  required: "El email es requerido",
  pattern: {
    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    message: "El email no es válido",
  },
};

const passwordSchema = {
  required: "La contraseña es requerida",
  minLength: {
    value: 4,
    message: "La contraseña debe tener mínimo 4 caracteres"
  }
};

export { userSchema , passwordSchema};
