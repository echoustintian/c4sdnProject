import { get, post, put, del } from "@/utils/request";

export const PeopleService = {
  getPeopleList: (params) => get("/stu/list", params),
  getPeopleListByCondition: (data, params) =>
    post("/stu/list/conditional", data, params),
  editPeople: (params) => put("/stu/edit", params),
  addPeople: (data, params) => post("/stu/add", data, params),
  deletePeople: (params) => del("/stu/delete", params),
  deleteAllPeople: (data) => post("/stu/delete/batch", data, {}),
};

export const CarService = {
  getCarList: (params) => get("/car/list", params),
  getCarListByCondition: (data, params) =>
    post("/car/list/conditional", data, params),
  editCar: (params) => put("/car/edit", params),
  addCar: (data, params) => post("/car/add", data, params),
  deleteCar: (params) => del("/car/delete", params),
  deleteAllCar: (data) => post("/car/delete/batch", data, {}),
};

export const LateService = {
  getLateList: (params) => get("/stu/list/absence", params),
};
