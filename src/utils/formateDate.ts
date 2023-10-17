export const formateDate = (date: string) => {
  const formattedDate = new Date(date)
    .toLocaleDateString("pt-BR", {
      dateStyle: "long",
    })
    .split(" ")
    .slice(0, 3);

  formattedDate[0] = date.split("-")[2];

  return formattedDate.join(" ");
};
