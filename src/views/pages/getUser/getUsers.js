import AxiosBase from "../../../axios/AxiosBase";

export const getUsers = () =>
  new Promise((resolve, reject) => {
    AxiosBase.get("/users")
      .then((res) => {
        console.log("RESPONSE", res);

        resolve(res);
      })
      .catch((err) => {
        console.log("error", err);
        reject(err);
      });
  });
