import { getFormBody } from "../../../core/apiUtils";
import { createJobURL } from "../../../core/constants";

export const createJob = async (
  name: string,
  id: string,
  status: string,
  location: string,
  description: string,
  pay: string,
  type: string,
  question1: string,
  question2: string,
  question3: string,
  question4: string,
) => {
  const url = createJobURL;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: getFormBody({
      name,
      id,
      status,
      location,
      description,
      pay,
      type,
      question1,
      question2,
      question3,
      question4,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
      }
    });
};

export async function login(email: string, password: string, navigate: any) {
  const url = loginURL;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: getFormBody({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Login data", data);
      if (data.success) {
        sessionStorage.setItem("token", data.data.token);
        navigate("/dashboard");
      }
    });
}
