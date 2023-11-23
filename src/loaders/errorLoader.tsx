export const errorLoader = async () => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Error de carga"));
    }, 1000);
  });
};
