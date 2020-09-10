// var tenantID = "{tenantID}"
var tenantID = "stresstest"

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, function (c) {
            return (c ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        }
    )
}

function roiUpID() {
    var id = localStorage.getItem("daas-metrics-aid");
    if (id == null) {
        if (tenantID === "{tenantID}") {
            tenantID = "unknown"
        }
        id = tenantID + "-" + uuidv4()
        localStorage.setItem("daas-metrics-aid", id)
        return id
    }
    return id
}