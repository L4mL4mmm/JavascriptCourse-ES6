// Hàm simulateTask từ Bài 7
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

// Hàm runTask sử dụng async/await và try...catch
async function runTask() {
    console.log("Bắt đầu thực hiện task...");

    // Kiểm tra trường hợp thành công
    try {
        const result = await simulateTask(true);
        console.log("Kết quả từ await (Thành công):", result);
    } catch (error) {
        console.error("Lỗi xảy ra (Thành công):", error);
    }

    // Kiểm tra trường hợp thất bại
    try {
        const result = await simulateTask(false);
        console.log("Kết quả từ await (Thất bại):", result);
    } catch (error) {
        console.error("Lỗi xảy ra (Thất bại):", error);
    }
}

// Gọi hàm thực thi
runTask();