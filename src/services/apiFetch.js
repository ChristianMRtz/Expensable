const url = "https://expensable-api.herokuapp.com/";

export const apiGetFetch = async (endpoint) => {
  try {
    const response = await fetch(url + endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token=${sessionStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
  }
};

export const apiDeleteFetch = async (endpoint) => {
  try {
    const response = await fetch(url + endpoint, {
      method: "DELETE",
      headers: {
        Authorization: `Token token=${sessionStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
};
