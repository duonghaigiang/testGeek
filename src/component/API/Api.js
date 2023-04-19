import axios from "axios";

const getUser = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    });
    if (res) {
      const data = res.data;
      return data;
    } else {
      console.log("không lấy đwược data");
    }
  } catch (error) {
    console.log("không thể call axios");
  }
};
const getTask = async (id) => {
  try {
    const res = await axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/users/${id}/todos`,
    });
    if (res) {
      return res.data;
    } else {
      console.log("không lấy được data");
    }
  } catch (error) {
    console.log("không thể call axios");
  }
};
const markTaskDone = async (id) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `https://jsonplaceholder.typicode.com/todos/${id}`,
      data: { completed: true },
    });
    if (res) {
      console.log(res.data);

      return res.data;
    } else {
      console.log("không lấy dữ liệu được");
    }
  } catch (error) {
    console.log("không thể call axios");
  }
};
export { getUser, getTask, markTaskDone };
