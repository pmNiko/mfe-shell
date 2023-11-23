import data from "./fakeData.json";

export const loaderItemsMenu = async () => {
  return await new Promise((resolve, __) => {
    setTimeout(() => {
      resolve({
        internals: data.filter((item) => item.internal),
        externals: data.filter((item) => !item.internal),
      });
    }, 1000);
  });
};
