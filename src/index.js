window.addEventListener("load", function() {
  // grabbing UI from DOM
  const regionInput = document.getElementById("regionInput");
  const startDateInput = document.getElementById("startDateInput");
  const endDateInput = document.getElementById("endDateInput");
  const buttonDownload = document.getElementById("buttonDownload");
  const notificationDiv = document.getElementById("notificationDiv");

  buttonDownload.addEventListener("click", handleDownloadButton);

  function handleDownloadButton(e) {
    // date validation
    if (!regionInput.value) {
      console.error("regionInput ?");
      notificationDiv.innerHTML = "regionInput?";
      notificationDiv.style.color = "tomato";
    } else if (!startDateInput.value) {
      console.error("starting date ?");
      notificationDiv.innerHTML = "Starting date?";
      notificationDiv.style.color = "tomato";
    } else if (!endDateInput.value) {
      console.error("ending date ?");
      notificationDiv.style.color = "tomato";
      notificationDiv.innerHTML = "Ending date?";
    } else if (isStartDateBigger(startDateInput.value, endDateInput.value)) {
      notificationDiv.style.color = "tomato";
      notificationDiv.innerHTML = "Ending date cannot be earlier than the starting date!";
    } else {
      // if every check passes

      const downloadableObj = getDataWithinGivenTime(
        regionInput.value,
        startDateInput.value,
        endDateInput.value,
        sampleData
      );

      if (downloadableObj.length < 1) {
        console.log("no data");
        notificationDiv.innerHTML = `No data available for this time-frame and region`;
      } else {
        // prepare for downloading task
        var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(downloadableObj, null, 2));
        notificationDiv.innerHTML = `<a href="data:'${data}" download="FakePowerGridData_${regionInput.value}_${startDateInput.value}_${endDateInput.value}.json"> Download data of ${regionInput.value} from ${startDateInput.value} to ${endDateInput.value}</a>`;
      }
    }
  }
});
