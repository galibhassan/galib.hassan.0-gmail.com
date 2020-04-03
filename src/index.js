window.addEventListener("load", function() {
  const regionInput = document.getElementById("regionInput");
  const startDateInput = document.getElementById("startDateInput");
  const endDateInput = document.getElementById("endDateInput");
  const buttonDownload = document.getElementById("buttonDownload");
  const notificationDiv = document.getElementById("notificationDiv");

  buttonDownload.addEventListener("click", handleDownloadButton);

  function handleDownloadButton(e) {
    if (!regionInput.value) {
      console.error("regionInput ?");
      notificationDiv.innerHTML = "regionInput?";
    } else if (!startDateInput.value) {
      console.error("starting date ?");
      notificationDiv.innerHTML = "Starting date?";
      notificationDiv.style.color = "tomato";
    } else if (!endDateInput.value) {
      console.error("ending date ?");
      notificationDiv.innerHTML = "Ending date?";
    } else {
      notificationDiv.innerHTML = "";

      console.log(getDataOfStartingDate(regionInput.value, startDateInput.value, sampleData));

      var obj = getDataOfStartingDate(regionInput.value, startDateInput.value, sampleData);
      var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj, null, 2));
      notificationDiv.innerHTML = `<a href="data:'${data}" download="PowerGridData_${regionInput.value}_${startDateInput.value}.json"> Download data of ${regionInput.value} - ${startDateInput.value}</a>`;
    }
  }
});
