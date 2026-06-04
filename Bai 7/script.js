function simulateTask(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Task Completed!");
            } else {
                reject("Task Failed!");
            }
        }, 2000);
    });
}

// Trường hợp thành công (Resolve)
simulateTask(true)
    .then((message) => {
        console.log("Thành công:", message);
    })
    .catch((error) => {
        console.error("Lỗi:", error);
    });

// Trường hợp thất bại (Reject)
simulateTask(false)
    .then((message) => {
        console.log("Thành công:", message);
    })
    .catch((error) => {
        console.error("Lỗi:", error);
    });