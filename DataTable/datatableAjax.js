$(document).ready(function () {
  $("#tableDisplay1").DataTable({
    ajax: {
      url: "//fakerestapi.azurewebsites.net/api/v1/Activities",
      dataSrc: "",
    },
    columns: [
      { data: "id" },
      { data: "title" },
      { data: "dueDate" },
      { data: "completed" },
    ],
  });

  $("#tableDisplay2").DataTable({
    paging: false,
    ajax: {
      url: "https://reqres.in/api/users?page=2",
      dataSrc: "data",
    },
    columns: [
      { data: "id" },
      { data: "email" },
      { data: "first_name" },
      { data: "last_name" },
      { data: "avatar" },
    ],
  });
});
