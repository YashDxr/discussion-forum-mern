export const validate = (schema) => {
  const middleware = (request, response, next) => {
    const result = schema.validate(request.body);
    if (result.error) {
      response.status(400).json({ message: "Validation failed" });
    } else {
      next();
    }
  };
  return middleware;
};
