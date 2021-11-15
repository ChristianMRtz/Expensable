export const LoginUser = async (email, password) => {
  const url = "https://expensable-api.herokuapp.com/login";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();

    if (response.status === 200) {
      window.sessionStorage.setItem("token", data.token);

      return data;
    }
  } catch (error) {
    alert(error);
  }
};
