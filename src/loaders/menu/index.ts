import data from "./fakeData.json";

export const loaderItemsMenu = async () => {
  const sortChildren = (parent: any) => ({
    ...parent,
    children: parent.children
      ? parent.children
          .sort((a: any, b: any) => a.position - b.position)
          .map(sortChildren)
      : undefined,
  });

  return await new Promise((resolve, __) => {
    setTimeout(() => {
      resolve({
        internals: data
          .filter((item) => item.internal)
          .sort((a, b) => a.position - b.position)
          .map(sortChildren),
        externals: data.filter((item) => !item.internal),
      });
    }, 1000);
  });
};

export const errorLoader = async () => {
  return await new Promise((__, reject) => {
    setTimeout(() => {
      reject(new Error("Error de carga"));
    }, 1000);
  });
};
