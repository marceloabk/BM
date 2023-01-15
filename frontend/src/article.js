const getArticle = async (id) => {
  return import("./mocks/articles/" + id).then((res) => {
    return fetch(res.default)
      .then((response) => response.text())
      .catch((err) => console.log(err));
  });
};

export { getArticle };
